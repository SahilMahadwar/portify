import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /examples (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|examples/|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.portify.site, demo.localhost:3000)
  const hostname = req.headers.get("host") || "demo.portify.site";

  console.log("Hostname " + hostname);

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = url.pathname;

  console.log("path " + path);

  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? hostname.replace(`.portify.site`, "")
      : hostname.replace(`.localhost:3001`, "");

  console.log("currentHost " + currentHost);

  console.log(
    NextResponse.rewrite(new URL(`/_sites/${currentHost}${path}`, req.url))
  );

  // rewrite everything else to `/_sites/[site] dynamic route
  return NextResponse.rewrite(
    new URL(`/_sites/${currentHost}${path}`, req.url)
  );
}
