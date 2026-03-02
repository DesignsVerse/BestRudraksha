/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // NOTE: This repo uses Next.js App Router `src/app/sitemap.ts` + `src/app/robots.ts`.
  // Keeping this config file is harmless, but it should match the canonical domain.
  siteUrl: process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bestrudraksha.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/admin/*',
    '/api/*',
    '/checkout',
    '/my-account',
    '/signin',
    '/signup',
    '/payment-success',
    '/payment-failed'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/checkout',
          '/my-account',
          '/signin',
          '/signup',
          '/payment-success',
          '/payment-failed',
          '/*?*', // Disallow URLs with query parameters
        ],
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on page type
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/product/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/category/') || path.startsWith('/shop')) {
      priority = 0.9;
      changefreq = 'daily';
    } else if (path.startsWith('/blog/')) {
      priority = 0.6;
      changefreq = 'monthly';
    } else if (['/about', '/contact', '/faq'].includes(path)) {
      priority = 0.5;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};