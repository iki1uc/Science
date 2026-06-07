// 14 Basisachsen
export const AXIS_14 = [
  "time", "space", "flow", "state",
  "core", "mind", "body", "net",
  "error", "guard", "peak", "orbit",
  "in", "out"
];

// 48 Vollachsen (hier nur symbolisch erweitert)
export const AXIS_48 = AXIS_14.flatMap(a => [
  a + ":low",
  a + ":mid",
  a + ":high",
  a + ":meta"
]);

// Stellschraube: Begriff + Schärfe → Achsen-Skalierung
export function tune(term, sharp = 1.0) {
  return {
    term,
    sharp,                 // 0 = unscharf, 1 = scharf
    axes: AXIS_48.map(ax => ({
      axis: ax,
      weight: sharp        // hier erstmal global, später differenzierbar
    }))
  };
}

