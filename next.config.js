const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // No i18n property here
};

module.exports = withNextIntl(nextConfig);
