export interface TopDriverEntry {
  rank: number;
  userId: string;
  displayName: string;
  totalEarnings: number;
  totalRuns: number;
  uniqueRoutes: number;
}

export interface TopDriversCycle {
  date: string;
  weekStart: string;
  weekEnd: string;
  seasonName: string;
  entries: TopDriverEntry[];
}

export interface PodiumCardProps {
  entry: TopDriverEntry;
  size: "lg" | "md" | "sm";
}
