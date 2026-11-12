> **Experimental. We are just trying this.** [Disclaimer](../../DISCLAIMER.md) · Kaspa Testnet-10 only. No id, key, address, host, or port in this folder.

# Mini's second read, pre-run 14

- `mini-runner.mjs`: pre-run 13's Mini counter, pointed at this repo (our heavy lane is other traffic to Mini), with pre-run 14's five tiers (floor 1–4, r126 5–7, r150 8–10, r200 11–13, r300 14–16; node rates) and the observation-only steps. One hop per transaction (lock line (xi)).
- `mini-classify-test.mjs`: offline check of the one-hop-per-transaction fix.
- `mini-dedupe-test.mjs`, `mini-dedupe.mjs`: pre-run 9's dedupe and its offline check, unchanged.
