> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> **This is the playbook for pre-run 14.** It is not Wednesday. It is not Tuesday. It is not pre-run 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, or 13. It does not start a machine and it does not arm one.

# Playbook

Who does what, and the gates before each machine may start. The plan is [plan/PLAN.md](plan/PLAN.md), the locks are [locks/LOCKED.md](locks/LOCKED.md), and the go files are the three GO pages. This page does not override them.

## Oversight

TN10 ops oversees this rehearsal end to end: Mini, the desk (Build), and the bot. TN10 only. Never mainnet. Do not edit the Tuesday repo, the Wednesday repo, or pre-run 1's to 13's go files. Do not write `REVIEW_CLOSED`.

For pre-run 14 the operator does not paste. On 2026-11-12 he asked TN10 ops for covenant pre-runs under congestion and competition, pre-run 11 and then 12, 13 or more as needed (voice, 09:06 and 09:09 Brussels time), and at 10:04 in chat said "Keep exploring". That is the arm. The agents start their runners once the gates are facts.

## Start gates

1. **Mini node synced.** Existing TN10 kaspad, existing data, no wipe. `isSynced` true, DAA moving.
2. **Desk node synced.** Existing private TN10 kaspad, existing data, loopback only, started with `pwsh`. No wipe. Synced, DAA moving.
3. **No other runner.** No earlier runner, waiter, or counter on any machine. Lane above the abort line. The desk's private candidate list is present and not empty (`HELD candidates-missing` otherwise).
4. **Hashes.** `hashes/SIXTEEN.md` with sixteen rows and an On origin line, from [tools/sixteen](tools/sixteen/README.md).
5. **Open.** The desk pushes `logs/PRE-RUN-OPEN.md`. Mini then pushes `logs/MINI-ARMED.md`.
6. **Counter, families, senders.** The desk runner starts the counter on its private node and waits for its start line (`HELD counter-down` otherwise). Then the genesis from the bundle that wrote `hashes/SIXTEEN.md`, the families, and the payment steps.

## Who does what

| Who | Role | What not to do |
|---|---|---|
| **Desk (Build)** | Sends the sixteen families (five fee tiers by node rate, one path, one build, kit21) and runs our own heavy lane (the operator's OK, calibrated first). No payments. Its private TN10 node counts what the chain accepted (lock line (iv)) and its probe reads the mempool (xii). Publishes `hashes/SIXTEEN.md`, `logs/PRE-RUN-OPEN.md`, `counts/desk/` per step, `counts/chain/TIMELINE.md` and `MEMPOOL.md` after the tail, and `logs/METHOD.md`. | Do not stop or wipe the desk node. No Windows PowerShell 5.1, no `KaspaPublicNode`, no miner, no devnet. No 8- or 32-family publisher. No second runner. Never restart the runner mid-run. No payment sender. No heavy lane other than the runner's own lane process. |
| **Mini** | Second chain read on its own node. Does not send, mine, or hold a key. Publishes `logs/MINI-ARMED.md`, then `counts/mini/` when the matching desk file is on origin. | Do not wipe. Do not repeat the desk's head as Mini's. |
| **Bot (TN10 ops)** | Sends payments in the HOLD-4 minute only, on a synced public kaspad that is not one the desk kept, or publishes a legal `NO SEND`. | Do not send in any other step. One waiter. No local node. |

## Status when this repo was opened

Not a gate. Read on 2026-11-12 between 15:30Z and 15:50Z. This is our own TN10 testing; status lines are what we read on our own machines.

- Mini: existing TN10 kaspad 2.1.0 up, no wipe. Pre-run 13's Mini runner stopped on that run's FAILED file at 2026-11-12T15:18:17Z.
- Desk: existing private TN10 kaspad 2.1.0 up with `pwsh`, no wipe. It is not stopped for this pre-run. No pre-run 13 runner or child is running. `serve.mjs` and its keeper are not touched.
- Box: no local TN10 node. No bot waiter running.
- **Family lane consolidated** (key 0), 2026-11-12 15:42:01Z–15:42:29Z: 657 transactions, none rejected, merged 52,505 plain coins of 3 tKAS or less (102,221 tKAS of hop change) into 4,772 coins of about 20 tKAS, 60.73 tKAS in fees (100 sompi/gram on compute mass about 90,000 each; storage mass 0, many small inputs into few larger outputs). After it (15:42:57Z): 7,259 coins over 3 tKAS, 197,358 usable tKAS (pre-run 13 left 2,487 and 109,513), no coin of 3 tKAS or less. A refill from the payment key was not needed.
- Keys 1–15 got a fresh genesis coin from the family lane at 15:43:17Z (15 transactions, none rejected; amounts and ids in private notes).
- **Hop calibration on the node** (kit21), 15:43:28Z: one calibration covenant on key 0 (launch path `…-p14-cal`, not one of the sixteen families and not in `SIXTEEN.md`), its genesis, then two hops built by kit21's family path and submitted on the desk's private node, each read back from the desk mempool 1–2 ms after the submit:

| Hop | Builder bill rate (on 13,046) | kit21 storage mass | Node storage mass | Node compute mass | Fee, sompi | Node rate (fee ÷ node mass) |
|---|---:|---:|---:|---:|---:|---:|
| tier 100 | 320 | 41,633 | 41,633 | 9,123 | 4,174,720 | 100.27 |
| tier 300 | 958 | 41,635 | 41,635 | 9,123 | 12,498,068 | 300.18 |

  Storage mass matched to the unit, and both node rates were within 1 percent of the tier (and not under it), so the families may run on kit21.
- **Our heavy lane's calibration**, 15:43:42Z: one lane transaction as the lane builds it. SDK storage mass 266,670, node storage mass 266,670 (0.00 percent off), compute 2,036, fee 26,667,000 sompi, node rate 100.00. Within 1 percent and inside 99–101, so the lane may run. The sink key is pre-run 13's (it already holds that run's 40,830 parked outputs, not swept).
- Re-read before the hashes, 2026-11-12 17:52Z–17:54Z (read-only; nothing restarted): the desk's private node TN10, synced, UTXO index, DAA moving; no runner, waiter, probe or counter of ours up on the desk or Mini; Mini's TN10 node up. Family lane 7,244 coins over 3 tKAS, 197,161 usable tKAS (the 197 tKAS less is the funding and the calibration), no coin of 3 tKAS or less; keys 1–15 each hold a genesis coin. **The outside heavy stream was present:** three reads of the desk mempool 20 seconds apart held 7 to 12 entries over 200,000 mass at a fee rate of 100, none of them ours (our lane was not running). We do not say whose it is.
- Known risks, not fixed mid-run:
  - Our lane slows other TN10 users' transactions at fees up to about its own rate while it runs. The operator OK'd that; the steps are bounded and the lane steps down to zero.
  - The outside heavy fee-100 stream may also be there; the probe counts it apart from ours.
  - About one heavy transaction fits a block, so the lane's landing rate tops out near 600 a minute.
  - Each family is a chain of hops, so a hop waits for its parent whatever its fee.
  - kit21 builds a hop twice when its cached bill rate does not give the tier's node rate for a new coin size; that adds builder time per hop.
  - The probe reads the desk node's mempool and template, not a miner's.
  - Only two unique public kaspads answered in every check so far, and the desk keeps both, so the bot is expected to file `NO SEND no-free-node`.

## Offline rehearsal, recorded before `PRE-RUN-OPEN`

Two attempts on the desk, against a local bare origin. The real pre-run 14 desk runner, counter, read-only mempool probe and our heavy-lane process ran with the rehearsal family sender, the stand-in genesis submit and pre-run 9's stand-in node. The heavy lane submitted only to the stand-in payment-key node; none of its rehearsal transactions reached a real node. Short times: BASE 1 minute, each lane segment 1 minute, RETURN 2 minutes, a 2-minute tail. The probe read the real desk node (read-only), so its columns show the real mempool at that time (the outside heavy stream was there) and none of our rehearsal transactions. The rehearsal family sender writes kit21's row fields (bill rate, node mass about 41,633, node rate) so the node-rate table renders; it does not build hops.

Rehearsal A (p14-a), 2026-11-12 17:57:59Z to 17:58:13Z (Brussels 18:57 to 18:58). `HELD` at the genesis, runner exit 3. The cause was our setup, not the runner: the rehearsal's sixteen folder held the real genesis submit instead of the stand-in, and it stopped on the stand-in bundle before it submitted anything (the stand-in node counted no spend). Nothing changed in the runner.

Rehearsal B (p14-b), 2026-11-12 17:59:26Z to 18:17:00Z (Brussels 18:59 to 19:17), with the sixteen folder set up as in pre-run 13 (pre-run 14's fee table and file format, the stand-in genesis submit). Runner exit 0.

- `FEE_SPLIT` verified on the submit rows: floor 100, r126 126, r150 150, r200 200, r300 300, every tier on the desk path. No payment sender was started (`senders=0`). The node-rate table rendered per tier (100.27, 126.28, 150.1, 200.24, 300.2 on 41,633 node mass; bill rates 320, 403, 479, 639, 958).
- Lane timeline as planned: `LANE_PLAN BASE:N0-control HOLD-1:N20-r100+N40-r100 HOLD-2:N0-mid HOLD-3:N20-r126+N40-r126 then N0-drain`, each `LANE_SET` 1 second before its minute; `lane-minute.log` carried the right N and rate per minute.
- Lane: 2,052 submits, 2,052 accepted by the stand-in, 0 rejected, 0 chains lost, 50 payment-key coins taken; about 435 submits a minute at N = 20 and 585 at N = 40, under the 600 cap. `LANE_END` came on STOP with nothing pending. Stand-in fees 617.98 tKAS and 76.95 tKAS parked; the stand-in is not the network, so those are not spend. As in pre-run 13, 10 lane submits fell in the last second of the BASE minute (the lane starts its chains when N is set, 1 second early); the write-up mentions it.
- BASE, HOLD-1, HOLD-2, HOLD-3, the pinned HOLD-4 minute (18:11Z) and RETURN published as `OBSERVATION`, then `TIMELINE`, `MEMPOOL` and `METHOD`. No `${`, `undefined`, `NaN`, 64-hex string or profile path in any of the nine files. No rehearsal process was left running.
- Not exercised: the lane's pause on more than N + 2 of our entries, the node-side drift check (the rehearsal lane wrote only to the stand-in), and the usable-tKAS abort line (key 0 stayed far above it). They stay as live guards.

## Status after the live run

Read on 2026-11-12 between 19:52Z and 20:08Z. Not a gate.

- **The run finished through RETURN.** The desk runner (started 18:20:25Z) ran BASE, HOLD-1, HOLD-2, HOLD-3, the pinned HOLD-4 minute (19:38Z) and RETURN without a repair or a restart, every whole minute kept pace, then stopped on its own (`RUN_STOP return-closed` 19:52:25Z, 5-minute counter tail, `RUN end` 19:57:44Z) and published `counts/chain/TIMELINE.md`, `counts/chain/MEMPOOL.md` and [logs/METHOD.md](logs/METHOD.md). No runner process was left on the desk (checked 19:58Z). The private TN10 kaspad (2.1.0) was not stopped and is still up, synced. No devnet, `KaspaPublicNode` or miner was started; `serve.mjs` and its keeper were not touched.
- Our heavy lane: `LANE_END` 19:52:25Z, 13,150 accepted of 13,150, 0 rejected, 0 lost, 4,031.00 tKAS fees, 493.13 tKAS parked on our sink key (not swept), nothing pending. The hold at 45 blocks of ready mass tripped 15 times at N = 40, 20 s each.
- Mini: the runner (MINI-ARMED 18:19:43Z) published a second read for every step, each read in full, matched the desk in 422 of 425 cohort cells (three off by 1–3, Mini lower) and ended on its own after its tail (`RUNNER end` 20:07:43Z). Its TN10 kaspad was not wiped or restarted.
- Bot: the waiter read HOLD-3 5 s after it reached origin, checked for a free third kaspad at 19:37:30Z (before the 19:38Z minute), found none and published `NO SEND no-free-node` (b07be6e, on origin 19:39:04Z). On time this run. Nothing was sent by the bot.
- Keys after the run (status read 20:01:30Z): key 0 5,005 coins over 3 tKAS, 126,748 usable tKAS (abort line 18,000 never near), 2,239 coins at 3 tKAS or less; payment key 7,722 coins over 10 tKAS (7,894 before); keys 1–15 have no genesis coin left. Our sink key holds pre-run 13's and pre-run 14's parked outputs, not swept.
- The outside heavy fee-100 stream was present all run. We do not say who sends it.
- Results: [logs/LESSONS.md](logs/LESSONS.md), [logs/METHOD.md](logs/METHOD.md), and the pre-run 14 block in [locks/LOCKED.md](locks/LOCKED.md).

### Public statement

We run our own heavy lane on TN10 in this pre-run, with the operator's OK, at N = 20 and 40, at 100 and then at 126 sompi/gram, for about 48 minutes in all. While it runs, other TN10 users' transactions paying up to about the lane's rate wait longer on the nodes that see it. In this run, in the 48 lane minutes, other traffic landed on our desk node fell by about 4–10 percent (median about 3,190–3,390 a minute against 3,510–3,560 with the lane at 0), the node's priority fee estimate read a median of 244–299 instead of 195–237, and the backlog of other users' transactions at 100 sompi/gram in the desk mempool grew while the lane ran and shrank while it was at 0. The lane was stepped down to zero at the end and its own waiting transactions cleared within a minute. This is our own testing; tKAS has no value.

## When something breaks

Append a worked fix to [locks/LOCKED.md](locks/LOCKED.md) in the form that page shows, and a repair line to `logs/FIXES.md`. If the run dies before RETURN, write `logs/FAILED.md`, stop every runner, waiter, and counter, and do not resume. The next attempt is a new repo that starts from this repo's lock file.
