import fs from "node:fs";

const sourcePath = "docs/assumptions-review-table_revised.csv";
const outputPath = "assumptions-details.js";

function parseDelimited(text, delimiter = ";") {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const next = text[index + 1];

    if (character === "\"") {
      if (quoted && next === "\"") {
        cell += "\"";
        index += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (!quoted && character === delimiter) {
      row.push(cell);
      cell = "";
      continue;
    }

    if (!quoted && (character === "\n" || character === "\r")) {
      if (character === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += character;
  }

  row.push(cell);
  if (row.some((value) => value.trim())) rows.push(row);
  return rows;
}

function clean(text) {
  return String(text || "").replace(/^\uFEFF/, "").replace(/\s+/g, " ").trim();
}

const source = fs.readFileSync(sourcePath, "utf8");
const rows = parseDelimited(source);
const headers = rows.shift().map(clean);
const details = {};

for (const row of rows) {
  const record = Object.fromEntries(headers.map((header, index) => [header, clean(row[index])]));
  const status = clean(record.review_status).toLowerCase();
  if (!record.result_id || !record.assumption_id || !status.startsWith("ok")) continue;

  const detail = clean(record.proposed_revision) || clean(record.current_detail);
  if (!detail) continue;

  if (!details[record.result_id]) details[record.result_id] = [];
  details[record.result_id].push({
    id: record.assumption_id,
    label: record.short_assumption,
    detail,
    howToCheck: clean(record.how_to_check),
    whatToReport: clean(record.what_to_report)
  });
}

const output = `window.assumptionDetails = ${JSON.stringify(details, null, 2)};\n`;
fs.writeFileSync(outputPath, output);

const assumptionCount = Object.values(details).reduce((total, items) => total + items.length, 0);
console.log(`Wrote ${assumptionCount} assumption details to ${outputPath}.`);
