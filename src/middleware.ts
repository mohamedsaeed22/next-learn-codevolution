import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const theme = req.cookies.get("theme");
  if (!theme) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("x-custom-header", "custom");

  return response;

  //   return NextResponse.redirect(new URL("/", req.url));
  //   if (req.nextUrl.pathname === "/profile") {
  // return NextResponse.redirect(new URL("/hello", req.url));
  //     return NextResponse.rewrite(new URL("/hello", req.url));
  //   }
}

// export const config = {
//   matcher: "/profile",
// };
