export type Product = {
  title: string;
  reviews: number;
  slug: string;
  price: number;
  img: string;
  discountedPrice: number;
  images: string[];
  id: number;
  imgs: {  // Remove the ? to make it required
    thumbnails: string[];
    previews: string[];
  };
};