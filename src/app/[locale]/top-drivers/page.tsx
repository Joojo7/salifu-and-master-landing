import { redirect } from "next/navigation";
import { getAllTopDriverDates } from "@/lib/top-drivers-data";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TopDriversIndex({ params }: Props) {
  const { locale } = await params;
  // Latest cycle is always the largest ISO date when sorted lexicographically.
  const latest = [...getAllTopDriverDates()].sort().reverse()[0];
  redirect(`/${locale}/top-drivers/${latest}`);
}
