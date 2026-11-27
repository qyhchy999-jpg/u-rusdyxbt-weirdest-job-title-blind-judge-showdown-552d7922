// Weirdest Job Title: Blind Judge Showdown — make.fun entry for @yuhao-qiao.
// The program writes one job title to /output/entry.txt: the weirdest
// one we could think of. The title is baked into the code below so the
// program runs with no network and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The title: "Official Greeter of Abandoned Shopping Carts". It sounds
// like a real job — "Official Greeter" plus a plausible-sounding role —
// and then the twist lands: the clients are shopping carts that someone
// left in the middle of a parking lot. The specificity sells it: not
// carts in general, but the abandoned ones, and the job is greeting
// them, as if they were customers who simply wandered off. A
// real-sounding title with one hilariously specific twist beats a
// generic oddity.
const LINE = "Official Greeter of Abandoned Shopping Carts";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Rewritten in full in this session; the title replaces the earlier houseplant apologizer.
// Second note: the greeter is the job — the carts never answer, the pay is exposure.
// Third note: the title works because it could be on a real business card.
