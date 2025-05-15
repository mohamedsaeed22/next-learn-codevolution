import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const reqHeaders = new Headers(req.headers);
  const userAgent = reqHeaders.get("user-agent");
  const theme = req.cookies.get("theme");
  console.log(theme);
  return new Response(`<h1>profile data for ${userAgent}</h1>`, {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
