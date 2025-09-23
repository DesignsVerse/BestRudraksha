/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.bestrudraksha.com',
          },
        ],
        destination: 'https://bestrudraksha.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    const isProd = process.env.NODE_ENV === 'production';
    if (!isProd) {
      return [];
    }
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
