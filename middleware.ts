import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'hi'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // or 'always' depending on preference
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
