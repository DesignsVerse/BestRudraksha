import ShopDetails from '@/components/Shop/slug';
import React from 'react';
import shopData from '@/components/Shop/shopData';
import { Metadata } from 'next';
import { getProductSEO, getProductStructuredData } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = shopData.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found | BestRudraksha.com',
      description: 'The requested product could not be found.',
    };
  }

  const seoData = getProductSEO(product);
  const selectedSize = product.sizes?.[0];
  const price = selectedSize?.discountedPrice || selectedSize?.price || 0;

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.additionalMetaTags?.find(tag => tag.name === 'keywords')?.content as string,
    openGraph: {
      title: seoData.openGraph?.title as string,
      description: seoData.openGraph?.description as string,
      url: `https://www.bestrudraksha.com/shop/${slug}`,
      siteName: 'BestRudraksha.com',
      images: seoData.openGraph?.images || [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
    },
    alternates: {
      canonical: `https://www.bestrudraksha.com/shop/${slug}`,
    },
    other: {
      'product:price:amount': price.toString(),
      'product:price:currency': 'INR',
      'product:availability': 'in stock',
      'product:condition': 'new',
      'product:brand': 'BestRudraksha',
    },
  };
}

const Shop = async ({ params }: PageProps) => {
  const { slug } = await params;
  const product = shopData.find((item) => item.slug === slug);
  const structuredData = product ? getProductStructuredData(product) : null;

  return (
    <>
      <ShopDetails params={params} />
      {/* Add structured data script */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </>
  );
};

export default Shop;
