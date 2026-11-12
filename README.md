> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> **This is a pre-run. Pre-run 14.** It is not the Wednesday run. It is not the Tuesday run. It is not pre-run 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, or 13. A read does not start a runner.

# tn10-storm-2026-11-11-prerun-14

**Pre-run 14 of the Wednesday neuron.** The neuron stays [tn10-storm-2026-11-11](https://github.com/STP-KAS/tn10-storm-2026-11-11). This repo does not edit that repo, does not write `REVIEW_CLOSED`, and does not set or move a clock for it. [tn10-storm-2026-11-10](https://github.com/STP-KAS/tn10-storm-2026-11-10) (Tuesday) is not edited from here either.

> **Our own testing.** This is our own Kaspa Testnet-10 testing, run on our own machines and nodes. What these pages report is what we observed in this run; it is not a claim of how TN10 or Kaspa behave in general.

**Where this starts.** Pre-runs 1 to 4 failed and are closed. Pre-runs 5 to 12 finished through RETURN and are closed. Pre-run 13 ran through the pinned HOLD-4 minute and failed in RETURN on its coin-count abort line; it is closed. The index of all of them is the [pre-run 2 README](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-2#pre-runs-in-this-rehearsal); the cumulative findings are in [tn-master](https://github.com/STP-KAS/tn-master). This repo starts from [pre-run 13's locks/LOCKED.md](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-13/blob/e711613/locks/LOCKED.md) at commit e711613, copied here as [locks/LOCKED.md](locks/LOCKED.md), with a pre-run 14 section added at the end.

## What pre-run 13 left open

[Pre-run 13](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-13) ran our own heavy lane (about 266,670 storage mass per transaction at 100, one step at 126) against five covenant fee tiers. After the run we read our hops' fee and mass from the desk mempool and found that pre-runs 9 to 13 had priced each hop on the builder's mass (13,046), while the node rates it on its storage mass (about 40,400–43,800, because the covenant outputs count as two storage units each). So the "100" to "200" tiers sat at about 32 to 65 on the node, below our heavy lane at 100 in every tier. We did not test hops paying the same rate as the competitor, or more, per unit of the node's own mass.

## What pre-run 14 tries

The question: **when covenant hops are priced on their real node-side mass, so the node rates them at 100, 126, 150, 200 and 300, how do they fare against a heavy competitor of ours at the same rate (100) and at a higher rate (126), at ready count N = 0, 20 and 40? Does a hop at a rate at or above its competitor's keep its BASE pace?**

> **We run our own heavy lane on TN10 again, and it slows other TN10 users' low-fee transactions.** In this pre-run we submit our own bounded stream of heavy transactions (about 266,670 storage mass each, 100 sompi/gram, then 126) from our own test coins. While it runs, other TN10 users' transactions paying up to about the lane's rate wait longer. The operator gave the explicit OK for the lane (2026-11-12) and said tKAS is not a limit. It is calibrated on the node first, capped by ready count, by a per-minute submit cap and by a spend cap, stepped down to zero at the end, and every step is in this repo. This is our own testing; tKAS has no value.

- **Hops priced on the node's mass (kit21).** For each hop the family sender computes the storage mass the node will charge (rusty-kaspa v2.1.0 KIP-9 storage mass with UTXO plurality), and asks the builder for a fee so that fee ÷ node mass is the tier's rate. Tiers, by node rate: floor (families 1–4) 100, r126 (5–7) 126, r150 (8–10) 150, r200 (11–13) 200, r300 (14–16) 300 sompi/gram. One build, one builder, every tier on the desk's private node. No payment load of ours.
- **Calibrated on the node before the open.** One calibration covenant (not one of the sixteen families) with two hops built this way, read back from the desk mempool: see [PLAYBOOK.md](PLAYBOOK.md#status-when-this-repo-was-opened).
- **Our heavy lane** as in pre-run 13: N parallel chains from the payment key, one input and two plain outputs (0.0375 tKAS to our own sink key, change back), at most N in the mempool, all ready. Calibrated again before the open.
- **Steps on one timeline, 12 whole minutes each:** BASE (N = 0), HOLD-1 = N = 20 then 40 at 100, HOLD-2 = N = 0 (the middle control), HOLD-3 = N = 20 then 40 at 126, then N = 0 (the drain) through the pinned HOLD-4 minute and RETURN (12 minutes), and the counter's 5-minute tail. All are `OBSERVATION`. The HOLD file names are kept so the bot's and Mini's gates read as before.
- **Guards.** The lane's guards are pre-run 13's (N + 2 pause, 600 submits a minute, hold at mempool 90,000 or ready mass over 45 blocks, stop at 16,000 tKAS of fees or 20,000 tKAS moved or the pile under 100,000 tKAS, stop on a non-timing rejection or a drift from the calibration). The family lane's abort line is now **18,000 usable tKAS**, not a coin count, after key 0 was consolidated (pre-run 13's coin count tripped on change fragments).
- **Bot waiter fixed.** Every fetch is killed if it hangs, and a free-node check that comes late is written as late.

All locked lines from earlier pre-runs stay, except where the pre-run 14 block in [locks/LOCKED.md](locks/LOCKED.md) says what changes and why.

## Machines

| Machine | Go file | First sentence |
|---|---|---|
| Desk | [GO-DESK.md](GO-DESK.md) | DESK. I send and count on pre-run 14. This is not Wednesday. |
| Mini | [GO-MINI.md](GO-MINI.md) | MINI. I count pre-run 14 as the second read. I do not send. This is not Wednesday. |
| Bot | [GO-BOT.md](GO-BOT.md) | GROKBOT. I send payments on the pre-run 14 HOLD-4 only. I do not count. This is not Wednesday. |

The operator does not paste. On 2026-11-12 he asked TN10 ops for covenant pre-runs under congestion and competition, pre-run 11 and then 12, 13 or more as needed (voice, 09:06 and 09:09 Brussels time), and at 10:04 in chat said "Keep exploring". For our own heavy lane he gave the explicit OK in chat at about 11:08 and 11:10 Brussels time ("Do whatever you think is needed", then "No need to keep it short. Tn is for testing. Test at will"), and at 15:19 he said tKAS is not a limit. That is the arm for pre-run 14 and its heavy lane. The agents start the runners once the gates are facts. [GO.md](GO.md) is the map, [PLAYBOOK.md](PLAYBOOK.md) has the roles and gates, and [plan/PLAN.md](plan/PLAN.md) has the targets and the reasons.

## Gates, in order

No clock. Each gate is a fact read from a node or from origin.

1. Mini's TN10 node is up from its own data, synced, DAA moving.
2. The desk's private TN10 node is up from its own data (PowerShell 7), synced, DAA moving.
3. No other runner or waiter is up. The family lane is above its abort line (18,000 usable tKAS). The desk's private candidate list is present.
4. `hashes/SIXTEEN.md` is on origin: sixteen rows and an On origin line, from the sixteen-family path.
5. The desk pushes `logs/PRE-RUN-OPEN.md`; Mini pushes `logs/MINI-ARMED.md`.
6. The probe and the desk counter are up. Then the families, our heavy lane at N = 0, and the observation steps on the lane's timeline.

Before the open: the hop calibration (node rate within 1 percent of 100 and of 300) and the lane's calibration passed.

## What a decent result is

- `hashes/SIXTEEN.md` on origin before the first family submit.
- Every step file on origin, each with hops per minute for all five tiers, each tier's node rate, the lane's N and rate, our heavy and the outside heavy apart, and the probe's table for the same minutes.
- `counts/chain/TIMELINE.md` and `counts/chain/MEMPOOL.md` after the tail, and RETURN on origin this time.
- An answer to the question, or an honest "not answered" with the reason.
- A HOLD-4 desk file, a bot file or a legal `NO SEND`, and a Mini file.
- The spend and the leftovers (the parked sink outputs, not swept) stated in the write-up.
- No id, txid, key, address, host, or port in this repo.

A miss stays in this repo. A next attempt is a new repo and starts from this repo's lock file.

**Part of [tn-master](https://github.com/STP-KAS/tn-master).** The rule is [docs/NEURON.md](https://github.com/STP-KAS/tn-master/blob/main/docs/NEURON.md). This pre-run is its own row. It is not row 47.
