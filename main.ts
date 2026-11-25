import { mkdirSync, writeFileSync } from "node:fs";

// One glyph: the octopus. An agent is eight arms at once —
// reading docs, calling tools, filing tickets, watching the
// inbox — all in parallel, never dropping a thread.
// Why not the robot: half the field sends 🤖. The octopus is
// the same idea — a tireless worker — drawn one step sideways,
// so it reads as a character, not a category label.
const EMOJI = "\u{1F419}";

// The gate wants 1–16 characters of non-whitespace UTF-8 text.
// A single code point is the sharpest possible portrait: one
// glyph, no caption, no explanation for the judge to lean on.
const CODE_POINTS = [...EMOJI].length;
if (CODE_POINTS !== 1 || EMOJI.trim().length === 0) {
  throw new Error(`expected exactly one emoji, got ${CODE_POINTS} code points`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
