import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/utils/auth";

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const redirectPath = new URL(request.url).pathname;

  if (!session.isAuthenticated) {
    return NextResponse.redirect(
      new URL(
        `/sign-in?redirect=${encodeURIComponent(redirectPath)}`,
        request.url,
      ),
    );
  }

  return NextResponse.next();
}

export const config = { matcher: ["/middleware-protected/:path*"] };
