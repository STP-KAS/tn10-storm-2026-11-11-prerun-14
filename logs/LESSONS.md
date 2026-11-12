> **Experimental. We are just trying this.** [Disclaimer](../DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value. Pre-run 14.
>
> **Our own testing.** This is our own Kaspa Testnet-10 testing, run on our own machines and nodes. What this page reports is what we observed in this run; it is not a claim of how TN10 or Kaspa behave in general.

# Lessons, pre-run 14

> Written by the operator after the desk runner ended on its own (`RUN end` 19:57:44Z). Every step file, RETURN, `counts/chain/TIMELINE.md`, `counts/chain/MEMPOOL.md` and the runner's [METHOD.md](METHOD.md) reached origin. Nothing was restarted or killed by us during the run.
>
> Hops are the desk counter's read of the desk's private TN10 node. Mempool, ready-set and template figures are the read-only probe on the same node, every 20 s, one median per minute. They are one node's view, not a network-wide figure. We are just testing; one run, one node, small numbers of minutes per step.

## The question

When covenant hops are priced on their real node-side mass, so the node rates them at 100, 126, 150, 200 and 300 sompi/gram, how do they fare against our own heavy lane at the same rate (100) and at a higher rate (126), at ready count N = 0, 20 and 40? Does a hop at a rate at or above its competitor keep its BASE rate?

**Short answer, as we observed it: no, not at the same rate.** A hop at the competitor's rate lost 12–24 percent of its BASE rate (floor against the lane at 100, r126 against the lane at 126). At 1.2–1.5 times the competitor's rate it lost 2–14 percent; at about 1.6–2 times it stayed within about 4 percent at both N; at about 2.4–3 times it held its BASE rate. Every hop landed; what changed was how long each one waited.

> **Public statement: our lane slowed other TN10 users' transactions.** We ran our own heavy lane on TN10 again in this pre-run, with the operator's OK, for 48 minutes (18:34–18:57Z at 100 and 19:10–19:33Z at 126). In those minutes other traffic landed on our desk node fell from a median of about 3,510–3,560 a minute (lane at 0) to about 3,190–3,390 (about 4–10 percent less, most at N = 40 at 126), the node's priority fee estimate read a median of 244–299 instead of 195–237, and the backlog of other users' transactions at 100 sompi/gram in the desk mempool grew while the lane ran and shrank while it was at 0 (for example about 1,780 at 18:56–18:57Z, down to about 180 at 19:12Z, up to about 2,110 at 19:34Z, down to about 1,090 at 19:51Z). We stepped the lane down to zero at the end; its own waiting transactions cleared within a minute. This is our own testing on a test network; tKAS has no value.

**Not a clean experiment.** The outside heavy fee-100 stream of pre-runs 10–12 was **present the whole run** (the probe read 5–35 of its entries in BASE and 180–2,110 later, up to 25 of them ready, 25 in nearly every minute after BASE). So in every step our lane was not the only heavy competitor, and BASE (ready mass median 10.9 blocks) was lighter than the later N = 0 minutes (22–30 blocks, held up by that stream). We give shares of BASE and, as a check, of the later N = 0 minutes. We do not say who sends that stream.

## What happened

| Step | Whole minutes | Lane N @ rate | Desk file on origin (Brussels), commit | Mini file, commit |
|---|---:|---|---|---|
| BASE | 12 (18:22–18:33Z) | 0 @ 100 | 19:34:22, 8c32afa | 0213ffb |
| HOLD-1 | 24 (18:34–18:57Z) | 20 then 40 @ 100, 12 min each | 19:58:22, 8f1f5ee | f808bec |
| HOLD-2, middle control | 12 (18:58–19:09Z) | 0 | 20:10:22, 69617f1 | 5c15553 |
| HOLD-3 | 24 (19:10–19:33Z) | 20 then 40 @ 126, 12 min each | 20:34:22, 79df5a1 | be92872 |
| HOLD-4 (pinned 19:38Z) | 1 | 0 (drain from 19:33:59Z) | 20:39:23, d37c1b2 | adec902 |
| RETURN | 12 (19:40–19:51Z) | 0 | 20:52:22, 178554a | e186e2b |
| Tail, TIMELINE / MEMPOOL / METHOD | 5 | 0 | 20:57:36 / 20:57:39 / 20:57:42, 8434560 / 1b9c99f / 52cb301 | — |

Every whole minute was clean and kept pace, no repair, no restart. The bot filed `NO SEND no-free-node` for HOLD-4 on time (b07be6e, 20:39:04 Brussels; see below).

Totals, desk counter, start to end: family hops floor 13,692, r126 11,877, r150 12,832, r200 13,787, r300 14,492 (66,680); our heavy landed 13,150; our payments 0. Every family hop submitted OK and every lane transaction landed.

## The hops were priced on the node's mass, and the node agreed

Pre-run 13 found that our hops paid 13,046 × the tier rate while carrying about 40,900 storage mass, so the node rated them at about a third of the tier. kit21 prices each hop on the node's own mass. Calibration before the open (15:43Z): node storage mass equal to kit21's (0.00 percent), node rate 100.27 and 300.18. In the run, each step file's table read node rates as built of 100–100.32, 126–126.32, 150–150.32, 200–200.32 and 300–300.32, node mass median about 41,000 (40,377–43,769), and the probe's own read of the desk mempool gave the same ranges. **This is the first pre-run in which our tiers were the node rates we meant.**

## The lane

Lane log (all accepted, 0 rejected, 0 orphan retries, 0 chains lost, node fee rate on every entry exactly the lane's rate, storage mass never off the calibration):

| Lane step | Accepted | Fees, tKAS | Our heavy in mempool, median | Our heavy landed a minute, median | Hold episodes (20 s each) |
|---|---:|---:|---:|---:|---:|
| N = 20 @ 100 | 2,481 | 661.71 | 19 | 206 | 0 |
| N = 40 @ 100 | 3,121 | 832.43 | 38 | 246 | 9 |
| N = 20 @ 126 | 3,449 | 1,159.25 | 18 | 288 | 0 |
| N = 40 @ 126 | 4,099 | 1,377.61 | 34 | 377 | 6 |

`LANE_END` 19:52:25Z: 13,150 accepted, 4,031.00 tKAS fees, 493.13 tKAS parked on our sink key, 203 payment-key coins taken, nothing pending.

- **N = 40 met the ready-mass hold.** The lane holds itself when the desk's ready mass passes 45 blocks. With the outside stream adding its own ready heavies, N = 40 brought the ready mass to 44–46 blocks, and the hold tripped and cleared 15 times (18:49–18:57Z and 19:24–19:31Z), each for 20 s. N = 40 was in effect "as much as the hold allows", median 34–38 in the mempool.
- **At 126 our lane landed more.** At the same N, the lane at 126 landed 31–39 percent more of its transactions than at 100 (medians 288 against 206 a minute at N = 20; 377 against 246 at N = 40). Our reading: at 100 our heavies shared the selector with the outside heavies at 100; at 126 they outweighed them (2.0 times by the (rate)^3 weight), and the outside backlog grew instead.

## Hops per family, per lane step

Floor has four families, the others three, so every figure is **per family per minute** (median of the step's minutes). In brackets: share of the same tier's BASE rate.

| Lane step (whole minutes) | Floor (100) | R126 (126) | R150 (150) | R200 (200) | R300 (300) | Ready mass, blocks, median (range) | Our heavy in mempool | Outside heavy at 100 in mempool / ready, median | Fee estimate, priority, median |
|---|---:|---:|---:|---:|---:|---|---:|---|---:|
| N = 0, BASE (12) | 43.9 (100%) | 46.7 (100%) | 47.8 (100%) | 49.5 (100%) | 50.8 (100%) | 10.9 (4.3–16.8) | 0 | 20 / 17 | 195 |
| N = 20 @ 100 (12) | 36.1 (82%) | 43.2 (92%) | 46.2 (97%) | 49.2 (99%) | 51.5 (101%) | 28.9 (26.2–31.0) | 19 | 936 / 25 | 244 |
| N = 40 @ 100 (12) | 33.4 (76%) | 40.3 (86%) | 43.5 (91%) | 47.7 (96%) | 51.3 (101%) | 44.1 (23.9–46.0) | 38 | 1,348 / 25 | 258 |
| N = 0, HOLD-2 (12) | 40.6 (93%) | 46.7 (100%) | 49.8 (104%) | 51.3 (104%) | 53.3 (105%) | 23.0 (21.8–24.7) | 0 | 1,111 / 25 | 228 |
| N = 20 @ 126 (12) | 34.9 (79%) | 41.2 (88%) | 46.7 (98%) | 51.3 (104%) | 53.8 (106%) | 34.0 (31.1–36.0) | 18 | 434 / 25 | 265 |
| N = 40 @ 126 (12) | 29.1 (66%) | 37.3 (80%) | 42.5 (89%) | 47.3 (96%) | 52.2 (103%) | 42.8 (24.5–44.4) | 34 | 916 / 25 | 299 |
| N = 0, drain 19:34–19:37Z (4, not scored) | 40.0 | 44.0 | 47.3 | 50.3 | 51.5 | 26.8 | 0 | 2,081 / 25 | 234 |
| N = 0, HOLD-4 (1) | 44.8 (102%) | 49.3 (106%) | 52.3 (109%) | 53.3 (108%) | 54.7 (108%) | 26.5 | 0 | 1,934 / 25 | 237 |
| N = 0, RETURN (12) | 41.6 (95%) | 46.0 (99%) | 48.8 (102%) | 51.7 (104%) | 53.0 (104%) | 27.3 (25.3–30.0) | 0 | 1,602 / 25 | 229 |

The same lane steps as a share of the later N = 0 minutes (HOLD-2, HOLD-4 and RETURN, 25 minutes, where the outside stream was as heavy as during the lane steps): N = 20 @ 100: 88 / 93 / 93 / 95 / 97 percent (floor to r300); N = 40 @ 100: 81 / 86 / 88 / 92 / 96; N = 20 @ 126: 85 / 88 / 94 / 99 / 101; N = 40 @ 126: 71 / 80 / 86 / 92 / 98.

Rank correlation (Spearman, 85 scored minutes) of hops with the ready mass: floor −0.78, r126 −0.66, r150 −0.47, r200 −0.19, r300 +0.06. With our heavy in the mempool: −0.81, −0.71, −0.55, −0.28, −0.05.

Median submit-to-landing per hop, ms (p95 in brackets), from the step files:

| Step | Floor | R126 | R150 | R200 | R300 |
|---|---|---|---|---|---|
| BASE | 1,134 (1,930) | 1,077 (1,657) | 1,043 (1,586) | 1,000 (1,496) | 986 (1,437) |
| HOLD-1, N = 20 and 40 @ 100 | 1,448 (2,880) | 1,222 (2,070) | 1,132 (1,795) | 1,046 (1,567) | 977 (1,469) |
| HOLD-2, N = 0 | 1,236 (2,137) | 1,105 (1,758) | 1,038 (1,603) | 994 (1,492) | 944 (1,407) |
| HOLD-3, N = 20 and 40 @ 126 | 1,507 (3,366) | 1,241 (2,329) | 1,131 (1,964) | 1,018 (1,613) | 932 (1,429) |
| HOLD-4 | 1,102 (2,164) | 997 (1,633) | 986 (1,379) | 962 (1,319) | 902 (1,236) |
| RETURN | 1,196 (2,156) | 1,085 (1,807) | 1,035 (1,609) | 967 (1,484) | 927 (1,400) |

Pre-run 13, for comparison, with the hops at about a third of their tier: floor's median at N = 40 @ 126 was 9.3 s, p95 42 s.

## Does a hop at or above its competitor's rate keep its BASE rate?

| Hop rate ÷ lane rate | Case | N = 20 | N = 40 |
|---|---|---:|---:|
| 0.79 | floor against 126 | 79% | 66% |
| 1.00 | floor against 100 | 82% | 76% |
| 1.00 | r126 against 126 | 88% | 80% |
| 1.19 | r150 against 126 | 98% | 89% |
| 1.26 | r126 against 100 | 92% | 86% |
| 1.50 | r150 against 100 | 97% | 91% |
| 1.59 | r200 against 126 | 104% | 96% |
| 2.00 | r200 against 100 | 99% | 96% |
| 2.38 | r300 against 126 | 106% | 103% |
| 3.00 | r300 against 100 | 101% | 101% |

Share of BASE, per family. **At the same rate, no**: 76–88 percent. **At 1.2–1.5 times**, close at N = 20 (92–98) but not at N = 40 (86–91). **At about 1.6–2 times**, within about 4 percent at both N. **At 2.4–3 times**, at or over BASE. The ladder was nearly the same whether the lane was at 100 or at 126: what seemed to matter was the hop's rate relative to the lane's, plus the ready mass. Caveat: the outside stream at 100 was a second competitor in every step, which counts against the lower tiers more than against r300.

## The 126 lane against the 100 lane

At the same N, raising our lane from 100 to 126:

- **floor (now below the lane):** 82 → 79 percent at N = 20, 76 → 66 at N = 40;
- **r126 (now level with the lane):** 92 → 88, 86 → 80;
- **r150:** 97 → 98, 91 → 89;
- **r200:** 99 → 104, 96 → 96;
- **r300:** 101 → 106, 101 → 103.

The ready mass was higher at 126 for N = 20 (34.0 against 28.9 blocks) and about the same at N = 40 (42.8 against 44.1). So the 126 lane hurt the tiers at or below it a little more and did not hurt r200 and r300 at all. Far smaller than pre-run 13's 126 effect (floor −55 percent there), because the hops now pay their real rate: in pre-run 13 every tier sat below both lanes. What the 126 lane did change was the lane itself (31–39 percent more of it landed) and the outside stream's backlog, which grew during HOLD-3.

## Drain and recovery

At 19:33:59Z the lane went to 0. The probe's median was 35 of our heavies in the mempool at 19:33Z and 0 at 19:34Z; the counter read 32 of them landing in 19:34Z and none after. The ready mass fell from 44.4 to 26.7 blocks within that minute, back to the outside stream's level, and stayed at 25.3–30.0 through RETURN. Floor was 149 hops at 19:34Z (121 at 19:33Z) and 156–184 a minute from 19:35Z. RETURN's medians were 95 / 99 / 102 / 104 / 104 percent of BASE, the same as HOLD-2's (93 / 100 / 104 / 104 / 105). **Recovery took under a minute**; the remaining few percent on floor follow the outside stream's ready mass, which was there with our lane at 0 as well. The outside stream's own backlog in the desk mempool fell from about 2,110 (19:34Z) to about 1,090 (19:51Z), about 60 a minute.

## Templates

The desk node's own template (never submitted), medians per step: 6.5–8.5 transactions, 470,800–474,200 storage mass, one transaction over 100,000 storage mass in 95 of 98 minutes. Our heavy was in the median template 0 times at 100 and once at 126; the family hops in it were 0 for floor, 0–1 for r126 and r150, 1–2 for r200, 2–3 for r300. With the hops at their real rates the template was full, not the one-heavy-and-gaps of pre-run 13.

## What this seems to show

- **Pricing on the node's mass was the big lever.** With the same lane at N = 40 @ 100, pre-run 13's floor kept 13 percent of BASE and r200 51; here, with the outside stream also present, floor kept 76 and r200 96. The fee as the node reads it, not as our builder billed it, is what the selector sees.
- **Same fee is not enough for a light hop against heavies.** A covenant hop at the heavies' own rate lost 12–24 percent; about twice the competitor's rate kept it within a few percent; about three times held it fully. The selector samples by weight per transaction, so many heavy candidates at the same rate still crowd a chained hop that can only be ready one at a time.
- **The slowdown grew with our ready heavies.** Floor followed our heavy count in the mempool (Spearman −0.81); r300 did not (−0.05).
- **Escalating the flood's fee mostly hit the flood's peers.** Our 126 lane barely changed r200 and r300, slowed floor and r126 a little more, and displaced the outside 100 stream.
- **Every hop landed**, as in pre-runs 9–13; the cost of a low tier was waiting time (floor p95 3.4 s at N = 40 @ 126, against 1.9 s in BASE).

These are readings of one run on one node, a few 12-minute steps each. We are just testing.

## Every minute: hops per family, the lane, the outside stream

Per family per minute, from the step files (scored minutes only).

| Minute (UTC) | Step | Lane N @ rate | Floor | R126 | R150 | R200 | R300 | Our heavy in mempool | Our heavy landed | Outside heavy at 100 in mempool / ready | Ready mass, blocks | Fee estimate, priority |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 18:22Z | BASE | 0 @ 100 | 35.2 | 41.7 | 42.7 | 44.7 | 45.7 | 0 | 0 | 35 / 22 | 16.84 | 213.0 |
| 18:23Z | BASE | 0 @ 100 | 46.5 | 47.7 | 49.0 | 52.7 | 51.7 | 0 | 0 | 5 / 5 | 4.31 | 168.1 |
| 18:24Z | BASE | 0 @ 100 | 45.5 | 47.7 | 48.7 | 49.3 | 51.0 | 0 | 0 | 21 / 16 | 10.93 | 177.5 |
| 18:25Z | BASE | 0 @ 100 | 40.2 | 44.3 | 46.3 | 49.3 | 50.7 | 0 | 0 | 29 / 17 | 12.02 | 195.1 |
| 18:26Z | BASE | 0 @ 100 | 40.5 | 45.3 | 46.7 | 49.0 | 50.7 | 0 | 0 | 28 / 18 | 14.61 | 200.2 |
| 18:27Z | BASE | 0 @ 100 | 42.2 | 45.7 | 46.0 | 49.7 | 49.7 | 0 | 0 | 24 / 17 | 13.69 | 212.5 |
| 18:28Z | BASE | 0 @ 100 | 43.8 | 46.3 | 47.0 | 47.0 | 47.7 | 0 | 0 | 14 / 13 | 10.13 | 192.5 |
| 18:29Z | BASE | 0 @ 100 | 49.5 | 49.3 | 50.0 | 52.7 | 52.3 | 0 | 0 | 9 / 9 | 5.93 | 171.4 |
| 18:30Z | BASE | 0 @ 100 | 48.2 | 52.3 | 54.3 | 55.3 | 56.3 | 0 | 0 | 11 / 9 | 7.04 | 194.3 |
| 18:31Z | BASE | 0 @ 100 | 44.0 | 47.0 | 51.3 | 51.3 | 52.0 | 0 | 0 | 30 / 20 | 13.23 | 229.0 |
| 18:32Z | BASE | 0 @ 100 | 51.0 | 53.0 | 52.3 | 53.7 | 55.7 | 0 | 0 | 19 / 17 | 9.47 | 194.6 |
| 18:33Z | BASE | 0 @ 100 | 42.2 | 44.3 | 45.7 | 46.7 | 47.3 | 0 | 0 | 18 / 17 | 10.88 | 205.3 |
| 18:34Z | HOLD-1 | 20 @ 100 | 36.5 | 44.3 | 46.7 | 48.3 | 50.7 | 19 | 191 | 115 / 25 | 26.22 | 233.7 |
| 18:35Z | HOLD-1 | 20 @ 100 | 35.5 | 42.7 | 50.0 | 52.7 | 54.0 | 18 | 217 | 268 / 25 | 26.85 | 265.4 |
| 18:36Z | HOLD-1 | 20 @ 100 | 35.2 | 43.7 | 47.3 | 50.7 | 51.7 | 19 | 217 | 445 / 25 | 28.90 | 235.4 |
| 18:37Z | HOLD-1 | 20 @ 100 | 37.5 | 43.3 | 45.7 | 48.7 | 50.0 | 18 | 200 | 575 / 25 | 28.23 | 244.8 |
| 18:38Z | HOLD-1 | 20 @ 100 | 36.8 | 41.7 | 45.3 | 48.0 | 51.3 | 19 | 216 | 732 / 25 | 29.45 | 248.3 |
| 18:39Z | HOLD-1 | 20 @ 100 | 36.0 | 43.7 | 46.3 | 50.7 | 55.3 | 20 | 196 | 881 / 25 | 30.98 | 240.1 |
| 18:40Z | HOLD-1 | 20 @ 100 | 33.0 | 41.0 | 43.7 | 46.7 | 51.0 | 19 | 200 | 991 / 25 | 28.95 | 232.3 |
| 18:41Z | HOLD-1 | 20 @ 100 | 33.5 | 39.3 | 44.3 | 45.3 | 49.0 | 16 | 202 | 1,131 / 25 | 26.65 | 229.4 |
| 18:42Z | HOLD-1 | 20 @ 100 | 36.2 | 45.0 | 50.3 | 53.0 | 56.7 | 19 | 211 | 1,280 / 25 | 28.90 | 244.8 |
| 18:43Z | HOLD-1 | 20 @ 100 | 36.2 | 43.0 | 45.7 | 52.0 | 53.7 | 17 | 209 | 1,326 / 25 | 29.25 | 243.2 |
| 18:44Z | HOLD-1 | 20 @ 100 | 33.0 | 39.7 | 46.0 | 48.7 | 48.7 | 19 | 217 | 1,258 / 25 | 30.06 | 256.6 |
| 18:45Z | HOLD-1 | 20 @ 100 | 36.5 | 43.7 | 46.3 | 49.7 | 53.3 | 19 | 188 | 1,217 / 25 | 29.42 | 278.5 |
| 18:46Z | HOLD-1 | 40 @ 100 | 33.8 | 38.3 | 43.7 | 51.7 | 53.7 | 38 | 325 | 1,270 / 25 | 41.40 | 253.6 |
| 18:47Z | HOLD-1 | 40 @ 100 | 32.0 | 40.0 | 42.3 | 47.3 | 51.0 | 40 | 314 | 1,354 / 25 | 43.75 | 302.3 |
| 18:48Z | HOLD-1 | 40 @ 100 | 30.0 | 39.3 | 42.7 | 46.7 | 50.3 | 35 | 312 | 1,341 / 25 | 41.83 | 279.5 |
| 18:49Z | HOLD-1 | 40 @ 100 | 33.0 | 41.0 | 44.3 | 48.7 | 53.3 | 36 | 178 | 1,218 / 25 | 45.43 | 275.3 |
| 18:50Z | HOLD-1 | 40 @ 100 | 32.5 | 39.3 | 41.7 | 45.0 | 49.3 | 1 | 205 | 1,159 / 25 | 25.60 | 222.2 |
| 18:51Z | HOLD-1 | 40 @ 100 | 34.0 | 40.7 | 44.0 | 45.7 | 49.3 | 39 | 198 | 1,130 / 25 | 46.01 | 261.5 |
| 18:52Z | HOLD-1 | 40 @ 100 | 34.2 | 42.3 | 44.7 | 48.0 | 52.0 | 38 | 252 | 1,271 / 25 | 44.43 | 270.9 |
| 18:53Z | HOLD-1 | 40 @ 100 | 35.2 | 39.0 | 43.3 | 46.7 | 51.0 | 0 | 199 | 1,390 / 25 | 23.94 | 227.1 |
| 18:54Z | HOLD-1 | 40 @ 100 | 31.0 | 42.0 | 43.0 | 51.0 | 53.7 | 39 | 336 | 1,507 / 25 | 43.92 | 267.2 |
| 18:55Z | HOLD-1 | 40 @ 100 | 30.8 | 35.7 | 42.3 | 46.3 | 49.7 | 38 | 312 | 1,756 / 25 | 44.21 | 237.6 |
| 18:56Z | HOLD-1 | 40 @ 100 | 36.8 | 42.7 | 49.0 | 53.7 | 58.0 | 38 | 230 | 1,782 / 25 | 44.86 | 247.2 |
| 18:57Z | HOLD-1 | 40 @ 100 | 38.0 | 42.7 | 47.0 | 48.7 | 51.7 | 38 | 239 | 1,773 / 25 | 44.82 | 255.4 |
| 18:58Z | HOLD-2 | 0 @ 100 | 40.8 | 50.3 | 52.0 | 54.0 | 56.0 | 0 | 38 | 1,600 / 25 | 24.74 | 212.5 |
| 18:59Z | HOLD-2 | 0 @ 100 | 42.2 | 48.0 | 51.3 | 52.0 | 53.7 | 0 | 0 | 1,361 / 25 | 24.11 | 199.9 |
| 19:00Z | HOLD-2 | 0 @ 100 | 38.8 | 43.7 | 46.0 | 47.7 | 52.3 | 0 | 0 | 1,276 / 25 | 23.99 | 235.3 |
| 19:01Z | HOLD-2 | 0 @ 100 | 41.2 | 47.7 | 50.0 | 55.0 | 56.7 | 0 | 0 | 1,233 / 25 | 23.41 | 225.0 |
| 19:02Z | HOLD-2 | 0 @ 100 | 42.0 | 48.0 | 51.0 | 52.0 | 54.7 | 0 | 0 | 1,196 / 25 | 24.04 | 256.4 |
| 19:03Z | HOLD-2 | 0 @ 100 | 37.2 | 42.0 | 44.3 | 47.3 | 49.7 | 0 | 0 | 1,123 / 25 | 23.25 | 238.5 |
| 19:04Z | HOLD-2 | 0 @ 100 | 40.2 | 43.0 | 44.7 | 47.7 | 49.0 | 0 | 0 | 1,099 / 25 | 22.84 | 231.0 |
| 19:05Z | HOLD-2 | 0 @ 100 | 40.5 | 43.3 | 48.0 | 50.3 | 51.7 | 0 | 0 | 1,021 / 24 | 22.65 | 217.4 |
| 19:06Z | HOLD-2 | 0 @ 100 | 40.2 | 47.0 | 49.7 | 51.0 | 53.0 | 0 | 0 | 929 / 24 | 22.40 | 224.4 |
| 19:07Z | HOLD-2 | 0 @ 100 | 42.2 | 47.7 | 50.7 | 54.3 | 55.3 | 0 | 0 | 829 / 25 | 21.78 | 233.9 |
| 19:08Z | HOLD-2 | 0 @ 100 | 39.2 | 45.3 | 47.3 | 51.7 | 55.7 | 0 | 0 | 661 / 23 | 22.61 | 222.9 |
| 19:09Z | HOLD-2 | 0 @ 100 | 43.2 | 46.3 | 50.7 | 50.3 | 52.3 | 0 | 0 | 394 / 21 | 22.19 | 235.5 |
| 19:10Z | HOLD-3 | 20 @ 126 | 32.8 | 39.3 | 43.3 | 46.3 | 48.7 | 17 | 285 | 266 / 22 | 31.06 | 259.2 |
| 19:11Z | HOLD-3 | 20 @ 126 | 31.2 | 38.7 | 43.0 | 48.0 | 50.0 | 18 | 290 | 225 / 22 | 33.01 | 306.0 |
| 19:12Z | HOLD-3 | 20 @ 126 | 39.5 | 49.7 | 57.0 | 59.0 | 65.3 | 19 | 310 | 184 / 18 | 31.52 | 257.6 |
| 19:13Z | HOLD-3 | 20 @ 126 | 32.0 | 39.0 | 42.3 | 47.7 | 49.7 | 18 | 258 | 195 / 24 | 34.24 | 274.0 |
| 19:14Z | HOLD-3 | 20 @ 126 | 37.5 | 42.0 | 48.3 | 55.3 | 58.7 | 20 | 275 | 347 / 25 | 35.98 | 291.8 |
| 19:15Z | HOLD-3 | 20 @ 126 | 37.2 | 47.7 | 53.0 | 57.3 | 66.0 | 15 | 286 | 473 / 25 | 32.06 | 249.6 |
| 19:16Z | HOLD-3 | 20 @ 126 | 32.2 | 37.7 | 42.3 | 48.3 | 49.3 | 18 | 265 | 559 / 25 | 34.04 | 269.1 |
| 19:17Z | HOLD-3 | 20 @ 126 | 34.8 | 39.3 | 45.0 | 49.3 | 52.0 | 18 | 290 | 500 / 25 | 34.34 | 258.2 |
| 19:18Z | HOLD-3 | 20 @ 126 | 37.0 | 45.0 | 52.3 | 55.7 | 58.3 | 14 | 308 | 440 / 25 | 32.49 | 296.8 |
| 19:19Z | HOLD-3 | 20 @ 126 | 36.2 | 47.0 | 52.0 | 57.0 | 64.7 | 17 | 292 | 427 / 25 | 33.96 | 274.9 |
| 19:20Z | HOLD-3 | 20 @ 126 | 35.0 | 40.3 | 45.3 | 50.0 | 53.0 | 19 | 294 | 562 / 25 | 34.83 | 261.6 |
| 19:21Z | HOLD-3 | 20 @ 126 | 33.0 | 43.7 | 48.0 | 52.7 | 54.7 | 19 | 278 | 606 / 25 | 35.73 | 259.4 |
| 19:22Z | HOLD-3 | 40 @ 126 | 27.5 | 35.7 | 38.0 | 44.0 | 47.7 | 31 | 387 | 667 / 25 | 41.42 | 268.3 |
| 19:23Z | HOLD-3 | 40 @ 126 | 26.5 | 32.3 | 39.0 | 44.3 | 49.3 | 34 | 373 | 778 / 25 | 43.35 | 307.5 |
| 19:24Z | HOLD-3 | 40 @ 126 | 31.0 | 37.3 | 42.7 | 47.3 | 52.3 | 34 | 287 | 769 / 25 | 42.61 | 273.3 |
| 19:25Z | HOLD-3 | 40 @ 126 | 28.2 | 38.7 | 42.7 | 46.0 | 52.0 | 34 | 300 | 789 / 25 | 43.08 | 314.7 |
| 19:26Z | HOLD-3 | 40 @ 126 | 30.8 | 37.3 | 42.3 | 51.0 | 54.0 | 35 | 395 | 897 / 25 | 43.33 | 293.4 |
| 19:27Z | HOLD-3 | 40 @ 126 | 39.0 | 47.0 | 49.0 | 55.0 | 60.0 | 0 | 184 | 913 / 25 | 24.48 | 232.9 |
| 19:28Z | HOLD-3 | 40 @ 126 | 27.0 | 35.7 | 41.0 | 45.7 | 49.3 | 32 | 409 | 919 / 25 | 42.56 | 307.6 |
| 19:29Z | HOLD-3 | 40 @ 126 | 29.5 | 35.3 | 40.3 | 45.0 | 50.3 | 36 | 298 | 1,000 / 25 | 44.06 | 332.0 |
| 19:30Z | HOLD-3 | 40 @ 126 | 28.8 | 35.7 | 40.0 | 47.3 | 51.3 | 34 | 381 | 993 / 25 | 42.27 | 298.8 |
| 19:31Z | HOLD-3 | 40 @ 126 | 32.5 | 40.0 | 47.0 | 52.7 | 55.3 | 38 | 272 | 1,207 / 25 | 44.35 | 299.8 |
| 19:32Z | HOLD-3 | 40 @ 126 | 28.8 | 37.7 | 45.7 | 53.0 | 56.7 | 32 | 388 | 1,538 / 25 | 42.00 | 287.6 |
| 19:33Z | HOLD-3 | 40 @ 126 | 30.2 | 38.7 | 45.3 | 52.7 | 56.7 | 35 | 411 | 1,869 / 25 | 44.35 | 309.2 |
| 19:38Z | HOLD-4 | 0 @ 100 | 44.8 | 49.3 | 52.3 | 53.3 | 54.7 | 0 | 0 | 1,934 / 25 | 26.51 | 236.5 |
| 19:40Z | RETURN | 0 @ 100 | 40.8 | 44.7 | 47.3 | 47.7 | 52.3 | 0 | 0 | 1,828 / 25 | 29.96 | 242.5 |
| 19:41Z | RETURN | 0 @ 100 | 41.5 | 46.7 | 49.3 | 51.0 | 52.3 | 0 | 0 | 1,788 / 25 | 29.10 | 237.3 |
| 19:42Z | RETURN | 0 @ 100 | 46.0 | 54.7 | 56.7 | 60.7 | 63.0 | 0 | 0 | 1,756 / 25 | 28.29 | 212.7 |
| 19:43Z | RETURN | 0 @ 100 | 41.8 | 45.3 | 49.7 | 53.3 | 52.7 | 0 | 0 | 1,736 / 25 | 28.75 | 237.5 |
| 19:44Z | RETURN | 0 @ 100 | 39.8 | 44.0 | 45.3 | 48.3 | 51.7 | 0 | 0 | 1,695 / 25 | 28.51 | 227.3 |
| 19:45Z | RETURN | 0 @ 100 | 44.8 | 50.3 | 52.7 | 58.3 | 60.0 | 0 | 0 | 1,645 / 25 | 27.30 | 233.3 |
| 19:46Z | RETURN | 0 @ 100 | 44.8 | 49.7 | 52.3 | 55.3 | 60.0 | 0 | 0 | 1,559 / 25 | 26.52 | 226.3 |
| 19:47Z | RETURN | 0 @ 100 | 40.2 | 51.0 | 52.3 | 56.0 | 57.0 | 0 | 0 | 1,424 / 25 | 27.31 | 232.6 |
| 19:48Z | RETURN | 0 @ 100 | 40.5 | 42.7 | 47.7 | 51.7 | 53.3 | 0 | 0 | 1,307 / 22 | 25.90 | 168.2 |
| 19:49Z | RETURN | 0 @ 100 | 43.0 | 46.7 | 48.3 | 51.7 | 53.7 | 0 | 0 | 1,205 / 18 | 25.34 | 208.7 |
| 19:50Z | RETURN | 0 @ 100 | 42.5 | 43.7 | 46.0 | 48.7 | 48.0 | 0 | 0 | 1,136 / 23 | 25.57 | 218.3 |
| 19:51Z | RETURN | 0 @ 100 | 39.0 | 44.0 | 46.3 | 50.0 | 49.7 | 0 | 0 | 1,085 / 25 | 27.10 | 231.6 |

## Bot

The waiter read HOLD-3 at 19:34:27Z, 5 s after it reached origin (79df5a1, 19:34:22Z), pinned 19:38Z, and ran its free-node check at 19:37:30Z, before the minute. Kept public kaspads 1 and 5; desk candidates 2 and 3 did not answer; desk 4 and the three extra candidates answered but were the same kaspad as a kept one. No free third kaspad, so `NO SEND no-free-node`, on time this run (b07be6e, 19:39:04Z). Nothing was sent. The waiter logged two failed fetches earlier (18:35:36Z, killed after 237 s while the box itself was paused; 19:00:17Z, a low-speed abort), and its loop carried on each time: the pre-run 13 fix did its job.

## Mini

Mini matched the desk in **422 of 425** cohort cells over the 85 published whole minutes (BASE 12, HOLD-1 24, HOLD-2 12, HOLD-3 24, HOLD-4 1, RETURN 12), every minute read in full on Mini's node. The three that differ, all with Mini lower: 19:33Z r150 135 against 136; 19:38Z floor 178 against 179 and r126 145 against 148. Mini logged 42 removals after a minute had closed (pre-run 13: 0); we did not establish whether those explain the three cells. Its TN10 kaspad was not wiped or restarted.

## Spend

- **Our heavy lane:** 13,150 transactions, 4,031.00 tKAS in fees; 493.13 tKAS parked in 13,150 outputs of 0.0375 tKAS on our own sink key (not swept, with pre-run 13's 1,531.13); 203 payment-key coins taken. Payment key over 10 tKAS: 7,894 coins before, 7,722 after (status read 20:01:30Z).
- **Families (key 0):** 66,680 hops accepted, 4,908.70 tKAS in fees as built (floor 565.31, r126 617.68, r150 794.46, r200 1,137.71, r300 1,793.55), about 0.041 / 0.052 / 0.062 / 0.083 / 0.124 tKAS per hop. The family sender also logged 52,903 `already_spent` and 12,486 `orphan` answers: retries while a parent was landing, none for rate or a full mempool.
- **Before the open:** key 0 consolidation 657 transactions, 60.73 tKAS; 15 genesis-coin funding transactions; one hop calibration (two hops) and one lane calibration, under 0.5 tKAS together.
- **In all, about 9,000 tKAS in fees**, about 4,031 of them on our heavy lane.
- Key 0 after the run (20:01:30Z): 5,005 coins over 3 tKAS, 126,748 usable tKAS (197,161 before), 2,239 coins at 3 tKAS or less; most of the drop is value moved into the families' chain outputs and small change, not spent. We did not reconcile it to the sompi. Keys 1–15 have no genesis coin left. The abort line (18,000 usable tKAS) was never near.
- The operator said tKAS is not a limit (2026-11-12, 15:19 Brussels time). Spend stays logged.

## Quirks

- **Box pauses.** The box that runs the bot paused for up to about two minutes while the operator's agent was idle; that likely explains the waiter's 237 s fetch at 18:35Z. The operator kept the box busy through HOLD-3 and the pin; the pin went through on time.
- **Mini's late removals** (42) are new; see above.
- **The outside stream was present** all run, so BASE was lighter than the later N = 0 minutes; both references are given.
- **Counter vs coordinator totals** differ by 3–4 hops per cohort (METHOD's coordinator totals, e.g. floor 13,688, against the counter's 13,692), as in earlier runs: the two read at slightly different moments.

## What a next attempt could try (pre-run 15, not opened)

1. **Is the covenant pre-run work done?** For the question pre-runs 9–14 set out to answer, we think nearly: pre-run 14 is the first with hops at their real node rates, every step published, and a clear ladder. One more run would make it repeatable rather than one reading.
2. If there is a pre-run 15: the same five tiers and lane, but with the **hold raised** (for example to 80 blocks) and **N = 60** at 126, to see whether r200 and r300 keep their BASE rate when the lane is not capped by its own hold; and a **tier at 2× and 3× the lane each time** (for example lane at 150 with tiers at 300 and 450), to check that the "about twice" reading travels.
3. Keep a **middle N = 0 control** between lane steps (HOLD-2 here); with the outside stream present, BASE alone was not a fair reference.
4. Keep the probe, the node-rate table, Mini's count and the on-time waiter. Look at Mini's late removals.
