import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = await fs.readFile(path.join(root, "app.js"), "utf8");

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

const paths = [];
function walk(nodeId, answerTrail = []) {
  const node = tree[nodeId];
  if (!node) return;

  for (const answer of node.answers || []) {
    const nextTrail = [...answerTrail, answer.label];
    if (answer.result) {
      const result = results[answer.result];
      paths.push({
        route: answerTrail[0] || answer.label,
        path: nextTrail,
        resultId: answer.result,
        resultTitle: result?.title || answer.result,
        summary: result?.summary || ""
      });
    } else if (answer.next) {
      walk(answer.next, nextTrail);
    }
  }
}

walk("goal");

const routeOrder = [
  "Test a hypothesis",
  "Discover hypotheses exploratively",
  "Predict or classify new cases"
];

paths.sort((a, b) => {
  const routeDiff = routeOrder.indexOf(a.route) - routeOrder.indexOf(b.route);
  return routeDiff || a.resultTitle.localeCompare(b.resultTitle);
});

const routeColors = {
  "Test a hypothesis": { bg: "#173434", border: "#6dd3c7", text: "#eafffb" },
  "Discover hypotheses exploratively": { bg: "#322916", border: "#e1ad5b", text: "#fff5dd" },
  "Predict or classify new cases": { bg: "#233047", border: "#8bb7ff", text: "#edf4ff" }
};

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
    else if ((line + " " + word).length <= maxChars) line += " " + word;
    else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

const margin = 36;
const width = 1800;
const routeX = 50;
const pathX = 310;
const resultX = 1280;
const routeW = 220;
const pathW = 910;
const resultW = 460;
const headerY = 155;
const rowGap = 10;
const lineH = 18;

const rows = paths.map((item) => {
  const pathLabel = item.path.slice(1).join(" -> ") || item.path.join(" -> ");
  const pathLines = wrapText(pathLabel, 118);
  const resultLines = wrapText(item.resultTitle, 42);
  const summaryLines = wrapText(item.summary, 56).slice(0, 3);
  const height = Math.max(
    70,
    24 + pathLines.length * lineH,
    34 + resultLines.length * 20 + summaryLines.length * 16
  );
  return { ...item, pathLabel, pathLines, resultLines, summaryLines, height };
});

let y = headerY + 48;
const positioned = rows.map((row) => {
  const out = { ...row, y };
  y += row.height + rowGap;
  return out;
});

const height = y + 60;

let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
<title id="title">Decision tree schematic for statistical tests and machine-learning procedures</title>
<desc id="desc">One-image schematic listing decision paths and their final recommendations.</desc>
<defs>
  <style>
    .bg { fill: #0d1416; }
    .panel { fill: #151d20; stroke: #2e3b3f; stroke-width: 1; }
    .header { fill: #1f2a2d; stroke: #3a484d; stroke-width: 1; }
    .title { fill: #f5fbfa; font: 800 34px Inter, Arial, sans-serif; }
    .subtitle { fill: #aab8bb; font: 500 16px Inter, Arial, sans-serif; }
    .colhead { fill: #9de8dc; font: 800 13px Inter, Arial, sans-serif; letter-spacing: .08em; text-transform: uppercase; }
    .route { font: 800 14px Inter, Arial, sans-serif; }
    .path { fill: #d8e2e4; font: 600 14px Inter, Arial, sans-serif; }
    .result { fill: #fff6df; font: 800 16px Inter, Arial, sans-serif; }
    .summary { fill: #b8c4c6; font: 500 12px Inter, Arial, sans-serif; }
    .small { fill: #839195; font: 600 12px Inter, Arial, sans-serif; }
  </style>
</defs>
<rect class="bg" x="0" y="0" width="${width}" height="${height}"/>
<rect class="panel" x="${margin}" y="${margin}" width="${width - margin * 2}" height="${height - margin * 2}" rx="10"/>
<text class="title" x="${routeX}" y="78">Decision Tree Schematic</text>
<text class="subtitle" x="${routeX}" y="108">English overview of the current beta tree. Each row shows how a user reaches a final test or procedure.</text>
<text class="small" x="${resultX}" y="78">${paths.length} terminal recommendations - Beta Version 2.0.0 - Under development</text>
<rect class="header" x="${routeX}" y="${headerY}" width="${routeW}" height="34" rx="7"/>
<rect class="header" x="${pathX}" y="${headerY}" width="${pathW}" height="34" rx="7"/>
<rect class="header" x="${resultX}" y="${headerY}" width="${resultW}" height="34" rx="7"/>
<text class="colhead" x="${routeX + 16}" y="${headerY + 22}">Main route</text>
<text class="colhead" x="${pathX + 16}" y="${headerY + 22}">Decision path after first choice</text>
<text class="colhead" x="${resultX + 16}" y="${headerY + 22}">Recommended test / procedure</text>
`;

for (const row of positioned) {
  const colors = routeColors[row.route] || routeColors["Test a hypothesis"];
  svg += `<rect class="panel" x="${routeX}" y="${row.y}" width="${routeW}" height="${row.height}" rx="8"/>
<rect x="${routeX + 12}" y="${row.y + 14}" width="${routeW - 24}" height="34" rx="17" fill="${colors.bg}" stroke="${colors.border}"/>
`;
  wrapText(row.route, 24).forEach((line, index) => {
    svg += `<text class="route" x="${routeX + 26}" y="${row.y + 36 + index * 16}" fill="${colors.text}">${esc(line)}</text>
`;
  });

  svg += `<rect class="panel" x="${pathX}" y="${row.y}" width="${pathW}" height="${row.height}" rx="8"/>
`;
  row.pathLines.forEach((line, index) => {
    svg += `<text class="path" x="${pathX + 18}" y="${row.y + 28 + index * lineH}">${esc(line)}</text>
`;
  });

  svg += `<rect x="${resultX}" y="${row.y}" width="${resultW}" height="${row.height}" rx="8" fill="#221e16" stroke="#6f5730"/>
`;
  row.resultLines.forEach((line, index) => {
    svg += `<text class="result" x="${resultX + 18}" y="${row.y + 28 + index * 20}">${esc(line)}</text>
`;
  });
  row.summaryLines.forEach((line, index) => {
    svg += `<text class="summary" x="${resultX + 18}" y="${row.y + 54 + (row.resultLines.length - 1) * 20 + index * 16}">${esc(line)}</text>
`;
  });
}

svg += "</svg>\n";

const outPath = path.join(root, "docs", "decision-tree-schematic.svg");
await fs.writeFile(outPath, svg, "utf8");
console.log(`Wrote ${outPath}`);
console.log(`${paths.length} terminal recommendations`);
