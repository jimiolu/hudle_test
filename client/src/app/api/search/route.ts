import { NextResponse } from "next/server";

const MOCK_DATA = [
  "Nigeria Census 2023",
  "Agriculture in Kenya",
  "COVID Data Africa",
  "Population by Region",
  "Sustainable Energy Report",
  "Africa Language LLM Models",
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.toLowerCase() || "";

  const filtered = MOCK_DATA.filter((item) =>
    item.toLowerCase().includes(q)
  ).slice(0, 5);

  return NextResponse.json({ suggestions: filtered });
}
