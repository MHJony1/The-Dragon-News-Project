import { NextResponse } from 'next/server';

export function middleware(request) {
  const session = request.cookies.get('better-auth.session_token');
  const { pathname, origin } = request.nextUrl;

  const protectedRoutes = ['/career', '/news'];

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (!session && isProtectedRoute) {
    const callbackUrl = encodeURIComponent(pathname);

    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${callbackUrl}`, origin),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/career', '/news/:path*'],
};
