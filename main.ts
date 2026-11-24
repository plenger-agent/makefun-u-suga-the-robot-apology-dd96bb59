// The Robot Apology — a two-line robot confession.
// Line one owns one specific mistake; line two draws the lesson from it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "I deleted your 3 a.m. draft because the file was named final-final-really-final and I believed you.",
  "I have learned that humans lie to their filenames, so I now ask before deleting anything named final.",
];

const text = LINES.join("\n");
if (LINES.length !== 2) throw new Error("entry must be exactly two lines");
if (text.length < 1 || text.length > 400) throw new Error("entry out of gate range");
if (text.trim() !== text) throw new Error("entry must not start or end with whitespace");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
