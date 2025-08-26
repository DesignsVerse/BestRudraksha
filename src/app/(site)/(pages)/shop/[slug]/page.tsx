import ShopDetails from '@/components/Shop/slug';
import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import shopData from '@/components/Shop/shopData';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const product = shopData.find((p) => p.slug === slug);

  const title = product
    ? `${product.title} | Buy Original ${product.title.split(' ')[0]} - BestRudraksha`
    : `Rudraksha | BestRudraksha`;

  const description = product?.shortDesc ||
    'Buy certified Rudraksha beads and malas at BestRudraksha.com. Trusted store in India.';

  const canonical = `https://bestrudraksha.com/shop/${slug}`;

  const ogImage = product?.imgs?.previews?.[0]
    ? `https://bestrudraksha.com${product.imgs.previews[0]}`
    : 'https://bestrudraksha.com/images/shop-og-image.jpg';

  return {
    title,
    description,
    robots: 'index, follow',
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      siteName: 'BestRudraksha.com',
      type: 'product',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

const Shop = ({ params }: PageProps) => {
  return (
    <div>
      <ShopDetails params={params} />
    </div>
  );
};

export default Shop;
