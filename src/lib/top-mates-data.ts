// Weekly top-driver standings. Add a new entry per cycle. The `date` key is the
// cycle's end date in ISO `YYYY-MM-DD` (this matches the URL segment
// `/[locale]/top-mates/[date]`).
//
// Data is a static snapshot, pulled once from `leaderboard_totals` in prod and
// committed here. Refresh by re-running the aggregation query and updating the
// matching entry.

import type { TopMatesCycle } from "@/types/top-mates";

const CYCLES: Record<string, TopMatesCycle> = {
  "2026-06-06": {
    date: "2026-06-06",
    weekStart: "2026-05-31",
    weekEnd: "2026-06-06",
    seasonName: "Week of May 31",
    entries: [
      {
        rank: 1,
        userId: "f315a76c-e930-4726-a9cf-4a7b133d4eb9",
        displayName: "Sisi",
        totalEarnings: 34845,
        totalRuns: 77,
        uniqueRoutes: 10,
      },
      {
        rank: 2,
        userId: "e2070164-a73e-4d6e-b236-6d5f8752f06e",
        displayName: "Hidden-drygon",
        totalEarnings: 16655,
        totalRuns: 25,
        uniqueRoutes: 11,
      },
      {
        rank: 3,
        userId: "d0dd202e-3d47-4adf-8a8b-bfca061cdb6e",
        displayName: "academic-elephant",
        totalEarnings: 9229,
        totalRuns: 29,
        uniqueRoutes: 12,
      },
      {
        rank: 4,
        userId: "d18281ad-f589-4607-ab8b-3597d74a48a2",
        displayName: "Fairy",
        totalEarnings: 1335,
        totalRuns: 9,
        uniqueRoutes: 3,
      },
      {
        rank: 5,
        userId: "a8e0c9a2-f4f6-44a1-ab65-12b76d9650b6",
        displayName: "Paa Kwesi",
        totalEarnings: 935,
        totalRuns: 8,
        uniqueRoutes: 2,
      },
    ],
  },
  "2026-05-30": {
    date: "2026-05-30",
    weekStart: "2026-05-24",
    weekEnd: "2026-05-30",
    seasonName: "Week of May 24",
    entries: [
      {
        rank: 1,
        userId: "3172bf78-a924-4708-a1a8-3b9cc9724649",
        displayName: "thanos",
        totalEarnings: 14973,
        totalRuns: 42,
        uniqueRoutes: 10,
      },
      {
        rank: 2,
        userId: "85974f3c-7a56-4b0e-bba7-92585de064a9",
        displayName: "LordRa",
        totalEarnings: 14310,
        totalRuns: 39,
        uniqueRoutes: 9,
      },
      {
        rank: 3,
        userId: "26917829-f372-4025-91cd-2c108f659bac",
        displayName: "Smoke",
        totalEarnings: 10115,
        totalRuns: 19,
        uniqueRoutes: 4,
      },
      {
        rank: 4,
        userId: "f315a76c-e930-4726-a9cf-4a7b133d4eb9",
        displayName: "Sisi",
        totalEarnings: 5998,
        totalRuns: 20,
        uniqueRoutes: 5,
      },
      {
        rank: 5,
        userId: "a20323a0-cf0c-4612-a61d-9e33e42d81eb",
        displayName: "Barima",
        totalEarnings: 5409,
        totalRuns: 6,
        uniqueRoutes: 6,
      },
    ],
  },
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

// Newest first. ISO `YYYY-MM-DD` keys sort lexicographically the same as
// chronologically, so reverse-sort is correct.
export function getAllTopMatesCycles(): TopMatesCycle[] {
  return Object.keys(CYCLES)
    .sort()
    .reverse()
    .map((date) => CYCLES[date]);
}
