import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { VALID_LOCALES } from './lib/locales';

export default createMiddleware({
  // A list of all locales that are supported
  locales: VALID_LOCALES,

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Always show the locale prefix (never hide default locale)
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|fr|de|it|pt|ja|zh|ar)/:path*']
};