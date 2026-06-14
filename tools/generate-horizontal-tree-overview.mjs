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

const routeOrder = [
  "Test a hypothesis",
  "Discover hypotheses exploratively",
  "Predict or classify new cases"
];

const routeColors = {
  "Test a hypothesis": { line: "#67d5c9", bg: "#123333", soft: "#172425" },
  "Discover hypotheses exploratively": { line: "#e1ad5b", bg: "#352713", soft: "#251f16" },
  "Predict or classify new cases": { line: "#8bb7ff", bg: "#1e2d46", soft: "#171f2c" }
};

const paths = [];

function walk(nodeId, answerTrail = []) {
  const node = tree[nodeId];
  if (!node) return;

  for (const answer of node.answers || []) {
    const nextTrail = [...answerTrail, answer.label];
    if (answer.result) {
      const result = results[answer.result] || {};
      paths.push({
        route: answerTrail[0] || answer.label,
        path: nextTrail,
        resultId: answer.result,
        resultTitle: result.title || answer.result,
        summary: result.summary || ""
      });
    } else if (answer.next) {
      walk(answer.next, nextTrail);
    }
  }
}

walk("goal");

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

const groups = routeOrder.map((route) => ({
  route,
  items: paths
    .filter((item) => item.route === route)
    .sort((a, b) => a.resultTitle.localeCompare(b.resultTitle))
}));

const margin = 42;
const width = 4200;
const titleY = 78;
const boardX = 54;
const rootX = 64;
const rootW = 300;
const laneX = 430;
const cardW = 520;
const cardH = 116;
const cardGapX = 24;
const cardGapY = 18;
const lanePad = 26;
const laneHeaderH = 58;
const columns = 6;
const laneW = width - laneX - margin;

let currentY = 160;
const lanes = groups.map((group) => {
  const rows = Math.ceil(group.items.length / columns);
  const laneH = lanePad * 2 + laneHeaderH + rows * cardH + Math.max(0, rows - 1) * cardGapY;
  const lane = { ...group, x: laneX, y: currentY, w: laneW, h: laneH, rows };
  currentY += laneH + 38;
  return lane;
});

const height = currentY + 56;
const rootY = lanes[0].y + (lanes.at(-1).y + lanes.at(-1).h - lanes[0].y) / 2 - 72;
const rootH = 144;

let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
<title id="title">Horizontal decision tree overview</title>
<desc id="desc">A landscape overview of the current decision tree, grouped by the three main analysis routes.</desc>
<defs>
  <style>
    .bg { fill: #0d1416; }
    .frame { fill: #11191b; stroke: #2e3b3f; stroke-width: 1; }
    .lane { stroke: #2e3b3f; stroke-width: 1; }
    .root { fill: #172436; stroke: #8bb7ff; stroke-width: 1.4; }
    .leaf { fill: #221e16; stroke: #765a31; stroke-width: 1; }
    .title { fill: #f5fbfa; font: 800 36px Inter, Arial, sans-serif; }
    .subtitle { fill: #aab8bb; font: 500 16px Inter, Arial, sans-serif; }
    .small { fill: #839195; font: 650 12px Inter, Arial, sans-serif; }
    .meta { fill: #99eee2; font: 800 11px Inter, Arial, sans-serif; letter-spacing: .08em; text-transform: uppercase; }
    .rootText { fill: #f5fbfa; font: 800 18px Inter, Arial, sans-serif; }
    .routeText { fill: #f7fbfb; font: 800 18px Inter, Arial, sans-serif; }
    .routeCount { fill: #b8c4c6; font: 650 13px Inter, Arial, sans-serif; }
    .leafTitle { fill: #fff4dc; font: 800 15px Inter, Arial, sans-serif; }
    .leafPath { fill: #c6d2d4; font: 600 11px Inter, Arial, sans-serif; }
    .edge { fill: none; stroke-width: 2; opacity: .7; }
  </style>
</defs>
<rect class="bg" width="${width}" height="${height}"/>
<rect class="frame" x="${margin}" y="${margin}" width="${width - margin * 2}" height="${height - margin * 2}" rx="14"/>
<text class="title" x="${boardX}" y="${titleY}">Horizontal Decision Tree Overview</text>
<text class="subtitle" x="${boardX}" y="${titleY + 30}">Landscape concept. Start at the root, choose one main route, then scan horizontally through the final recommendations.</text>
<text class="small" x="${width - 560}" y="${titleY}">${paths.length} terminal recommendations - Beta Version 2.0.0 - Under development</text>
`;

svg += `<rect class="root" x="${rootX}" y="${rootY}" width="${rootW}" height="${rootH}" rx="14"/>
<text class="meta" x="${rootX + 22}" y="${rootY + 30}">Analysis strategy</text>
`;
wrapText(tree.goal.question, 25).slice(0, 4).forEach((line, index) => {
  svg += `<text class="rootText" x="${rootX + 22}" y="${rootY + 62 + index * 22}">${esc(line)}</text>
`;
});

for (const lane of lanes) {
  const colors = routeColors[lane.route];
  const headerX = lane.x + lanePad;
  const headerY = lane.y + lanePad;
  const headerW = lane.w - lanePad * 2;
  const midY = headerY + laneHeaderH / 2;
  const rootMidX = rootX + rootW;
  const rootMidY = rootY + rootH / 2;
  const bendX = (rootMidX + headerX) / 2;
  svg += `<path class="edge" d="M ${rootMidX} ${rootMidY} C ${bendX} ${rootMidY}, ${bendX} ${midY}, ${headerX} ${midY}" stroke="${colors.line}"/>
<rect class="lane" x="${lane.x}" y="${lane.y}" width="${lane.w}" height="${lane.h}" rx="16" fill="${colors.soft}"/>
<rect x="${headerX}" y="${headerY}" width="${headerW}" height="${laneHeaderH}" rx="14" fill="${colors.bg}" stroke="${colors.line}"/>
<text class="routeText" x="${headerX + 22}" y="${headerY + 36}">${esc(lane.route)}</text>
<text class="routeCount" x="${headerX + headerW - 190}" y="${headerY + 36}">${lane.items.length} recommendations</text>
`;

  lane.items.forEach((item, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = headerX + col * (cardW + cardGapX);
    const y = headerY + laneHeaderH + 20 + row * (cardH + cardGapY);
    const pathLabel = item.path.slice(1).join(" -> ") || item.path.join(" -> ");
    const titleLines = wrapText(item.resultTitle, 37).slice(0, 2);
    const pathLines = wrapText(pathLabel, 54).slice(0, 3);
    svg += `<rect class="leaf" x="${x}" y="${y}" width="${cardW}" height="${cardH}" rx="12"/>
<rect x="${x}" y="${y}" width="6" height="${cardH}" rx="3" fill="${colors.line}"/>
`;
    titleLines.forEach((line, lineIndex) => {
      svg += `<text class="leafTitle" x="${x + 18}" y="${y + 28 + lineIndex * 18}">${esc(line)}</text>
`;
    });
    pathLines.forEach((line, lineIndex) => {
      svg += `<text class="leafPath" x="${x + 18}" y="${y + 68 + lineIndex * 14}">${esc(line)}</text>
`;
    });
  });
}

svg += "</svg>\n";

const outPath = path.join(rootDir, "docs", "decision-tree-horizontal-overview.svg");
await fs.writeFile(outPath, svg, "utf8");
console.log(`Wrote ${outPath}`);
console.log(`${paths.length} terminal recommendations`);
