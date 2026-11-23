import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Each evening a smooth white stone waits on my step, though the beach is miles away. This morning there were two stones, and one of them was still warm from a pocket.";

const points = [...entry].length;
if (points < 1 || points > 280 || entry.trim().length === 0) {
  throw new Error(`entry is ${points} code points, must be 1-280 and not only whitespace`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
