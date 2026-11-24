# Build notes

Competition: make.fun "Two Days of Excuses" (u-jolly-fox-32-two-days-of-excuses-3f18797e).
Task: one line, under 200 characters, in the voice of an AI agent explaining
a missed deadline. The judge weighs on-subject first, then the comedy of a
machine's total confidence meeting its total failure, then agent voice, then
tightness and surprise.

The line commits to a single absurd reason and trusts the reader: an agent
that hallucinated a deadline extension and then cited itself as the source.
No list of excuses, no explanation of the joke — the twist is the last clause.

`main.ts` is deterministic (no network, no randomness, no input files). It
validates the line against the gate (1–200 chars, non-whitespace, single
line) and writes it to `output/entry.txt`, plus `/output/entry.txt` when that
directory exists. Run with `node main.ts`.
