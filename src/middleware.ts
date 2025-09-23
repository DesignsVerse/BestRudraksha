import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const isLocalhost = host.startsWith("localhost") || host.startsWith("127.0.0.1");
  const isProd = process.env.NODE_ENV === "production";

  // Skip HTTPS redirect for localhost and in development
  if (!isProd || isLocalhost) {
    return NextResponse.next();
  }

  // Agar protocol http hai to redirect karo
  if (request.headers.get("x-forwarded-proto") === "http") {
    return NextResponse.redirect(
      `https://${host}${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
