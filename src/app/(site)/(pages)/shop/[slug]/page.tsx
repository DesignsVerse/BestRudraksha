import ShopDetails from '@/components/Shop/slug';
import React from 'react';
import shopData from '@/components/Shop/shopData';

interface PageProps {
  params: Promise<{ slug: string }>;
}


const Shop = ({ params }: PageProps) => {
  return (
    <div>
      <ShopDetails params={params} />
    </div>
  );
};

export default Shop;
