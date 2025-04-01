export type Product = {
  title: string;
  reviews: number;
  slug: string;
  price: number;
  img:string;
  discountedPrice: number;
  images:string[];
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
