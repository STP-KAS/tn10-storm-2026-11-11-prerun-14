# Method, pre-run 14

> This is our own Kaspa Testnet-10 testing. What follows is what we observed in this run, on our own nodes; it is not a claim of how TN10 or Kaspa behave in general.

> Counts only. Desk side. Submit-OK is the desk sender log; included is the desk counter's read of what the desk's private TN10 node accepted on chain. Mini's files are a second read.

Steps (our own heavy lane on one absolute timeline): BASE = N0-control 12 min; HOLD-1 = N20-r100 12 min, N40-r100 12 min; HOLD-2 = N0-mid 12 min; HOLD-3 = N20-r126 12 min, N40-r126 12 min; then N0-drain through the HOLD-4 minute and RETURN 12 min, then a 5-minute counter tail.

Our heavy lane, from its own log: 13,150 transactions submitted OK of 13,150, 0 rejected, 0 chains lost to an orphan timeout, 4,031 tKAS of fees and 493 tKAS parked on our own sink key, 203 payment-pile coins taken, stop state none.

Accepted hops per cohort, as the desk's coordinator read them: floor 13,688, r126 11,874, r150 12,829, r200 13,784, r300 14,489.

Per step (all OBSERVATION, families plus our own heavy lane, no payment of ours):

- BASE: OBSERVATION, submit-OK 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0; our payments included 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0; hops included floor/r126/r150/r200/r300 2116/1694/1740/1804/1832; counter minutes not kept-pace 0 of 12.
- HOLD-1: OBSERVATION, submit-OK 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0; our payments included 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0; hops included floor/r126/r150/r200/r300 3309/2982/3257/3521/3745; counter minutes not kept-pace 0 of 24.
- HOLD-2: OBSERVATION, submit-OK 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0; our payments included 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0; hops included floor/r126/r150/r200/r300 1952/1657/1757/1840/1920; counter minutes not kept-pace 0 of 12.
- HOLD-3: OBSERVATION, submit-OK 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0; our payments included 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0; hops included floor/r126/r150/r200/r300 3113/2882/3255/3632/3916; counter minutes not kept-pace 0 of 24.
- HOLD-4: OBSERVATION, submit-OK 0; our payments included 0; hops included floor/r126/r150/r200/r300 179/148/157/160/164; counter minutes not kept-pace 0 of 1.
- RETURN: OBSERVATION, submit-OK 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0; our payments included 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0; hops included floor/r126/r150/r200/r300 2018/1690/1782/1898/1961; counter minutes not kept-pace 0 of 12.

Decent on the desk side: every step file reached origin.

## Selection rule, read before the run

The desk node and the kept public kaspads answered serverVersion 2.1.0 at the preflight. In rusty-kaspa tag v2.1.0 (commit 01b532e8b553523216471682649693af92f0fd16), `mining/src/mempool/model/frontier.rs` `build_selector` takes every ready transaction best-first while the ready set's mass fits one block, and otherwise samples at random with weight (fee/mass)^3 (`ALPHA = 3` in `mining/src/mempool/model/frontier/selectors.rs`, weight in `mining/src/mempool/model/frontier/feerate_key.rs`): `sample_inplace` above four blocks' mass, `MutatingTreeSelector` between one and four. Only a transaction with no parent in the mempool is in the ready set (`mining/src/mempool/model/transactions_pool.rs`), so a chained hop is not a candidate until its parent is out of the mempool. Against an outside stream at 100, the weights are 1.00 (100), 1.33 (110), 2.00 (126), 3.38 (150) and 8.00 (200), per unit of mass. A higher fee raises the odds; it does not buy a place in a queue. This is the source's rule, read from the code; the run does not see a miner's template.

Hop rates per hop, one builder: floor (families 1–4) 100 sompi/gram on the desk's private node, r126 (families 5–7) 126 sompi/gram on the desk's private node, r150 (families 8–10) 150 sompi/gram on the desk's private node, r200 (families 11–13) 200 sompi/gram on the desk's private node, r300 (families 14–16) 300 sompi/gram on the desk's private node. Payments 150. The funding coins were not one size, so the fee is not called the whole cause. Every tier was read and submitted on the desk's private TN10 node, which also ran the counter. No payment sender was started; 2 unique public kaspads were read for sync only.

## Misses

- none

## Fixes

- none

## On origin

- counts/desk/BASE.md: 2026-11-12T18:34:22Z
- counts/desk/HOLD-1.md: 2026-11-12T18:58:22Z
- counts/desk/HOLD-2.md: 2026-11-12T19:10:22Z
- counts/desk/HOLD-3.md: 2026-11-12T19:34:22Z
- counts/desk/HOLD-4.md: 2026-11-12T19:39:23Z
- counts/desk/RETURN.md: 2026-11-12T19:52:22Z
- counts/chain/TIMELINE.md: 2026-11-12T19:57:36Z
- counts/chain/MEMPOOL.md: 2026-11-12T19:57:39Z
