export type Blog = {
  id: number;
  slug: string;
  date: string;
  views: number;
  title: string;
  productId: number | string; // ✅ Allow both types
  img: string;
  sections: { heading: string; content: string }[]; // Updated to sections array
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  quote: string; // For the quote section in the details page
};