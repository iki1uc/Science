// /js/knopf.engine.js

import { tune } from './axes.core.js';
import { scanParam } from './scan.core.js';

export function triggerKnopf(name, sharp = 1.0) {

  // 1) Begriff scharf/unscharf skalieren
  const tuning = tune(name, sharp);

  // 2) Begriff im Logikraum scannen
  const scan = scanParam(name);

  // 3) Ergebnis erzeugen
  return {
    knopf: name,
    sharp,
    scan,
    axes: tuning.axes,
    result: {
      impact: scan.grade * sharp,
      mode: scan.ableitung,
      axisCount: tuning.axes.length
    }
  };
}

