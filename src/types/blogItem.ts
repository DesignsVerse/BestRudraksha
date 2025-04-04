export type BlogItem = {
  id: number;
  slug: string;
  date: string;
  views: number;
  title: string;
  img: string;
  content: string[]; // Array of paragraphs for the details page
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  quote: string; // For the quote section in the details page
};