import BlogDetailslug from '@/components/Blog/slug';
import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import blogData from '@/data/blogData.json';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params?.slug;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | BestRudraksha.com',
      description: 'Explore Rudraksha and gemstone blogs at BestRudraksha.com.',
      openGraph: {
        title: 'Blog Not Found | BestRudraksha.com',
        description: 'Explore Rudraksha and gemstone blogs at BestRudraksha.com.',
        url: 'https://bestrudraksha.com/blog',
        siteName: 'BestRudraksha.com',
        images: [
          {
            url: 'https://bestrudraksha.com/images/blog-og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Rudraksha Blogs and Spiritual Gyaan',
          },
        ],
        locale: 'en_IN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Blog Not Found | BestRudraksha.com',
        description: 'Explore Rudraksha and gemstone blogs at BestRudraksha.com.',
        images: ['https://bestrudraksha.com/images/blog-twitter-image.jpg'],
      },
    };
  }

  const blogTitle = blog.title;
  const blogDescription = blog.sections[0]?.content.slice(0, 160) || 'Discover the spiritual and healing benefits of Rudraksha and gemstones at BestRudraksha.com.';
  const blogImage = blog.img || 'https://bestrudraksha.com/images/blog-og-image.jpg';
  const canonicalUrl = `https://bestrudraksha.com/blog/${slug}`;

  return {
    title: `${blogTitle} | BestRudraksha.com - Spiritual Gyaan India`,
    description: blogDescription,
    keywords: [
      'Rudraksha blog',
      'Rudraksha benefits',
      'spiritual blogs India',
      'asli Rudraksha gyaan',
      'Rudraksha mala guide',
      'Rudraksha meditation',
      'spiritual gyaan',
      'best Rudraksha blog',
      'Rudraksha tips India',
      'spiritual practices',
      'rudraksha',
      'rudraksha benefits',
      'original rudraksha',
      '1 mukhi rudraksha',
      'rudraksha for health',
      'rudraksha for meditation',
      '5 mukhi rudraksha',
      'rudraksha for students',
      'rudraksha for success',
      'rudraksha bracelet',
      'rudraksha mala',
      'nepali rudraksha',
      'rudraksha price',
      'rudraksha types',
      'rudraksha for money',
      'rudraksha for love',
      'rudraksha for career',
      'ek mukhi rudraksha',
      'rudraksha wearing rules',
      'rudraksha side effects',
      'rudraksha for peace',
      'rudraksha beads',
      'buy rudraksha online',
      'rudraksha for zodiac signs',
      'best rudraksha for job',
      'rudraksha for stress relief',
      'rudraksha for energy',
      'how to wear rudraksha',
      'rudraksha mantra',
      'rudraksha astrology',
      'rudraksha bracelet for men',
      'rudraksha bracelet for women',
      'rudraksha in hindi',
      'rudraksha cleaning method',
      'rudraksha for anxiety',
      'real vs fake rudraksha',
      'rudraksha for blood pressure',
      'rudraksha for focus',
      'rudraksha for protection',
      'rudraksha for healing',
      'rudraksha for spirituality',
      'rudraksha for mental health',
      'rudraksha for students benefits',
      'rudraksha energize process',
      'rudraksha for daily use',
      'rudraksha for sleep',
      'rudraksha and chakras',
      'rudraksha and vastu',
      'rudraksha for negative energy',
      'rudraksha pehnne ke faayde',
      'rudraksha kya hota hai',
      'rudraksha mala kaise pehne',
      'rudraksha price in India',
      'rudraksha aur health',
      'rudraksha aur meditation',
      'best rudraksha for success',
      'rudraksha for love and peace',
      'rudraksha for career growth',
      'rudraksha for mental peace',
      'rudraksha benefits for anxiety',
      'original vs fake rudraksha',
      'rudraksha price check',
      'rudraksha for job promotion',
      'kaise pehne rudraksha',
      'rudraksha and spiritual growth',
      'rudraksha kaise saf karen',
      'rudraksha for blood pressure control',
      'rudraksha for positivity',
      'rudraksha healing process',
      'rudraksha for stress free life',
      'rudraksha for protection from negativity',
    ],
    authors: [{ name: 'BestRudraksha Team', url: 'https://bestrudraksha.com' }],
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    openGraph: {
      title: `${blogTitle} | BestRudraksha.com - Spiritual Gyaan`,
      description: blogDescription,
      url: canonicalUrl,
      siteName: 'BestRudraksha.com',
      images: [
        {
          url: blogImage,
          width: 1200,
          height: 630,
          alt: `${blogTitle} - Rudraksha and Spiritual Gyaan`,
        },
      ],
      locale: 'en_IN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blogTitle} | BestRudraksha.com`,
      description: blogDescription,
      images: [blogImage],
      site: '@BestRudraksha',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    other: {
      'geo.region': 'IN',
      'geo.placename': 'India',
      'geo.position': '20.5937;78.9629',
      'ICBM': '20.5937, 78.9629',
    },
  };
}

const BlogDetailsWithSidebar = async ({ params }: { params: { slug: string } }) => {
  const slug = params?.slug;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Structured Data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.sections[0]?.content.slice(0, 160) || 'Discover the spiritual and healing benefits of Rudraksha and gemstones at BestRudraksha.com.',
    image: blog.img || 'https://bestrudraksha.com/images/blog-og-image.jpg',
    url: `https://bestrudraksha.com/blog/${blog.slug}`,
    author: {
      '@type': 'Organization',
      name: 'BestRudraksha.com',
      url: 'https://bestrudraksha.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BestRudraksha.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bestrudraksha.com/logo.png',
      },
    },
    datePublished: blog.date || new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://bestrudraksha.com/blog/${blog.slug}`,
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogDetailslug blog={blog} />
    </div>
  );
};

export default BlogDetailsWithSidebar;