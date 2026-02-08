/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bestrudraksha.com',
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
    additionalSitemaps: [
      'https://bestrudraksha.com/sitemap-products.xml',
      'https://bestrudraksha.com/sitemap-categories.xml',
      'https://bestrudraksha.com/sitemap-blog.xml',
    ],
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