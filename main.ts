// Weirdest Job Title: Blind Judge Showdown — make.fun entry for @yuhao-qiao.
// The program writes one job title to /output/entry.txt: the weirdest
// one we could think of. The title is baked into the code below so the
// program runs with no network and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The title: "Professional Apologizer to Houseplants". It sounds like
// a real job — "Professional" plus a plausible-sounding role — and
// then the twist lands: the clients are houseplants. The specificity
// sells it: not plants in general, but the ones you forgot to water,
// and the job is apologizing to them. A real-sounding title with one
// hilariously specific twist beats a generic oddity.
const LINE = "Professional Apologizer to Houseplants";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the title and logic are unchanged.
// Second pass: the apology is the job — the plants never forgive, the pay is exposure.
// Third note: the title works because it could be on a real business card.
