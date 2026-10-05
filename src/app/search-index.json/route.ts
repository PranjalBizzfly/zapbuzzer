import { buildPageIndex } from "@/lib/pageIndex";

// Generated once at build time; the search dialog fetches it on first open.
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildPageIndex());
}
