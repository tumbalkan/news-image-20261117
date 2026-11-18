// Entry program for make.fun news-image-20261117 (Node 22, standard library only).
// The front page is rendered ahead of time into entry.png; this program copies
// it to the output directory the grader reads.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The rendered front page sits beside this file; the grader reads it from /output.
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');

copyFileSync(src, dst);
console.log(`news-image-20261117: wrote ${dst}`);
