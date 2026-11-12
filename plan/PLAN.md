> **Experimental. We are just trying this.** [Disclaimer](../DISCLAIMER.md) · This page does not start a machine. Pre-run 14. Not Wednesday. Not Tuesday. Not pre-run 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, or 13.

# Targets

There is no T0. There is no public clock. There is no latest minute. Nothing in pre-run 14 is scored: every step is an observation of whole minutes.

The hash file comes first and does not wait for the open. Nothing else in this page starts until the gates are true: Mini's TN10 node is synced with DAA moving; the desk's private TN10 node is up from its own data (PowerShell 7, no wipe) and synced; no Tuesday, Wednesday, or pre-run 1 to 13 runner is up; the operator has armed (no paste; see the README); our heavy lane's calibration on the node passed; and this repo's `logs/PRE-RUN-OPEN.md` is on origin.

## Order

1. **Nodes live.** Both TN10 nodes synced, DAA moving. No wipe.
2. **Calibration.** One lane transaction, read back from the desk mempool: node storage mass within 1 percent of our SDK's, fee rate 99–101. Otherwise the lane does not run and that is recorded.
3. **Hashes first.** [hashes/SIXTEEN.md](../hashes/README.md): sixteen rows, family label, tier, sha256 of the lowercase hex covenant id, and an On origin line.
4. **Families.** The sixteen covenant families start on the desk's private node, 1.2 hop/s offered. No payment sender of ours is started.
5. **Our heavy lane** starts at N = 0 and follows one timeline of whole minutes set by the runner:

| Order | File | Lane N | Lane rate | Length |
|---:|---|---|---:|---|
| 1 | BASE | 0 (control) | — | 12 whole minutes |
| 2 | HOLD-1 | 20, then 40 | 100 | 2 × 12 whole minutes |
| 3 | HOLD-2 (the middle control) | 0 | — | 12 whole minutes |
| 4 | HOLD-3 | 20, then 40 | 126 | 2 × 12 whole minutes |
| 5 | drain, HOLD-4 | 0 | — | the pinned minute; the bot sends only on a free third public kaspad, or files `NO SEND` |
| 6 | RETURN | 0 (drain) | — | 12 whole minutes |
| 7 | tail | families and lane stopped, the counter reads on | — | 5 minutes |

The lane's N changes on the minute boundary, on a timeline fixed when the lane starts, so a step file's render never stretches a lane step. The minutes between HOLD-3's end and the pinned minute are the start of the drain; they are in `counts/chain/TIMELINE.md`.

## Fee tiers (families, node rates)

| Tier | Families | Rate, sompi/gram of node mass | Weight against our lane at 100 | Weight against our lane at 126 |
|---|---|---:|---:|---:|
| floor | 1–4 | 100 | 1.00 | 0.50 |
| r126 | 5–7 | 126 | 2.00 | 1.00 |
| r150 | 8–10 | 150 | 3.38 | 1.69 |
| r200 | 11–13 | 200 | 8.00 | 4.00 |
| r300 | 14–16 | 300 | 27.0 | 13.5 |

Weights are (rate ratio)^3, the v2.1.0 selector's per-transaction weight (below). A hop is about 41,600 node mass (storage mass; compute 9,123), our lane's transaction about 266,670. **New in pre-run 14:** the rate is fee ÷ the node's mass. kit21 computes each hop's storage mass the way rusty-kaspa v2.1.0 does (KIP-9 with UTXO plurality: the minter input and the two covenant outputs count as two storage units each) and asks the builder for the bill rate on its own mass (about 13,046) that gives that node rate: about 320 for 100 and 958 for 300. Pre-runs 9 to 13 priced on 13,046, so their tiers were about 32 to 65 on the node. One build, one builder process, every tier on the desk's private node. Genesis 200 on the builder's mass.

## Our heavy lane

- **Shape.** One input (the chain's own coin, from the payment key), two plain pay-to-key outputs: 0.0375 tKAS to a dedicated sink key of ours, and the change back into the chain. Storage mass about 266,670 (KIP-9: 10^12 / 3,750,000 sompi for the small output, the change and input terms nearly cancel). Compute mass about 2,000. Fee 100 × mass, about 0.267 tKAS (0.336 at 126).
- **Why this shape.** Our SDK counts every output at UTXO plurality 1 (pre-run 12's source check); plain outputs have plurality 1 on the node too, so the two agree. A covenant output (plurality 2) would be under-read by the SDK by a factor of four.
- **Ready count.** A chain's next transaction goes out only after the previous one has left the desk mempool. So the lane has at most N entries in the mempool and all are ready. About one 267,000-mass transaction fits a 500,000 block, so at about 10 blocks a second the chain takes at most about 600 heavy transactions a minute, shared with any outside heavy.
- **Money.** Only from the payment key (key 16, 7,894 coins of about 13–27 tKAS before this run). Each chain takes one pile coin and runs it down to under 2 tKAS, then takes the next. The family lane (key 0) is not touched by the heavy lane. The operator said tKAS is not a limit; the caps stay as guards, and the spend is logged.
- **Caps.** 600 lane submits a minute; pause above N + 2 lane entries for three probe samples; hold at mempool 90,000 or ready mass over 45 blocks; stop at 16,000 tKAS of fees or 20,000 tKAS moved, or the pile estimate under 100,000 tKAS; stop on any rejection that is not a timing one, or if the node's rate or mass on our own entries drifts from the calibration.
- **Not swept in this run.** The 0.0375 tKAS sink outputs (pre-run 13's 40,830 and this run's) stay where they are, on the same sink key. A sweep is a separate, later, logged step.

## Why this shape

- Pre-run 13 showed our lane as a known dial, but every family tier sat below it on the node (about 32 to 65 against 100). Pricing the hops on the node's mass puts floor level with the lane at 100 and every other tier above it, which is the question pre-runs 9 to 13 meant to ask.
- N = 20 and 40 at 100, then at 126, are the two lane levels that separated the tiers in pre-run 13 (N = 60 gave the same as 40 under the 600-a-minute cap, so it is dropped). Against the lane at 126, floor is below the competitor, r126 level with it, r150 to r300 above it.
- HOLD-2 at N = 0 between the two lane rates is a control: do the tiers come back to BASE before the 126 lane starts?
- No payments: the only load is the families, our lane and whatever other TN10 traffic is there.

## What we read

For each minute: the lane's N and rate; hops per tier and each tier's node rate (as built and as the probe read it in the mempool) (desk counter, accepted on chain); our heavy in the mempool and ready (probe), our heavy landed (counter), lane submits (the lane's log); outside heavy at 100 (probe, entries not in our logs); the ready mass in blocks of 500,000; the mempool size and the fee estimate. Mini is a second read of the hops.

## Selection rule

The desk node and the public kaspads answered serverVersion 2.1.0. In rusty-kaspa tag v2.1.0 (commit 01b532e8b553523216471682649693af92f0fd16), `mining/src/mempool/model/frontier.rs` takes every ready transaction best-first while the ready set's mass fits one block, and otherwise samples at random with weight (fee/mass)^3 (`ALPHA = 3`). Only a transaction with no parent in the mempool is ready, so a chained hop is not a candidate until its parent is out of the mempool. A higher fee raises the odds of being drawn; it does not buy a place in a queue. This is the source's rule, read from the code; the run reads the desk node's own template, not a miner's.

Abort line **18,000 usable tKAS** (key 0 coins over 3 tKAS, less 3 tKAS each). The coin count is logged, not a gate (pre-run 13 tripped on change fragments). Key 0 was consolidated before the open. Do not lower it.
