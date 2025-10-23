/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/:locale(en|hi)/:path*',
        destination: '/:path*',
      },
    ];
  },
};

module.exports = nextConfig;