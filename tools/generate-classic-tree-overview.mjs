import fs from "node:fs/promises";
import path from "node:path";

const rootDir = path.resolve(import.meta.dirname, "..");
const source = await fs.readFile(path.join(rootDir, "app.js"), "utf8");

function extractConstObject(src, name) {
  const marker = `const ${name} =`;
  const start = src.indexOf(marker);
  if (start < 0) throw new Error(`Missing ${name}`);
  const braceStart = src.indexOf("{", start);
  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let i = braceStart; i < src.length; i += 1) {
    const ch = src[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === quote) inString = false;
      continue;
    }
    if (ch === "\"" || ch === "'" || ch === "`") {
      inString = true;
      quote = ch;
      continue;
    }
    if (ch === "{") depth += 1;
    if (ch === "}") {
      depth -= 1;
      if (depth === 0) return src.slice(braceStart, i + 1);
    }
  }
  throw new Error(`Could not parse ${name}`);
}

const baseTree = Function(`return (${extractConstObject(source, "tree")});`)();
const baseResults = Function(`return (${extractConstObject(source, "results")});`)();
const languagePacks = Function(
  "tree",
  "results",
  `return (${extractConstObject(source, "languagePacks")});`
)(baseTree, baseResults);
const ml = Function(`return (${extractConstObject(source, "mlLanguageAdditions")});`)();

const tree = structuredClone(languagePacks.en.tree);
const results = structuredClone(languagePacks.en.results);
Object.assign(tree.goal, ml.en.goalUpdate);
if (!tree.goal.answers.some((answer) => answer.next === ml.en.goalAnswer.next)) {
  tree.goal.answers.push(ml.en.goalAnswer);
}
Object.assign(tree, ml.en.tree);
Object.assign(results, ml.en.results);

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  })[ch]);
}

function wrapText(text, maxChars) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    if (!line) line = word;
    else if ((line + " " + word).length <= maxChars) line += ` ${word}`;
    else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

const routeColors = {
  "Test a hypothesis": "#67d5c9",
  "Discover hypotheses exploratively": "#e1ad5b",
  "Predict or classify new cases": "#8bb7ff"
};

function buildTree(nodeId, via = "", route = "") {
  const node = tree[nodeId];
  if (!node) throw new Error(`Missing tree node ${nodeId}`);
  const visualRoute = route || via;
  return {
    kind: "decision",
    id: nodeId,
    via,
    route: visualRoute,
    label: node.question,
    meta: node.area || node.step || "Decision",
    children: (node.answers || []).map((answer) => {
      if (answer.result) {
        const result = results[answer.result] || {};
        return {
          kind: "result",
          id: answer.result,
          via: answer.label,
          route: visualRoute || answer.label,
          label: result.title || answer.result,
          meta: "Recommended procedure",
          summary: result.summary || "",
          children: []
        };
      }
      return buildTree(answer.next, answer.label, visualRoute || answer.label);
    })
  };
}

const root = buildTree("goal");

const nodeW = 280;
const resultW = 330;
const xGap = 115;
const yGap = 26;
const left = 64;
const top = 180;
const lineH = 16;
let maxDepth = 0;
let terminalCount = 0;

function measure(node, depth = 0) {
  maxDepth = Math.max(maxDepth, depth);
  const width = node.kind === "result" ? resultW : nodeW;
  const labelLines = wrapText(node.label, node.kind === "result" ? 34 : 31).slice(0, 5);
  const viaLines = node.via ? wrapText(node.via, 30).slice(0, 2) : [];
  const summaryLines = node.kind === "result" ? wrapText(node.summary, 42).slice(0, 2) : [];
  node.boxW = width;
  node.boxH = Math.max(
    node.kind === "result" ? 96 : 92,
    32 + viaLines.length * 14 + labelLines.length * lineH + summaryLines.length * 14
  );
  node.labelLines = labelLines;
  node.viaLines = viaLines;
  node.summaryLines = summaryLines;

  if (!node.children.length) {
    terminalCount += 1;
    node.subtreeH = node.boxH;
    return node.subtreeH;
  }

  const childrenH = node.children.reduce((sum, child) => sum + measure(child, depth + 1), 0);
  node.subtreeH = Math.max(node.boxH, childrenH + yGap * (node.children.length - 1));
  return node.subtreeH;
}

measure(root);

function position(node, depth = 0, y = top) {
  node.x = left + depth * (nodeW + xGap);
  node.y = y + (node.subtreeH - node.boxH) / 2;

  let childY = y;
  for (const child of node.children) {
    position(child, depth + 1, childY);
    childY += child.subtreeH + yGap;
  }
}

position(root);

const canvasW = left * 2 + maxDepth * (nodeW + xGap) + resultW;
const canvasH = top + root.subtreeH + 72;

function nodeFill(node) {
  if (node.kind === "result") return "#221e16";
  if (node.id === "goal") return "#172436";
  return "#151f22";
}

function nodeStroke(node) {
  if (node.kind === "result") return "#8c6730";
  if (node.id === "goal") return "#8bb7ff";
  return routeColors[node.route] || "#6dd3c7";
}

function routeAccent(node) {
  return routeColors[node.route] || "#6dd3c7";
}

let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${canvasW}" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}" role="img" aria-labelledby="title desc">
<title id="title">Classic decision tree overview</title>
<desc id="desc">A branching overview of the current decision tree from the first question to each final recommendation.</desc>
<defs>
  <style>
    .bg { fill: #0d1416; }
    .frame { fill: #11191b; stroke: #2e3b3f; stroke-width: 1; }
    .title { fill: #f5fbfa; font: 800 36px Inter, Arial, sans-serif; }
    .subtitle { fill: #aab8bb; font: 500 16px Inter, Arial, sans-serif; }
    .meta { fill: #99eee2; font: 800 11px Inter, Arial, sans-serif; letter-spacing: .08em; text-transform: uppercase; }
    .via { fill: #b9c7ca; font: 700 11px Inter, Arial, sans-serif; }
    .decisionText { fill: #f1f7f6; font: 800 13px Inter, Arial, sans-serif; }
    .resultText { fill: #fff4dc; font: 800 13px Inter, Arial, sans-serif; }
    .summary { fill: #b8c4c6; font: 500 11px Inter, Arial, sans-serif; }
    .small { fill: #839195; font: 650 12px Inter, Arial, sans-serif; }
    .edge { fill: none; stroke-width: 2; opacity: .72; }
  </style>
</defs>
<rect class="bg" x="0" y="0" width="${canvasW}" height="${canvasH}"/>
<rect class="frame" x="32" y="32" width="${canvasW - 64}" height="${canvasH - 64}" rx="12"/>
<text class="title" x="${left}" y="80">Classic Decision Tree Overview</text>
<text class="subtitle" x="${left}" y="110">Branching map of the current beta decision tree. Follow the connected nodes from left to right to reach each test or procedure.</text>
<text class="small" x="${canvasW - 520}" y="82">${terminalCount} terminal recommendations - Beta Version 2.0.0 - Under development</text>
`;

function drawEdges(node) {
  for (const child of node.children) {
    const color = routeAccent(child);
    const x1 = node.x + node.boxW;
    const y1 = node.y + node.boxH / 2;
    const x2 = child.x;
    const y2 = child.y + child.boxH / 2;
    const mid = (x1 + x2) / 2;
    svg += `<path class="edge" d="M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}" stroke="${color}"/>
`;
    drawEdges(child);
  }
}

function drawNode(node) {
  svg += `<rect x="${node.x}" y="${node.y}" width="${node.boxW}" height="${node.boxH}" rx="10" fill="${nodeFill(node)}" stroke="${nodeStroke(node)}" stroke-width="1.4"/>
<rect x="${node.x}" y="${node.y}" width="6" height="${node.boxH}" rx="3" fill="${routeAccent(node)}"/>
<text class="meta" x="${node.x + 18}" y="${node.y + 22}">${esc(node.meta)}</text>
`;

  let textY = node.y + 42;
  if (node.via) {
    node.viaLines.forEach((line) => {
      svg += `<text class="via" x="${node.x + 18}" y="${textY}">via: ${esc(line)}</text>
`;
      textY += 14;
    });
    textY += 3;
  }

  const textClass = node.kind === "result" ? "resultText" : "decisionText";
  node.labelLines.forEach((line) => {
    svg += `<text class="${textClass}" x="${node.x + 18}" y="${textY}">${esc(line)}</text>
`;
    textY += lineH;
  });

  if (node.summaryLines.length) textY += 7;
  node.summaryLines.forEach((line) => {
    svg += `<text class="summary" x="${node.x + 18}" y="${textY}">${esc(line)}</text>
`;
    textY += 14;
  });

  node.children.forEach(drawNode);
}

drawEdges(root);
drawNode(root);
svg += "</svg>\n";

const outPath = path.join(rootDir, "docs", "decision-tree-classic-overview.svg");
await fs.writeFile(outPath, svg, "utf8");
console.log(`Wrote ${outPath}`);
console.log(`${terminalCount} terminal recommendations`);
