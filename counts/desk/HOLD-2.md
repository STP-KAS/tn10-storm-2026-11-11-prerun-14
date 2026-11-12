OBSERVATION

Not scored. No payment of ours in pre-run 14: families only, on the desk's private node, plus our own heavy lane at the N shown per minute.

# HOLD-2, desk, pre-run 14

> Our own TN10 testing: what we observed in this run, on our own desk node. Counts only. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

HOLD-2 in pre-run 14 is lane N=0 (the middle control): N0-mid 12 whole minutes. Families only for payments (no payment of ours); our own heavy lane ran at the N and rate shown per minute (N = how many lane chains may each hold one ready transaction in the mempool). The HOLD file names are kept so the bot's and Mini's gates read as in earlier pre-runs. Not scored.

Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder: floor (families 1–4) 100 sompi/gram on the desk's private node, r126 (families 5–7) 126 sompi/gram on the desk's private node, r150 (families 8–10) 150 sompi/gram on the desk's private node, r200 (families 11–13) 200 sompi/gram on the desk's private node, r300 (families 14–16) 300 sompi/gram on the desk's private node. No payment sender was started.

## Tiers against the mempool, per minute

| Minute (UTC) | Lane N / rate | floor (100) | r126 (126) | r150 (150) | r200 (200) | r300 (300) | Our heavy in mempool / ready | Our heavy landed | Lane submits OK | Outside heavy at 100 (>200k mass) / ready | Outside at 100, n | Ready mass, blocks | Mempool | Fee estimate priority |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-12T18:58 | 0 / 100 | 163 | 151 | 156 | 162 | 168 | 0 / 0 | 38 | 0 | 1,600 / 25 | 1,600 | 24.74 | 1,644 | 212.5 |
| 2026-11-12T18:59 | 0 / 100 | 169 | 144 | 154 | 156 | 161 | 0 / 0 | 0 | 0 | 1,361 / 25 | 1,361 | 24.11 | 1,397 | 199.9 |
| 2026-11-12T19:00 | 0 / 100 | 155 | 131 | 138 | 143 | 157 | 0 / 0 | 0 | 0 | 1,276 / 25 | 1,276 | 23.99 | 1,320 | 235.3 |
| 2026-11-12T19:01 | 0 / 100 | 165 | 143 | 150 | 165 | 170 | 0 / 0 | 0 | 0 | 1,233 / 25 | 1,233 | 23.41 | 1,269 | 225.0 |
| 2026-11-12T19:02 | 0 / 100 | 168 | 144 | 153 | 156 | 164 | 0 / 0 | 0 | 0 | 1,196 / 25 | 1,196 | 24.04 | 1,237 | 256.4 |
| 2026-11-12T19:03 | 0 / 100 | 149 | 126 | 133 | 142 | 149 | 0 / 0 | 0 | 0 | 1,123 / 25 | 1,123 | 23.25 | 1,191 | 238.5 |
| 2026-11-12T19:04 | 0 / 100 | 161 | 129 | 134 | 143 | 147 | 0 / 0 | 0 | 0 | 1,099 / 25 | 1,099 | 22.84 | 1,131 | 231.0 |
| 2026-11-12T19:05 | 0 / 100 | 162 | 130 | 144 | 151 | 155 | 0 / 0 | 0 | 0 | 1,021 / 24 | 1,021 | 22.65 | 1,055 | 217.4 |
| 2026-11-12T19:06 | 0 / 100 | 161 | 141 | 149 | 153 | 159 | 0 / 0 | 0 | 0 | 929 / 24 | 929 | 22.40 | 960 | 224.4 |
| 2026-11-12T19:07 | 0 / 100 | 169 | 143 | 152 | 163 | 166 | 0 / 0 | 0 | 0 | 829 / 25 | 829 | 21.78 | 874 | 233.9 |
| 2026-11-12T19:08 | 0 / 100 | 157 | 136 | 142 | 155 | 167 | 0 / 0 | 0 | 0 | 661 / 23 | 661 | 22.61 | 700 | 222.9 |
| 2026-11-12T19:09 | 0 / 100 | 173 | 139 | 152 | 151 | 157 | 0 / 0 | 0 | 0 | 394 / 21 | 394 | 22.19 | 459 | 235.5 |

Lane N / rate is the cap the runner set for that minute (N lane chains, each with at most one ready transaction in the mempool) and the lane's fee rate. Our heavy in mempool / ready is the probe's median count of our own lane entries; our heavy landed is what the desk counter read as accepted on chain from our lane in the minute; lane submits OK is the lane's own log. Hops are what the desk counter read as accepted on chain in that minute, per tier. Ready mass, blocks, is the median of the probe's samples in the minute (block limit 500,000). Outside at 100 is the median count of mempool entries not in our logs (our lane is in our logs) paying 100 sompi/gram, and heavy is how many of those had a mass over 200,000 (median of samples). The outside stream is not attributed to anyone.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | R126 hops (126) | R150 hops (150) | R200 hops (200) | R300 hops (300) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-12T18:58 | 4,440 | 0 | 163 | 151 | 156 | 162 | 168 | 3,602 | 392 | 2 | 638 | 20 | kept pace |
| 2026-11-12T18:59 | 4,322 | 0 | 169 | 144 | 154 | 156 | 161 | 3,538 | 369 | 1 | 282 | 20 | kept pace |
| 2026-11-12T19:00 | 4,318 | 0 | 155 | 131 | 138 | 143 | 157 | 3,594 | 392 | 0 | 506 | 20 | kept pace |
| 2026-11-12T19:01 | 4,356 | 0 | 165 | 143 | 150 | 165 | 170 | 3,563 | 366 | 1 | 392 | 20 | kept pace |
| 2026-11-12T19:02 | 4,312 | 0 | 168 | 144 | 153 | 156 | 164 | 3,527 | 362 | 0 | 560 | 20 | kept pace |
| 2026-11-12T19:03 | 4,334 | 0 | 149 | 126 | 133 | 142 | 149 | 3,635 | 364 | 1 | 644 | 20 | kept pace |
| 2026-11-12T19:04 | 4,410 | 0 | 161 | 129 | 134 | 143 | 147 | 3,696 | 343 | 0 | 485 | 20 | kept pace |
| 2026-11-12T19:05 | 4,241 | 0 | 162 | 130 | 144 | 151 | 155 | 3,499 | 371 | 0 | 583 | 20 | kept pace |
| 2026-11-12T19:06 | 4,314 | 0 | 161 | 141 | 149 | 153 | 159 | 3,551 | 361 | 1 | 516 | 20 | kept pace |
| 2026-11-12T19:07 | 4,377 | 0 | 169 | 143 | 152 | 163 | 166 | 3,584 | 370 | 1 | 634 | 20 | kept pace |
| 2026-11-12T19:08 | 4,266 | 0 | 157 | 136 | 142 | 155 | 167 | 3,509 | 369 | 0 | 470 | 20 | kept pace |
| 2026-11-12T19:09 | 4,267 | 0 | 173 | 139 | 152 | 151 | 157 | 3,495 | 374 | 1 | 499 | 20 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–4, desk private node): 100 sompi/gram per hop. R126 (families 5–7, desk private node): 126 sompi/gram per hop. R150 (families 8–10, desk private node): 150 sompi/gram per hop. R200 (families 11–13, desk private node): 200 sompi/gram per hop. R300 (families 14–16, desk private node): 300 sompi/gram per hop. In pre-run 14 that rate is on the hop's node-side mass (kit21): the builder is asked for a bill rate on its own mass so that fee / node mass is the tier's rate.

| Tier | Node rate as built, median (min–max) | Bill rate, median | Node mass, median (min–max) | Node rate in the desk mempool, lowest–highest (probe) |
|---|---|---:|---|---|
| floor (100) | 100.16 (100–100.32) | 316 | 41,221 (40,377–43,771) | 100–100.32 |
| r126 (126) | 126.18 (126–126.32) | 399 | 41,221 (40,380–43,766) | 126–126.32 |
| r150 (150) | 150.13 (150–150.32) | 474 | 41,224 (40,383–43,769) | 150–150.32 |
| r200 (200) | 200.14 (200–200.32) | 633 | 41,226 (40,391–43,769) | 200–200.32 |
| r300 (300) | 300.16 (300–300.32) | 949 | 41,226 (40,403–43,766) | 300–300.31 |

Node rate as built is kit21's fee / node mass (rusty-kaspa v2.1.0 storage mass with UTXO plurality, or compute or transient/2 if larger). In the desk mempool the probe divides the node's fee by the larger of the storage and compute mass the node reports.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 16 (750), 15 (721), 17 (682), 14 (605), 18 (497), 13 (464), 12 (309), 19 (284), 11 (177), 4 (159), 5 (121), 20 (110), and 70 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | R126 OK / att / rate rej / full rej / waiting | R150 OK / att / rate rej / full rej / waiting | R200 OK / att / rate rej / full rej / waiting | R300 OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---|---|---:|---:|---|
| 2026-11-12T18:58 | 0 | 0 | 0 | 0 | 0 | 161 / 358 / 0 / 0 / 3 | 150 / 283 / 0 / 0 / 2 | 155 / 281 / 0 / 0 / 2 | 158 / 287 / 0 / 0 / 1 | 165 / 286 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T18:59 | 0 | 0 | 0 | 0 | 0 | 167 / 354 / 0 / 0 / 1 | 142 / 277 / 0 / 0 / 0 | 152 / 284 / 0 / 0 / 0 | 155 / 282 / 0 / 0 / 0 | 158 / 286 / 0 / 0 / 0 | 0 | 0 | yes |
| 2026-11-12T19:00 | 0 | 0 | 0 | 0 | 0 | 158 / 348 / 0 / 0 / 4 | 134 / 271 / 0 / 0 / 3 | 141 / 272 / 0 / 0 / 3 | 146 / 282 / 0 / 0 / 3 | 160 / 294 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:01 | 0 | 0 | 0 | 0 | 0 | 163 / 353 / 0 / 0 / 2 | 141 / 266 / 0 / 0 / 1 | 149 / 274 / 0 / 0 / 2 | 165 / 287 / 0 / 0 / 3 | 170 / 285 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:02 | 0 | 0 | 0 | 0 | 0 | 170 / 355 / 0 / 0 / 4 | 146 / 277 / 0 / 0 / 3 | 154 / 280 / 0 / 0 / 3 | 156 / 281 / 0 / 0 / 3 | 164 / 278 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:03 | 0 | 0 | 0 | 0 | 0 | 149 / 344 / 0 / 0 / 4 | 126 / 266 / 0 / 0 / 3 | 133 / 273 / 0 / 0 / 3 | 142 / 276 / 0 / 0 / 3 | 149 / 274 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:04 | 0 | 0 | 0 | 0 | 0 | 159 / 356 / 0 / 0 / 2 | 127 / 268 / 0 / 0 / 1 | 134 / 270 / 0 / 0 / 3 | 142 / 278 / 0 / 0 / 2 | 144 / 277 / 0 / 0 / 0 | 0 | 0 | yes |
| 2026-11-12T19:05 | 0 | 0 | 0 | 0 | 0 | 164 / 358 / 0 / 0 / 4 | 132 / 264 / 0 / 0 / 3 | 145 / 279 / 0 / 0 / 4 | 151 / 280 / 0 / 0 / 2 | 158 / 277 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:06 | 0 | 0 | 0 | 0 | 0 | 161 / 354 / 0 / 0 / 4 | 141 / 271 / 0 / 0 / 3 | 148 / 284 / 0 / 0 / 3 | 154 / 283 / 0 / 0 / 3 | 159 / 283 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:07 | 0 | 0 | 0 | 0 | 0 | 169 / 365 / 0 / 0 / 4 | 143 / 275 / 0 / 0 / 3 | 152 / 271 / 0 / 0 / 3 | 163 / 283 / 0 / 0 / 3 | 166 / 281 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:08 | 0 | 0 | 0 | 0 | 0 | 159 / 354 / 0 / 0 / 6 | 137 / 267 / 0 / 0 / 4 | 145 / 271 / 0 / 0 / 6 | 155 / 287 / 0 / 0 / 3 | 164 / 286 / 0 / 0 / 0 | 0 | 0 | yes |
| 2026-11-12T19:09 | 0 | 0 | 0 | 0 | 0 | 170 / 353 / 0 / 0 / 3 | 138 / 270 / 0 / 0 / 3 | 148 / 274 / 0 / 0 / 2 | 150 / 281 / 0 / 0 / 2 | 158 / 287 / 0 / 0 / 1 | 0 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 14 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 0 to 0 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender reads and submits every tier on the desk's private node, which the desk counter reads. The kept public kaspads are read for sync and DAA only; no payment of ours went to them.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621744054 | 0 | 0 | 0 | 36 |
| 5 | yes | 621744054 | 0 | 0 | 0 | 41 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 1950 of 1950 | 1236 | 2137 |
| r126 | 1657 of 1657 | 1105 | 1758 |
| r150 | 1756 of 1756 | 1038 | 1603 |
| r200 | 1837 of 1837 | 994 | 1492 |
| r300 | 1915 of 1915 | 944 | 1407 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end. Every tier has the same hop shape and the same node; only the rate differs.

## Mempool and template, desk node (probe)

| Minute (UTC) | Samples | Mempool | Ready (no parent in mempool) | Ready mass, blocks of 500k | Other traffic in mempool | Other ready | Other at 100, n | Other at 100, mean mass | Our payments in mempool | Our heavy in mempool / ready | Floor in mempool / ready | R126 in mempool / ready | R150 in mempool / ready | R200 in mempool / ready | R300 in mempool / ready | Template txs | Template storage mass | Template txs over 100k storage mass | Template: payments | Template: our heavy | Template: floor | Template: r126 | Template: r150 | Template: r200 | Template: r300 | Template: other | Fee estimate priority / normal / low | Public 1 mempool | Public 5 mempool |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 2026-11-12T18:58 | 3 | 1,644 | 68 | 24.74 | 1,631 | 55 | 1,600 | 266,641 | 0 | 0 / 0 | 3 / 3 | 3 / 3 | 3 / 3 | 2 / 2 | 3 / 3 | 7 | 471,864 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 2 | 212.5 / 154.3 / 111.4 | 1,632 | 1,631 |
| 2026-11-12T18:59 | 3 | 1,397 | 61 | 24.11 | 1,385 | 49 | 1,361 | 266,641 | 0 | 0 / 0 | 3 / 3 | 3 / 3 | 3 / 3 | 2 / 2 | 2 / 2 | 7 | 473,389 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 2 | 2 | 199.9 / 150.5 / 110.9 | 1,405 | 1,405 |
| 2026-11-12T19:00 | 3 | 1,320 | 69 | 23.99 | 1,304 | 53 | 1,276 | 266,640 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 8 | 473,019 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 3 | 1 | 235.3 / 160.2 / 112.1 | 1,312 | 1,312 |
| 2026-11-12T19:01 | 3 | 1,269 | 61 | 23.41 | 1,254 | 46 | 1,233 | 266,640 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 10 | 473,002 | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 2 | 1 | 225.0 / 157.7 / 111.8 | 1,280 | 1,277 |
| 2026-11-12T19:02 | 3 | 1,237 | 89 | 24.04 | 1,247 | 73 | 1,196 | 266,640 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 8 | 473,344 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 3 | 256.4 / 164.8 / 112.7 | 1,233 | 1,222 |
| 2026-11-12T19:03 | 3 | 1,191 | 86 | 23.25 | 1,180 | 74 | 1,123 | 266,640 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 2 / 2 | 2 / 2 | 14 | 471,843 | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 9 | 238.5 / 161.0 / 112.2 | 1,178 | 1,178 |
| 2026-11-12T19:04 | 3 | 1,131 | 68 | 22.84 | 1,129 | 53 | 1,099 | 266,640 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 8 | 432,732 | 1 | 0 | 0 | 0 | 2 | 0 | 1 | 1 | 3 | 231.0 / 159.2 / 112.0 | 1,137 | 1,140 |
| 2026-11-12T19:05 | 3 | 1,055 | 60 | 22.65 | 1,043 | 45 | 1,021 | 266,640 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 2 / 2 | 9 | 472,713 | 1 | 0 | 0 | 0 | 1 | 0 | 2 | 2 | 2 | 217.4 / 155.7 / 111.6 | 1,056 | 1,056 |
| 2026-11-12T19:06 | 3 | 960 | 59 | 22.40 | 955 | 44 | 929 | 266,640 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 9 | 474,151 | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 224.4 / 157.5 / 111.8 | 961 | 967 |
| 2026-11-12T19:07 | 3 | 874 | 63 | 21.78 | 864 | 49 | 829 | 266,638 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 2 / 2 | 10 | 471,946 | 1 | 0 | 0 | 1 | 0 | 2 | 1 | 2 | 5 | 233.9 / 159.9 / 112.1 | 868 | 849 |
| 2026-11-12T19:08 | 3 | 700 | 60 | 22.61 | 708 | 46 | 661 | 266,637 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 2 / 2 | 3 / 3 | 3 / 3 | 7 | 471,975 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 3 | 2 | 222.9 / 157.2 / 111.8 | 723 | 723 |
| 2026-11-12T19:09 | 3 | 459 | 70 | 22.19 | 443 | 54 | 394 | 266,637 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 9 | 477,362 | 1 | 0 | 0 | 0 | 0 | 2 | 2 | 3 | 2 | 235.5 / 160.3 / 112.2 | 415 | 423 |

Read by the probe on the desk's private TN10 node every 20 s, read-only; each cell is the median of that minute's samples. Ready means no parent in the mempool: in rusty-kaspa v2.1.0 only those are in the selector's frontier. Ready mass is compared with one block's mass limit (500,000): at or under 1 the selector takes all ready transactions best-first; over 1 it samples at random weighted by (fee/mass)^3 (over 4, sample_inplace). Mass is the larger of compute and storage mass, as the v2.1.0 selector normalises it (transient mass is not in the RPC). Other traffic is every mempool entry not in our sender logs (our heavy lane is its own class, our heavy); its fee rate is the node's fee over that mass. Template transactions carry no id in the RPC, so each is matched to a mempool entry by its first input. The template is the desk node's own getBlockTemplate (never submitted): what this node would put in a block at that moment, not a miner's template. The fee estimate is the node's getFeeEstimate, read only; no sender reads it. Public mempool is getInfo's mempool size on each kept public kaspad.
