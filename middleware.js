import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Block direct access to "/" — only /lnt-island-cove-mahim should work
  if (pathname === '/') {
    return NextResponse.rewrite(new URL('/_not-found', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
