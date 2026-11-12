OBSERVATION

Not scored. No payment of ours in pre-run 14: families only, on the desk's private node, plus our own heavy lane at the N shown per minute.

# RETURN, desk, pre-run 14

> Our own TN10 testing: what we observed in this run, on our own desk node. Counts only. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

RETURN is families only with our heavy lane at N=0 (the drain), 12 whole minutes, the last stretch before the families stop. Not scored.

Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder: floor (families 1–4) 100 sompi/gram on the desk's private node, r126 (families 5–7) 126 sompi/gram on the desk's private node, r150 (families 8–10) 150 sompi/gram on the desk's private node, r200 (families 11–13) 200 sompi/gram on the desk's private node, r300 (families 14–16) 300 sompi/gram on the desk's private node. No payment sender was started.

## Tiers against the mempool, per minute

| Minute (UTC) | Lane N / rate | floor (100) | r126 (126) | r150 (150) | r200 (200) | r300 (300) | Our heavy in mempool / ready | Our heavy landed | Lane submits OK | Outside heavy at 100 (>200k mass) / ready | Outside at 100, n | Ready mass, blocks | Mempool | Fee estimate priority |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-12T19:40 | 0 / 100 | 163 | 134 | 142 | 143 | 157 | 0 / 0 | 0 | 0 | 1,828 / 25 | 1,828 | 29.96 | 1,877 | 242.5 |
| 2026-11-12T19:41 | 0 / 100 | 166 | 140 | 148 | 153 | 157 | 0 / 0 | 0 | 0 | 1,788 / 25 | 1,788 | 29.10 | 1,828 | 237.3 |
| 2026-11-12T19:42 | 0 / 100 | 184 | 164 | 170 | 182 | 189 | 0 / 0 | 0 | 0 | 1,756 / 25 | 1,756 | 28.29 | 1,813 | 212.7 |
| 2026-11-12T19:43 | 0 / 100 | 167 | 136 | 149 | 160 | 158 | 0 / 0 | 0 | 0 | 1,736 / 25 | 1,736 | 28.75 | 1,795 | 237.5 |
| 2026-11-12T19:44 | 0 / 100 | 159 | 132 | 136 | 145 | 155 | 0 / 0 | 0 | 0 | 1,695 / 25 | 1,695 | 28.51 | 1,755 | 227.3 |
| 2026-11-12T19:45 | 0 / 100 | 179 | 151 | 158 | 175 | 180 | 0 / 0 | 0 | 0 | 1,645 / 25 | 1,645 | 27.30 | 1,696 | 233.3 |
| 2026-11-12T19:46 | 0 / 100 | 179 | 149 | 157 | 166 | 180 | 0 / 0 | 0 | 0 | 1,559 / 25 | 1,559 | 26.52 | 1,589 | 226.3 |
| 2026-11-12T19:47 | 0 / 100 | 161 | 153 | 157 | 168 | 171 | 0 / 0 | 0 | 0 | 1,424 / 25 | 1,424 | 27.31 | 1,487 | 232.6 |
| 2026-11-12T19:48 | 0 / 100 | 162 | 128 | 143 | 155 | 160 | 0 / 0 | 0 | 0 | 1,307 / 22 | 1,307 | 25.90 | 1,340 | 168.2 |
| 2026-11-12T19:49 | 0 / 100 | 172 | 140 | 145 | 155 | 161 | 0 / 0 | 0 | 0 | 1,205 / 18 | 1,205 | 25.34 | 1,249 | 208.7 |
| 2026-11-12T19:50 | 0 / 100 | 170 | 131 | 138 | 146 | 144 | 0 / 0 | 0 | 0 | 1,136 / 23 | 1,136 | 25.57 | 1,172 | 218.3 |
| 2026-11-12T19:51 | 0 / 100 | 156 | 132 | 139 | 150 | 149 | 0 / 0 | 0 | 0 | 1,085 / 25 | 1,085 | 27.10 | 1,121 | 231.6 |

Lane N / rate is the cap the runner set for that minute (N lane chains, each with at most one ready transaction in the mempool) and the lane's fee rate. Our heavy in mempool / ready is the probe's median count of our own lane entries; our heavy landed is what the desk counter read as accepted on chain from our lane in the minute; lane submits OK is the lane's own log. Hops are what the desk counter read as accepted on chain in that minute, per tier. Ready mass, blocks, is the median of the probe's samples in the minute (block limit 500,000). Outside at 100 is the median count of mempool entries not in our logs (our lane is in our logs) paying 100 sompi/gram, and heavy is how many of those had a mass over 200,000 (median of samples). The outside stream is not attributed to anyone.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | R126 hops (126) | R150 hops (150) | R200 hops (200) | R300 hops (300) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-12T19:40 | 4,228 | 0 | 163 | 134 | 142 | 143 | 157 | 3,489 | 337 | 1 | 492 | 20 | kept pace |
| 2026-11-12T19:41 | 4,289 | 0 | 166 | 140 | 148 | 153 | 157 | 3,525 | 400 | 1 | 525 | 20 | kept pace |
| 2026-11-12T19:42 | 4,416 | 0 | 184 | 164 | 170 | 182 | 189 | 3,527 | 354 | 2 | 716 | 20 | kept pace |
| 2026-11-12T19:43 | 4,269 | 0 | 167 | 136 | 149 | 160 | 158 | 3,499 | 338 | 1 | 1077 | 20 | kept pace |
| 2026-11-12T19:44 | 4,274 | 0 | 159 | 132 | 136 | 145 | 155 | 3,548 | 362 | 1 | 503 | 19 | kept pace |
| 2026-11-12T19:45 | 4,333 | 0 | 179 | 151 | 158 | 175 | 180 | 3,490 | 385 | 0 | 516 | 21 | kept pace |
| 2026-11-12T19:46 | 4,392 | 0 | 179 | 149 | 157 | 166 | 180 | 3,561 | 409 | 1 | 695 | 20 | kept pace |
| 2026-11-12T19:47 | 4,297 | 0 | 161 | 153 | 157 | 168 | 171 | 3,488 | 353 | 1 | 549 | 20 | kept pace |
| 2026-11-12T19:48 | 4,220 | 0 | 162 | 128 | 143 | 155 | 160 | 3,473 | 352 | 2 | 774 | 21 | kept pace |
| 2026-11-12T19:49 | 4,248 | 0 | 172 | 140 | 145 | 155 | 161 | 3,476 | 348 | 2 | 557 | 20 | kept pace |
| 2026-11-12T19:50 | 4,470 | 0 | 170 | 131 | 138 | 146 | 144 | 3,741 | 364 | 3 | 404 | 20 | kept pace |
| 2026-11-12T19:51 | 4,286 | 0 | 156 | 132 | 139 | 150 | 149 | 3,560 | 371 | 1 | 540 | 20 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–4, desk private node): 100 sompi/gram per hop. R126 (families 5–7, desk private node): 126 sompi/gram per hop. R150 (families 8–10, desk private node): 150 sompi/gram per hop. R200 (families 11–13, desk private node): 200 sompi/gram per hop. R300 (families 14–16, desk private node): 300 sompi/gram per hop. In pre-run 14 that rate is on the hop's node-side mass (kit21): the builder is asked for a bill rate on its own mass so that fee / node mass is the tier's rate.

| Tier | Node rate as built, median (min–max) | Bill rate, median | Node mass, median (min–max) | Node rate in the desk mempool, lowest–highest (probe) |
|---|---|---:|---|---|
| floor (100) | 100.16 (100–100.32) | 313 | 40,708 (40,377–43,763) | 100–100.31 |
| r126 (126) | 126.22 (126–126.32) | 394 | 40,723 (40,380–43,763) | 126–126.32 |
| r150 (150) | 150.15 (150–150.32) | 469 | 40,705 (40,383–43,766) | 150–150.32 |
| r200 (200) | 200.16 (200–200.32) | 625 | 40,714 (40,390–43,766) | 200–200.32 |
| r300 (300) | 300.18 (300–300.32) | 937 | 40,729 (40,403–43,763) | 300–300.31 |

Node rate as built is kit21's fee / node mass (rusty-kaspa v2.1.0 storage mass with UTXO plurality, or compute or transient/2 if larger). In the desk mempool the probe divides the node's fee by the larger of the storage and compute mass the node reports.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 10 (519), 9 (503), 11 (496), 12 (453), 8 (413), 7 (402), 13 (394), 6 (333), 5 (321), 14 (250), 4 (193), 15 (136), and 66 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | R126 OK / att / rate rej / full rej / waiting | R150 OK / att / rate rej / full rej / waiting | R200 OK / att / rate rej / full rej / waiting | R300 OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---|---|---:|---:|---|
| 2026-11-12T19:40 | 0 | 0 | 0 | 0 | 0 | 165 / 354 / 0 / 0 / 4 | 136 / 272 / 0 / 0 / 3 | 142 / 274 / 0 / 0 / 3 | 143 / 273 / 0 / 0 / 3 | 157 / 287 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:41 | 0 | 0 | 0 | 0 | 0 | 166 / 354 / 0 / 0 / 4 | 140 / 274 / 0 / 0 / 3 | 148 / 279 / 0 / 0 / 3 | 153 / 288 / 0 / 0 / 3 | 157 / 290 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:42 | 0 | 0 | 0 | 0 | 0 | 183 / 358 / 0 / 0 / 3 | 164 / 282 / 0 / 0 / 3 | 170 / 277 / 0 / 0 / 3 | 182 / 283 / 0 / 0 / 3 | 186 / 280 / 0 / 0 / 0 | 0 | 0 | yes |
| 2026-11-12T19:43 | 0 | 0 | 0 | 0 | 0 | 166 / 349 / 0 / 0 / 2 | 134 / 269 / 0 / 0 / 1 | 146 / 269 / 0 / 0 / 0 | 157 / 280 / 0 / 0 / 0 | 160 / 283 / 0 / 0 / 2 | 0 | 0 | yes |
| 2026-11-12T19:44 | 0 | 0 | 0 | 0 | 0 | 160 / 359 / 0 / 0 / 3 | 134 / 272 / 0 / 0 / 3 | 136 / 273 / 0 / 0 / 0 | 147 / 280 / 0 / 0 / 2 | 156 / 279 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:45 | 0 | 0 | 0 | 0 | 0 | 180 / 356 / 0 / 0 / 4 | 151 / 262 / 0 / 0 / 3 | 161 / 269 / 0 / 0 / 3 | 176 / 279 / 0 / 0 / 3 | 180 / 279 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:46 | 0 | 0 | 0 | 0 | 0 | 179 / 356 / 0 / 0 / 4 | 149 / 276 / 0 / 0 / 3 | 157 / 278 / 0 / 0 / 3 | 166 / 283 / 0 / 0 / 3 | 180 / 288 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:47 | 0 | 0 | 0 | 0 | 0 | 161 / 350 / 0 / 0 / 4 | 152 / 275 / 0 / 0 / 2 | 156 / 277 / 0 / 0 / 2 | 168 / 277 / 0 / 0 / 3 | 171 / 280 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:48 | 0 | 0 | 0 | 0 | 0 | 161 / 357 / 0 / 0 / 3 | 129 / 263 / 0 / 0 / 3 | 144 / 273 / 0 / 0 / 3 | 155 / 281 / 0 / 0 / 3 | 160 / 283 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:49 | 0 | 0 | 0 | 0 | 0 | 173 / 354 / 0 / 0 / 4 | 140 / 273 / 0 / 0 / 3 | 145 / 273 / 0 / 0 / 3 | 155 / 274 / 0 / 0 / 3 | 161 / 271 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:50 | 0 | 0 | 0 | 0 | 0 | 170 / 355 / 0 / 0 / 4 | 131 / 264 / 0 / 0 / 3 | 138 / 272 / 0 / 0 / 3 | 146 / 274 / 0 / 0 / 3 | 144 / 273 / 0 / 0 / 3 | 0 | 0 | yes |
| 2026-11-12T19:51 | 0 | 0 | 0 | 0 | 0 | 156 / 354 / 0 / 0 / 4 | 132 / 269 / 0 / 0 / 3 | 139 / 272 / 0 / 0 / 3 | 150 / 288 / 0 / 0 / 3 | 149 / 275 / 0 / 0 / 3 | 0 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 14 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 0 to 0 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender reads and submits every tier on the desk's private node, which the desk counter reads. The kept public kaspads are read for sync and DAA only; no payment of ours went to them.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621769296 | 0 | 0 | 0 | 39 |
| 5 | yes | 621769296 | 0 | 0 | 0 | 42 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 2020 of 2020 | 1196 | 2156 |
| r126 | 1692 of 1692 | 1085 | 1807 |
| r150 | 1782 of 1782 | 1035 | 1609 |
| r200 | 1898 of 1898 | 967 | 1484 |
| r300 | 1961 of 1961 | 927 | 1400 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end. Every tier has the same hop shape and the same node; only the rate differs.

## Mempool and template, desk node (probe)

| Minute (UTC) | Samples | Mempool | Ready (no parent in mempool) | Ready mass, blocks of 500k | Other traffic in mempool | Other ready | Other at 100, n | Other at 100, mean mass | Our payments in mempool | Our heavy in mempool / ready | Floor in mempool / ready | R126 in mempool / ready | R150 in mempool / ready | R200 in mempool / ready | R300 in mempool / ready | Template txs | Template storage mass | Template txs over 100k storage mass | Template: payments | Template: our heavy | Template: floor | Template: r126 | Template: r150 | Template: r200 | Template: r300 | Template: other | Fee estimate priority / normal / low | Public 1 mempool | Public 5 mempool |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 2026-11-12T19:40 | 3 | 1,877 | 87 | 29.96 | 1,874 | 71 | 1,828 | 266,626 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 7 | 471,004 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 3 | 2 | 242.5 / 161.9 / 112.3 | 1,866 | 1,876 |
| 2026-11-12T19:41 | 3 | 1,828 | 83 | 29.10 | 1,820 | 67 | 1,788 | 266,625 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 6 | 470,907 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 3 | 1 | 237.3 / 160.7 / 112.2 | 1,824 | 1,841 |
| 2026-11-12T19:42 | 3 | 1,813 | 92 | 28.29 | 1,804 | 85 | 1,756 | 266,625 | 0 | 0 / 0 | 4 / 4 | 2 / 2 | 2 / 2 | 0 / 0 | 0 / 0 | 7 | 470,701 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 212.7 / 154.4 / 111.4 | 1,789 | 1,789 |
| 2026-11-12T19:43 | 3 | 1,795 | 82 | 28.75 | 1,780 | 66 | 1,736 | 266,624 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 8 | 450,755 | 1 | 0 | 0 | 0 | 2 | 0 | 0 | 3 | 2 | 237.5 / 160.7 / 112.2 | 1,792 | 1,790 |
| 2026-11-12T19:44 | 3 | 1,755 | 71 | 28.51 | 1,741 | 55 | 1,695 | 266,623 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 8 | 474,179 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 1 | 227.3 / 158.3 / 111.9 | 1,744 | 1,743 |
| 2026-11-12T19:45 | 3 | 1,696 | 79 | 27.30 | 1,683 | 63 | 1,645 | 266,622 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 6 | 472,831 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 3 | 1 | 233.3 / 159.8 / 112.1 | 1,686 | 1,683 |
| 2026-11-12T19:46 | 3 | 1,589 | 66 | 26.52 | 1,584 | 50 | 1,559 | 266,621 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 6 | 469,564 | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 226.3 / 158.0 / 111.9 | 1,608 | 1,607 |
| 2026-11-12T19:47 | 3 | 1,487 | 75 | 27.31 | 1,477 | 68 | 1,424 | 266,620 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 2 / 2 | 1 / 1 | 9 | 473,809 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 4 | 232.6 / 159.6 / 112.1 | 1,484 | 1,468 |
| 2026-11-12T19:48 | 3 | 1,340 | 58 | 25.90 | 1,335 | 51 | 1,307 | 266,619 | 0 | 0 / 0 | 3 / 3 | 2 / 2 | 2 / 2 | 1 / 1 | 0 / 0 | 6 | 473,107 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 168.2 / 138.9 / 109.2 | 1,356 | 1,355 |
| 2026-11-12T19:49 | 3 | 1,249 | 62 | 25.34 | 1,236 | 49 | 1,205 | 266,618 | 0 | 0 / 0 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 6 | 470,123 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 3 | 1 | 208.7 / 153.2 / 111.3 | 1,247 | 1,246 |
| 2026-11-12T19:50 | 3 | 1,172 | 68 | 25.57 | 1,172 | 54 | 1,136 | 266,617 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 6 | 469,943 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 3 | 1 | 218.3 / 155.9 / 111.6 | 1,160 | 1,164 |
| 2026-11-12T19:51 | 3 | 1,121 | 72 | 27.10 | 1,109 | 60 | 1,085 | 266,615 | 0 | 0 / 0 | 3 / 3 | 2 / 2 | 3 / 3 | 3 / 3 | 2 / 2 | 8 | 470,435 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 3 | 231.6 / 159.3 / 112.0 | 1,119 | 1,119 |

Read by the probe on the desk's private TN10 node every 20 s, read-only; each cell is the median of that minute's samples. Ready means no parent in the mempool: in rusty-kaspa v2.1.0 only those are in the selector's frontier. Ready mass is compared with one block's mass limit (500,000): at or under 1 the selector takes all ready transactions best-first; over 1 it samples at random weighted by (fee/mass)^3 (over 4, sample_inplace). Mass is the larger of compute and storage mass, as the v2.1.0 selector normalises it (transient mass is not in the RPC). Other traffic is every mempool entry not in our sender logs (our heavy lane is its own class, our heavy); its fee rate is the node's fee over that mass. Template transactions carry no id in the RPC, so each is matched to a mempool entry by its first input. The template is the desk node's own getBlockTemplate (never submitted): what this node would put in a block at that moment, not a miner's template. The fee estimate is the node's getFeeEstimate, read only; no sender reads it. Public mempool is getInfo's mempool size on each kept public kaspad.
