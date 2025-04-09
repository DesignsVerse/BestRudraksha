export type Product = {
  title: string;
  reviews: number;
  price: number; // Optional ab, sizes pe depend karega
  slug: string;
  sizes: {
    name: string;
    price: number;
    discountedPrice?: number;
    // any other size-specific fields
  }[];
  img: string;
  description:string,
  discountedPrice: number;
  images: string[];
  id: number;
  imgs: {  // Remove the ? to make it required
    thumbnails: string[];
    previews: string[];
  };
};