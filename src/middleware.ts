import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // access dashboard only if user has access_token
  if (!request.cookies.has("access_token")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard",
};
