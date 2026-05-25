export interface TopMateEntry {
  rank: number;
  userId: string;
  displayName: string;
  totalEarnings: number;
  totalRuns: number;
  uniqueRoutes: number;
}

export interface TopMatesCycle {
  date: string;
  weekStart: string;
  weekEnd: string;
  seasonName: string;
  entries: TopMateEntry[];
}

export interface PodiumCardProps {
  entry: TopMateEntry;
  size: "lg" | "md" | "sm";
}
