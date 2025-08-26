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
};

module.exports = nextConfig;
