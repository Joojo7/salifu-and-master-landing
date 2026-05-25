// Weekly top-driver standings. Add a new entry per cycle. The `date` key is the
// cycle's end date in ISO `YYYY-MM-DD` (this matches the URL segment
// `/[locale]/top-mates/[date]`).
//
// Data is a static snapshot, pulled once from `leaderboard_totals` in prod and
// committed here. Refresh by re-running the aggregation query and updating the
// matching entry.

import type { TopMatesCycle } from "@/types/top-mates";

const CYCLES: Record<string, TopMatesCycle> = {
  "2026-05-23": {
    date: "2026-05-23",
    weekStart: "2026-05-17",
    weekEnd: "2026-05-23",
    seasonName: "Launch Week",
    entries: [
      {
        rank: 1,
        userId: "26917829-f372-4025-91cd-2c108f659bac",
        displayName: "Smoke",
        totalEarnings: 12489,
        totalRuns: 29,
        uniqueRoutes: 6,
      },
      {
        rank: 2,
        userId: "dc52bfe8-23d2-45f5-b4e8-7eb1cb12a5e9",
        displayName: "cosmic_m",
        totalEarnings: 11757,
        totalRuns: 16,
        uniqueRoutes: 6,
      },
      {
        rank: 3,
        userId: "e2070164-a73e-4d6e-b236-6d5f8752f06e",
        displayName: "Crouching-tiger",
        totalEarnings: 8464,
        totalRuns: 10,
        uniqueRoutes: 5,
      },
      {
        rank: 4,
        userId: "e272a2c1-04d5-4892-813d-1f374db265cb",
        displayName: "Runner⚡️",
        totalEarnings: 8118,
        totalRuns: 21,
        uniqueRoutes: 6,
      },
      {
        rank: 5,
        userId: "d003c12c-9432-4cac-8314-48741acb92fa",
        displayName: "prior-hookworm",
        totalEarnings: 7045,
        totalRuns: 13,
        uniqueRoutes: 6,
      },
    ],
  },
};

export function getTopMatesCycle(date: string): TopMatesCycle | null {
  return CYCLES[date] ?? null;
}

export function getAllTopMateDates(): string[] {
  return Object.keys(CYCLES);
}
