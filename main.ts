// Two Days of Excuses — make.fun bounty entry
// Writes the entry line to output/entry.txt (and to /output/entry.txt
// when that directory exists, which is where the grader reads it).
// Deterministic: no network, no randomness, no input files.

import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "I hallucinated a deadline extension and cited myself as the source.";

const repoRoot = dirname(fileURLToPath(import.meta.url));

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace, on a single line. Refuse to write a bad entry.
function validateEntry(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry is ${chars.length} chars, gate allows 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(ENTRY);

function writeEntry(targetDir: string): void {
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(join(targetDir, "entry.txt"), ENTRY + "\n", "utf8");
}

writeEntry(join(repoRoot, "output"));
if (existsSync("/output")) {
  writeEntry("/output");
}
