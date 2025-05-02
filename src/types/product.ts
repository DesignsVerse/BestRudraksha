export type Product = {
  id: number;
  title: string;
  slug: string;
  reviews: number;
  description: string;
  images: string[];
  sizes: { name: string; price: number; discountedPrice?: number }[];
  imgs: { thumbnails: string[]; previews: string[] };
  beejMantra:string;
  keyFeatures:string[];
  benefits:string[];
  detail:string;
};



// // types/product.ts
// export type CartItem = {
//   id: number;
//   title: string;
//   slug: string;
//   price: number;
//   discountedPrice: number;
//   quantity: number;
//   imgs?: string; // Change to img
// };

// export type WishListItem = {
//   id: number;
//   title: string;
//   slug: string; // Add slug
//   imgs?: string;
//   price: number;
//   discountedPrice?: number;
//   status: string;
//   quantity: number;
//   // Other fields as needed
// };