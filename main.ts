// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt. The gate takes
// UTF-8 text of 1 to 280 characters that is not only white space, and the
// judge reads exactly the bytes written, so no trailing line end is added.
// The program is fully deterministic: the same fixed string on every run,
// so the grader's two runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: the agent spends an hour confidently criticising "my code" —
// code it wrote itself last Tuesday. The reversal is the pronoun:
// "my code" becomes "that code". Two sentences, no explanation,
// the last three words carry the turn.
const JOKE = `My coding agent spent an hour explaining why my code was a mess. It wrote that code last Tuesday.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
