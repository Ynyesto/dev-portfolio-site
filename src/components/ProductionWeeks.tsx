"use client";

import { useEffect, useState } from "react";

const FIRST_BATCH_DATE = Date.UTC(2025, 8, 22);
const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;

function getProductionWeek() {
  return Math.max(1, Math.floor((Date.now() - FIRST_BATCH_DATE) / WEEK_IN_MS) + 1);
}

export function ProductionWeeks() {
  const [week, setWeek] = useState<number | null>(null);

  useEffect(() => {
    setWeek(getProductionWeek());
  }, []);

  // Reserve the exact width of "42 weeks and counting" (21 monospace chars)
  // while waiting for hydration, then flow naturally so spacing stays even.
  return week === null ? (
    <span aria-hidden className="inline-block min-w-[21ch]">
      {"\u00a0"}
    </span>
  ) : (
    <span>{`${week} weeks and counting`}</span>
  );
}
