import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/';
  const isAuthPath = path === '/auth/login' || path === '/auth/register';

  if(isAuthPath && token) {
    return NextResponse.redirect(
      new URL('/dashboard', request.nextUrl)
    )
  }

  if(!isPublicPath && !isAuthPath && !token) {
    return NextResponse.redirect(
      new URL('/auth/login', request.nextUrl)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/auth/register',
    '/auth/login',
    '/dashboard',
    '/dashboard/docs',
    '/dashboard/settings'
  ]
}