import { redirect } from "next/navigation";
import { getAllTopMateDates } from "@/lib/top-mates-data";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TopMatesIndex({ params }: Props) {
  const { locale } = await params;
  // Latest cycle is always the largest ISO date when sorted lexicographically.
  const latest = [...getAllTopMateDates()].sort().reverse()[0];
  redirect(`/${locale}/top-mates/${latest}`);
}
