import ShopDetails from '@/components/Shop/slug';
import React from 'react';
import shopData from '@/components/Shop/shopData';
import { Metadata } from 'next';
import { getProductSEO, getProductStructuredData } from '@/lib/seo';
import { getSiteUrl } from '@/lib/site';
import { HIDE_GEMSTONES, isGemstoneProduct } from '@/lib/catalog';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = shopData.find((item) => item.slug === slug);
  const siteUrl = getSiteUrl();

  if (!product) {
    return {
      title: 'Product Not Found | BestRudraksha.com',
      description: 'The requested product could not be found.',
    };
  }

  if (HIDE_GEMSTONES && isGemstoneProduct(product)) {
    return {
      title: 'Product Not Found | BestRudraksha.com',
      description: 'The requested product could not be found.',
      robots: { index: false, follow: false },
    };
  }

  const seoData = getProductSEO(product);
  const selectedSize = product.sizes?.[0];
  const price = selectedSize?.discountedPrice || selectedSize?.price || 0;
  const url = `${siteUrl}/shop/${slug}`;

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.additionalMetaTags?.find(tag => tag.name === 'keywords')?.content as string,
    openGraph: {
      title: seoData.openGraph?.title as string,
      description: seoData.openGraph?.description as string,
      url,
      siteName: 'BestRudraksha.com',
      images: seoData.openGraph?.images || [],
      type: 'product',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
      images: (seoData.openGraph?.images || []).map((img: any) => img?.url).filter(Boolean) as string[],
    },
    alternates: {
      canonical: url,
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

  if (!product) {
    notFound();
  }
  if (HIDE_GEMSTONES && isGemstoneProduct(product)) {
    notFound();
  }

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
