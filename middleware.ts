import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("request.url.pathname--", request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/b")) {
    console.log("request.nextUrl.pathname", request.nextUrl.pathname);
    const isAuth = false;
    if (!isAuth && request.nextUrl.pathname === "/b/new") {
      return NextResponse.redirect(new URL("/b/login", request.url));
    }
    // return NextResponse.redirect(
    //   new URL("/myservice/public-service", request.url)
    // );
  }
}

// export const config = {
//   matcher: ["/categoriesx/:path*", "/home/:path*"],
// };
