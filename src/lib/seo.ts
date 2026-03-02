// SEO configuration for BestRudraksha
// Note: In Next.js 13+ App Router, we use the built-in Metadata API instead of next-seo
import { getSiteUrl } from '@/lib/site';

// Product page SEO template
export const getProductSEO = (product: any) => ({
  title: `${product.title} - Original Certified | BestRudraksha.com`,
  description: `Buy authentic ${product.title} online. ${product.description?.substring(0, 150)}... Original certified Rudraksha with free shipping across India.`,
  canonical: `${getSiteUrl()}/shop/${product.slug}`,
  openGraph: {
    title: `${product.title} - Original Certified Rudraksha`,
    description: `Buy authentic ${product.title} online. Original certified with benefits and free shipping.`,
    url: `${getSiteUrl()}/shop/${product.slug}`,
    type: 'product',
    images: [
      {
        url: product.images?.[0] ? `${getSiteUrl()}${product.images[0]}` : `${getSiteUrl()}/images/default-product.jpg`,
        width: 800,
        height: 600,
        alt: product.title,
      },
    ],
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: `${product.title}, ${product.title} benefits, ${product.title} price, ${product.title} online, buy ${product.title}, original ${product.title}, certified ${product.title}, authentic ${product.title}, genuine ${product.title}, ${product.title} india, ${product.title} delivery, ${product.title} shipping, ${product.title} store, ${product.title} shop, ${product.title} seller, ${product.title} dealer, ${product.title} supplier, ${product.title} manufacturer, ${product.title} exporter, ${product.title} wholesale, ${product.title} retail`
    },
    {
      property: 'product:price:amount',
      content: product.discountedPrice?.toString() || product.price?.toString()
    },
    {
      property: 'product:price:currency',
      content: 'INR'
    },
    {
      property: 'product:availability',
      content: 'in stock'
    },
    {
      property: 'product:condition',
      content: 'new'
    },
    {
      property: 'product:brand',
      content: 'BestRudraksha'
    }
  ]
});

// Category page SEO template
export const getCategorySEO = (category: string, description?: string) => ({
  title: `${category} - Original Certified Collection | BestRudraksha.com`,
  description: description || `Shop authentic ${category} online. Original certified collection with benefits guide and free shipping across India. Best prices guaranteed.`,
  canonical: `${getSiteUrl()}/shop-filter/${category.toLowerCase().replace(/\s+/g, '-')}`,
  openGraph: {
    title: `${category} Collection - Original Certified`,
    description: `Shop authentic ${category} online. Original certified collection with free shipping.`,
    url: `${getSiteUrl()}/shop-filter/${category.toLowerCase().replace(/\s+/g, '-')}`,
    type: 'website',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: `${category}, ${category} collection, ${category} online, buy ${category}, original ${category}, certified ${category}, authentic ${category}, ${category} benefits, ${category} price, ${category} india, ${category} shop, ${category} store, ${category} dealer, ${category} supplier`
    }
  ]
});

// Blog post SEO template
export const getBlogSEO = (post: any) => ({
  title: `${post.title} | BestRudraksha Blog`,
  description: post.excerpt || `${post.content?.substring(0, 150)}...`,
  canonical: `${getSiteUrl()}/blog/${post.slug}`,
  openGraph: {
    title: post.title,
    description: post.excerpt || `${post.content?.substring(0, 150)}...`,
    url: `${getSiteUrl()}/blog/${post.slug}`,
    type: 'article',
    article: {
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ['BestRudraksha'],
      tags: post.tags || [],
    },
    images: [
      {
        url: post.featuredImage
          ? (post.featuredImage.startsWith('http') ? post.featuredImage : `${getSiteUrl()}${post.featuredImage}`)
          : `${getSiteUrl()}/images/blog-default.jpg`,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ],
  },
});

// Structured data for blog posts (BlogPosting)
export const getBlogStructuredData = (post: any) => {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.img
    ? `${siteUrl}${post.img}`
    : (post.featuredImage
        ? (post.featuredImage.startsWith('http') ? post.featuredImage : `${siteUrl}${post.featuredImage}`)
        : `${siteUrl}/images/blog-default.jpg`);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: post.title,
    description: post.excerpt || post.description || undefined,
    image: [imageUrl],
    datePublished: post.date || post.publishedAt || undefined,
    dateModified: post.updatedAt || post.date || undefined,
    author: {
      '@type': 'Organization',
      name: 'BestRudraksha.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BestRudraksha.com',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo/logo.png`,
      },
    },
  };
};

// Structured data for products
export const getProductStructuredData = (product: any) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.title,
  description: product.description,
  image: (product.images || []).map((img: string) =>
    img?.startsWith('http') ? img : `${getSiteUrl()}${img}`
  ),
  brand: {
    '@type': 'Brand',
    name: 'BestRudraksha'
  },
  offers: {
    '@type': 'Offer',
    price: product.discountedPrice || product.price,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'BestRudraksha.com'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150'
  },
  category: 'Spiritual & Religious Items',
  sku: product.id?.toString(),
  gtin: product.sku || product.id?.toString()
});

// Organization structured data
export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BestRudraksha.com',
  url: getSiteUrl(),
  logo: `${getSiteUrl()}/images/logo/logo.png`,
  description: 'Leading online store for authentic, certified Rudraksha beads and spiritual items in India.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '69/1, Near Harsiddhi Mandir, Yogipura',
    addressLocality: 'Ujjain',
    addressRegion: 'Madhya Pradesh',
    postalCode: '456006',
    addressCountry: 'IN'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9153164444',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi']
  },
  sameAs: [
    'https://www.facebook.com/bestrudraksha',
    'https://www.instagram.com/bestrudraksha',
    'https://www.twitter.com/bestrudraksha'
  ]
};

// Website structured data
export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BestRudraksha.com',
  url: getSiteUrl(),
  description: 'Buy authentic, certified Rudraksha beads online. Original 1-21 Mukhi Rudraksha, Rudraksha Mala, Gemstones.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${getSiteUrl()}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};