OBSERVATION

Not scored. No payment of ours in pre-run 14: families only, on the desk's private node, plus our own heavy lane at the N shown per minute.

# BASE, desk, pre-run 14

> Our own TN10 testing: what we observed in this run, on our own desk node. Counts only. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

BASE in pre-run 14 is lane N=0 (control): N0-control 12 whole minutes. Families only for payments (no payment of ours); our own heavy lane ran at the N and rate shown per minute (N = how many lane chains may each hold one ready transaction in the mempool). The HOLD file names are kept so the bot's and Mini's gates read as in earlier pre-runs. Not scored.

Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder: floor (families 1–4) 100 sompi/gram on the desk's private node, r126 (families 5–7) 126 sompi/gram on the desk's private node, r150 (families 8–10) 150 sompi/gram on the desk's private node, r200 (families 11–13) 200 sompi/gram on the desk's private node, r300 (families 14–16) 300 sompi/gram on the desk's private node. No payment sender was started.

## Tiers against the mempool, per minute

| Minute (UTC) | Lane N / rate | floor (100) | r126 (126) | r150 (150) | r200 (200) | r300 (300) | Our heavy in mempool / ready | Our heavy landed | Lane submits OK | Outside heavy at 100 (>200k mass) / ready | Outside at 100, n | Ready mass, blocks | Mempool | Fee estimate priority |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-12T18:22 | 0 / 100 | 141 | 125 | 128 | 134 | 137 | 0 / 0 | 0 | 0 | 35 / 22 | 35 | 16.84 | 67 | 213.0 |
| 2026-11-12T18:23 | 0 / 100 | 186 | 143 | 147 | 158 | 155 | 0 / 0 | 0 | 0 | 5 / 5 | 5 | 4.31 | 17 | 168.1 |
| 2026-11-12T18:24 | 0 / 100 | 182 | 143 | 146 | 148 | 153 | 0 / 0 | 0 | 0 | 21 / 16 | 21 | 10.93 | 38 | 177.5 |
| 2026-11-12T18:25 | 0 / 100 | 161 | 133 | 139 | 148 | 152 | 0 / 0 | 0 | 0 | 29 / 17 | 29 | 12.02 | 50 | 195.1 |
| 2026-11-12T18:26 | 0 / 100 | 162 | 136 | 140 | 147 | 152 | 0 / 0 | 0 | 0 | 28 / 18 | 28 | 14.61 | 50 | 200.2 |
| 2026-11-12T18:27 | 0 / 100 | 169 | 137 | 138 | 149 | 149 | 0 / 0 | 0 | 0 | 24 / 17 | 24 | 13.69 | 41 | 212.5 |
| 2026-11-12T18:28 | 0 / 100 | 175 | 139 | 141 | 141 | 143 | 0 / 0 | 0 | 0 | 14 / 13 | 14 | 10.13 | 32 | 192.5 |
| 2026-11-12T18:29 | 0 / 100 | 198 | 148 | 150 | 158 | 157 | 0 / 0 | 0 | 0 | 9 / 9 | 9 | 5.93 | 18 | 171.4 |
| 2026-11-12T18:30 | 0 / 100 | 193 | 157 | 163 | 166 | 169 | 0 / 0 | 0 | 0 | 11 / 9 | 12 | 7.04 | 31 | 194.3 |
| 2026-11-12T18:31 | 0 / 100 | 176 | 141 | 154 | 154 | 156 | 0 / 0 | 0 | 0 | 30 / 20 | 30 | 13.23 | 58 | 229.0 |
| 2026-11-12T18:32 | 0 / 100 | 204 | 159 | 157 | 161 | 167 | 0 / 0 | 0 | 0 | 19 / 17 | 19 | 9.47 | 26 | 194.6 |
| 2026-11-12T18:33 | 0 / 100 | 169 | 133 | 137 | 140 | 142 | 0 / 0 | 0 | 0 | 18 / 17 | 18 | 10.88 | 35 | 205.3 |

Lane N / rate is the cap the runner set for that minute (N lane chains, each with at most one ready transaction in the mempool) and the lane's fee rate. Our heavy in mempool / ready is the probe's median count of our own lane entries; our heavy landed is what the desk counter read as accepted on chain from our lane in the minute; lane submits OK is the lane's own log. Hops are what the desk counter read as accepted on chain in that minute, per tier. Ready mass, blocks, is the median of the probe's samples in the minute (block limit 500,000). Outside at 100 is the median count of mempool entries not in our logs (our lane is in our logs) paying 100 sompi/gram, and heavy is how many of those had a mass over 200,000 (median of samples). The outside stream is not attributed to anyone.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | R126 hops (126) | R150 hops (150) | R200 hops (200) | R300 hops (300) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-12T18:22 | 4,152 | 0 | 141 | 125 | 128 | 134 | 137 | 3,487 | 323 | 1 | 423 | 20 | kept pace |
| 2026-11-12T18:23 | 4,208 | 0 | 186 | 143 | 147 | 158 | 155 | 3,426 | 377 | 1 | 357 | 20 | kept pace |
| 2026-11-12T18:24 | 4,277 | 0 | 182 | 143 | 146 | 148 | 153 | 3,507 | 352 | 1 | 401 | 19 | kept pace |
| 2026-11-12T18:25 | 4,240 | 0 | 161 | 133 | 139 | 148 | 152 | 3,507 | 353 | 1 | 291 | 20 | kept pace |
| 2026-11-12T18:26 | 4,466 | 0 | 162 | 136 | 140 | 147 | 152 | 3,729 | 364 | 1 | 827 | 19 | kept pace |
| 2026-11-12T18:27 | 4,255 | 0 | 169 | 137 | 138 | 149 | 149 | 3,513 | 353 | 1 | 424 | 20 | kept pace |
| 2026-11-12T18:28 | 4,321 | 0 | 175 | 139 | 141 | 141 | 143 | 3,582 | 378 | 1 | 469 | 20 | kept pace |
| 2026-11-12T18:29 | 4,334 | 0 | 198 | 148 | 150 | 158 | 157 | 3,527 | 387 | 0 | 526 | 20 | kept pace |
| 2026-11-12T18:30 | 4,364 | 0 | 193 | 157 | 163 | 166 | 169 | 3,516 | 343 | 1 | 538 | 20 | kept pace |
| 2026-11-12T18:31 | 4,353 | 0 | 176 | 141 | 154 | 154 | 156 | 3,574 | 366 | 2 | 566 | 20 | kept pace |
| 2026-11-12T18:32 | 4,399 | 0 | 204 | 159 | 157 | 161 | 167 | 3,557 | 374 | 1 | 329 | 20 | kept pace |
| 2026-11-12T18:33 | 4,271 | 0 | 169 | 133 | 137 | 140 | 142 | 3,554 | 363 | 1 | 550 | 20 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–4, desk private node): 100 sompi/gram per hop. R126 (families 5–7, desk private node): 126 sompi/gram per hop. R150 (families 8–10, desk private node): 150 sompi/gram per hop. R200 (families 11–13, desk private node): 200 sompi/gram per hop. R300 (families 14–16, desk private node): 300 sompi/gram per hop. In pre-run 14 that rate is on the hop's node-side mass (kit21): the builder is asked for a bill rate on its own mass so that fee / node mass is the tier's rate.

| Tier | Node rate as built, median (min–max) | Bill rate, median | Node mass, median (min–max) | Node rate in the desk mempool, lowest–highest (probe) |
|---|---|---:|---|---|
| floor (100) | 100.15 (100–100.32) | 319 | 41,558 (40,377–43,769) | 100–100.31 |
| r126 (126) | 126.19 (126–126.32) | 402 | 41,558 (40,380–43,771) | 126–126.32 |
| r150 (150) | 150.11 (150–150.32) | 478 | 41,558 (40,383–43,769) | 150–150.3 |
| r200 (200) | 200.22 (200–200.32) | 638 | 41,559 (40,390–43,769) | 200.01–200.3 |
| r300 (300) | 300.17 (300–300.32) | 956 | 41,560 (40,403–43,769) | 300–300.31 |

Node rate as built is kit21's fee / node mass (rusty-kaspa v2.1.0 storage mass with UTXO plurality, or compute or transient/2 if larger). In the desk mempool the probe divides the node's fee by the larger of the storage and compute mass the node reports.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 20 (1,550), 21 (1,068), 19 (1,050), 18 (551), 4 (282), 6 (241), 5 (240), 17 (210), 7 (200), 22 (167), 8 (150), 9 (129), and 69 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | R126 OK / att / rate rej / full rej / waiting | R150 OK / att / rate rej / full rej / waiting | R200 OK / att / rate rej / full rej / waiting | R300 OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---|---|---:|---:|---|
| 2026-11-12T18:22 | 0 | 0 | 0 | 0 | 0 | 142 / 336 / 0 / 0 / 4 | 125 / 265 / 0 / 0 / 3 | 130 / 271 / 0 / 0 / 3 | 134 / 273 / 0 / 0 / 3 | 137 / 279 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T18:23 | 0 | 0 | 0 | 0 | 0 | 184 / 369 / 0 / 0 / 2 | 142 / 279 / 0 / 0 / 2 | 146 / 283 / 0 / 0 / 2 | 155 / 282 / 0 / 0 / 0 | 152 / 280 / 0 / 0 / 0 | 0 | 0 | yes |
| 2026-11-12T18:24 | 0 | 0 | 0 | 0 | 0 | 184 / 357 / 0 / 0 / 4 | 144 / 280 / 0 / 0 / 3 | 146 / 277 / 0 / 0 / 2 | 151 / 282 / 0 / 0 / 3 | 156 / 286 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T18:25 | 0 | 0 | 0 | 0 | 0 | 161 / 357 / 0 / 0 / 4 | 133 / 266 / 0 / 0 / 3 | 140 / 274 / 0 / 0 / 3 | 148 / 280 / 0 / 0 / 3 | 152 / 278 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T18:26 | 0 | 0 | 0 | 0 | 0 | 160 / 356 / 0 / 0 / 2 | 136 / 269 / 0 / 0 / 3 | 139 / 269 / 0 / 0 / 2 | 147 / 274 / 0 / 0 / 3 | 151 / 272 / 0 / 0 / 2 | 0 | 0 | yes |
| 2026-11-12T18:27 | 0 | 0 | 0 | 0 | 0 | 171 / 359 / 0 / 0 / 4 | 137 / 268 / 0 / 0 / 3 | 138 / 276 / 0 / 0 / 2 | 149 / 274 / 0 / 0 / 3 | 150 / 273 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T18:28 | 0 | 0 | 0 | 0 | 0 | 175 / 362 / 0 / 0 / 4 | 139 / 273 / 0 / 0 / 3 | 141 / 276 / 0 / 0 / 2 | 141 / 274 / 0 / 0 / 3 | 143 / 270 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T18:29 | 0 | 0 | 0 | 0 | 0 | 197 / 377 / 0 / 0 / 3 | 148 / 286 / 0 / 0 / 3 | 151 / 287 / 0 / 0 / 3 | 158 / 290 / 0 / 0 / 3 | 157 / 286 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T18:30 | 0 | 0 | 0 | 0 | 0 | 194 / 361 / 0 / 0 / 4 | 157 / 273 / 0 / 0 / 3 | 163 / 283 / 0 / 0 / 3 | 166 / 275 / 0 / 0 / 3 | 169 / 284 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T18:31 | 0 | 0 | 0 | 0 | 0 | 176 / 365 / 0 / 0 / 4 | 141 / 273 / 0 / 0 / 3 | 154 / 290 / 0 / 0 / 3 | 154 / 279 / 0 / 0 / 3 | 156 / 284 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T18:32 | 0 | 0 | 0 | 0 | 0 | 201 / 368 / 0 / 0 / 1 | 157 / 270 / 0 / 0 / 1 | 157 / 269 / 0 / 0 / 3 | 160 / 280 / 0 / 0 / 2 | 167 / 285 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T18:33 | 0 | 0 | 0 | 0 | 0 | 172 / 360 / 0 / 0 / 3 | 136 / 267 / 0 / 0 / 3 | 138 / 277 / 0 / 0 / 2 | 141 / 275 / 0 / 0 / 3 | 142 / 278 / 0 / 0 / 3 | 0 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 14 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 0 to 0 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender reads and submits every tier on the desk's private node, which the desk counter reads. The kept public kaspads are read for sync and DAA only; no payment of ours went to them.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621722373 | 0 | 0 | 0 | 38 |
| 5 | yes | 621722373 | 0 | 0 | 0 | 43 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 2117 of 2117 | 1134 | 1930 |
| r126 | 1695 of 1695 | 1077 | 1657 |
| r150 | 1743 of 1743 | 1043 | 1586 |
| r200 | 1804 of 1804 | 1000 | 1496 |
| r300 | 1832 of 1832 | 986 | 1437 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end. Every tier has the same hop shape and the same node; only the rate differs.

## Mempool and template, desk node (probe)

| Minute (UTC) | Samples | Mempool | Ready (no parent in mempool) | Ready mass, blocks of 500k | Other traffic in mempool | Other ready | Other at 100, n | Other at 100, mean mass | Our payments in mempool | Our heavy in mempool / ready | Floor in mempool / ready | R126 in mempool / ready | R150 in mempool / ready | R200 in mempool / ready | R300 in mempool / ready | Template txs | Template storage mass | Template txs over 100k storage mass | Template: payments | Template: our heavy | Template: floor | Template: r126 | Template: r150 | Template: r200 | Template: r300 | Template: other | Fee estimate priority / normal / low | Public 1 mempool | Public 5 mempool |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 2026-11-12T18:22 | 3 | 67 | 53 | 16.84 | 57 | 37 | 35 | 266,648 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 6 | 474,714 | 1 | 0 | 0 | 0 | 1 | 0 | 2 | 3 | 1 | 213.0 / 154.4 / 111.5 | 65 | 80 |
| 2026-11-12T18:23 | 3 | 17 | 20 | 4.31 | 7 | 6 | 5 | 266,648 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 12 | 496,818 | 0 | 0 | 0 | 1 | 1 | 3 | 3 | 3 | 0 | 168.1 / 138.8 / 109.2 | 6 | 24 |
| 2026-11-12T18:24 | 3 | 38 | 36 | 10.93 | 34 | 27 | 21 | 266,648 | 0 | 0 / 0 | 3 / 3 | 1 / 1 | 2 / 2 | 2 / 2 | 3 / 3 | 9 | 473,944 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 3 | 2 | 177.5 / 142.6 / 109.8 | 33 | 38 |
| 2026-11-12T18:25 | 3 | 50 | 38 | 12.02 | 35 | 22 | 29 | 266,648 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 2 / 2 | 3 / 3 | 3 / 3 | 6 | 473,628 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 2 | 1 | 195.1 / 148.9 / 110.7 | 56 | 56 |
| 2026-11-12T18:26 | 3 | 50 | 44 | 14.61 | 41 | 29 | 28 | 266,648 | 0 | 0 / 0 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 6 | 474,455 | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 3 | 1 | 200.2 / 150.6 / 111.0 | 57 | 57 |
| 2026-11-12T18:27 | 3 | 41 | 49 | 13.69 | 40 | 33 | 24 | 266,648 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 10 | 472,099 | 1 | 0 | 0 | 0 | 1 | 0 | 2 | 3 | 2 | 212.5 / 154.3 / 111.4 | 41 | 41 |
| 2026-11-12T18:28 | 3 | 32 | 34 | 10.13 | 21 | 20 | 14 | 266,648 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 2 / 2 | 2 / 2 | 6 | 472,744 | 1 | 0 | 0 | 0 | 2 | 1 | 2 | 2 | 1 | 192.5 / 148.1 / 110.6 | 39 | 39 |
| 2026-11-12T18:29 | 3 | 18 | 19 | 5.93 | 11 | 11 | 9 | 266,645 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 6 | 475,782 | 1 | 0 | 0 | 1 | 1 | 0 | 1 | 3 | 1 | 171.4 / 140.2 / 109.4 | 31 | 25 |
| 2026-11-12T18:30 | 3 | 31 | 29 | 7.04 | 15 | 13 | 12 | 266,645 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 12 | 472,718 | 0 | 0 | 0 | 1 | 2 | 1 | 3 | 3 | 1 | 194.3 / 148.7 / 110.7 | 26 | 19 |
| 2026-11-12T18:31 | 3 | 58 | 56 | 13.23 | 54 | 40 | 30 | 266,645 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 7 | 474,897 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 3 | 2 | 229.0 / 158.7 / 112.0 | 55 | 53 |
| 2026-11-12T18:32 | 3 | 26 | 29 | 9.47 | 20 | 18 | 19 | 266,645 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 6 | 470,313 | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 2 | 2 | 194.6 / 148.8 / 110.7 | 24 | 19 |
| 2026-11-12T18:33 | 3 | 35 | 36 | 10.88 | 28 | 25 | 18 | 266,645 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 1 / 1 | 3 / 3 | 8 | 474,451 | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 3 | 3 | 205.3 / 152.2 / 111.2 | 33 | 41 |

Read by the probe on the desk's private TN10 node every 20 s, read-only; each cell is the median of that minute's samples. Ready means no parent in the mempool: in rusty-kaspa v2.1.0 only those are in the selector's frontier. Ready mass is compared with one block's mass limit (500,000): at or under 1 the selector takes all ready transactions best-first; over 1 it samples at random weighted by (fee/mass)^3 (over 4, sample_inplace). Mass is the larger of compute and storage mass, as the v2.1.0 selector normalises it (transient mass is not in the RPC). Other traffic is every mempool entry not in our sender logs (our heavy lane is its own class, our heavy); its fee rate is the node's fee over that mass. Template transactions carry no id in the RPC, so each is matched to a mempool entry by its first input. The template is the desk node's own getBlockTemplate (never submitted): what this node would put in a block at that moment, not a miner's template. The fee estimate is the node's getFeeEstimate, read only; no sender reads it. Public mempool is getInfo's mempool size on each kept public kaspad.
