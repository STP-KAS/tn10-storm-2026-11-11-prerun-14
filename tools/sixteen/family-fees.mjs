// family-fees.mjs: pre-run 14's hop rate per family, as the NODE rates it. Five tiers, every family on the desk's private
// node, no payments of ours. Pre-runs 9-13 priced a hop on the builder's mass (13,046, compute/transient) while the node rated
// it on its storage mass (about 40,400-43,800 with UTXO plurality), so a "100" hop sat at about 32 on the node. In pre-run 14
// kit21's buildHop prices each hop on its node-side mass (rusty-kaspa v2.1.0 normalized_max: max(storage, compute,
// transient/2)), so these rates are fee / node mass. Against our heavy lane at 100 (or 126) the v2.1.0 selector weights are
// (rate/100)^3: 100: 1.00, 126: 2.00, 150: 3.38, 200: 8.00, 300: 27.0 (per transaction, not per gram).
//   floor   families 1-4    100   desk private node (our lane's first rate)
//   r126    families 5-7    126   desk private node (our lane's second rate)
//   r150    families 8-10   150   desk private node
//   r200    families 11-13  200   desk private node
//   r300    families 14-16  300   desk private node
// No payment load. Genesis (built once by hash-sixteen.mjs) stays at 200 on the builder's mass. The builder takes any rate of 100 or more.
// Pre-run 12-13 tiers (as built, on 13,046): floor 100, r110, r126, r150, r200.
export const FLOOR_RATE = 100;
export const PAY_RATE = 150;   // kept for old callers; pre-run 12 starts no payment sender
export const GENESIS_RATE = 200;
export const TIERS = [
  { cohort: "floor", rate: 100, from: 1, to: 4, path: "desk" },
  { cohort: "r126", rate: 126, from: 5, to: 7, path: "desk" },
  { cohort: "r150", rate: 150, from: 8, to: 10, path: "desk" },
  { cohort: "r200", rate: 200, from: 11, to: 13, path: "desk" },
  { cohort: "r300", rate: 300, from: 14, to: 16, path: "desk" },
];
export const COHORTS = TIERS.map((t) => t.cohort);
export const COHORT_RE = TIERS.map((t) => t.cohort).sort((a, b) => b.length - a.length).join("|");
function tierOf(family) {
  const f = Number(family);
  const t = Number.isInteger(f) ? TIERS.find((x) => f >= x.from && f <= x.to) : null;
  if (!t) throw new Error("family " + family + " is not 1..16");
  return t;
}
export const familyRate = (family) => tierOf(family).rate;
export const cohortOfFamily = (family) => tierOf(family).cohort;
export const pathOfFamily = (family) => tierOf(family).path;
export const PUBLIC_FAMILIES = TIERS.filter((t) => t.path === "public").flatMap((t) => Array.from({ length: t.to - t.from + 1 }, (_, i) => t.from + i));
export const cohortOfRate = (rate) => (TIERS.find((t) => t.rate === Number(rate)) || {}).cohort || null;
export const FEE_SPLIT_LINE = TIERS.map((t) => `${t.cohort}=${t.from}-${t.to}:${t.rate}@${t.path}`).join(" ");
export function feeTableMisses(families) {
  return (families || []).filter((f) => Number(f.fee_sompi_per_gram) !== familyRate(f.family)).map((f) => Number(f.family));
}
export const hopLine = (key, coin, nonce, family) => `hop ${key} ${coin.txid} ${coin.index} ${coin.amount} ${nonce} ${familyRate(family)}`;
// pre-run 14: the line kit21 sends the builder. billRate is the builder's own rate (fee = builder mass x billRate), chosen so
// fee / node mass equals the family's rate. The builder echoes billRate; kit21 checks the node rate it gives.
export const hopLineAt = (key, coin, nonce, billRate) => `hop ${key} ${coin.txid} ${coin.index} ${coin.amount} ${nonce} ${billRate}`;
export const NODE_PRICED = 1;
