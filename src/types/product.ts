export type Product = {
  title: string;
  reviews: number;
  slug: string;
  price: number;
  discountedPrice: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
