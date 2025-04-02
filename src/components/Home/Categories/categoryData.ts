// src/components/Home/Categories/categoryData.ts
import { Category } from "@/types/category"; // Adjust path based on your structure

const data: Category[] = [
  {
    title: "Rudraksha",
    id: 1,
    img: "/images/categories/rudraksha.jpg",
    link: "/shop/Rudraksha",
  },
  {
    title: "Gemstones",
    id: 2,
    img: "/images/categories/gemstone.jpg",
    link: "/shop/Gemstones",
  },
  {
    title: "Special Rudraksha",
    id: 3,
    img: "/images/categories/special-rudraksha.jpg",
    link: "/shop/Special Rudraksha",
  },
  {
    title: "Rudraksha Mala",
    id: 4,
    img: "/images/categories/rudraksha-mala.jpg",
    link: "/shop/Rudraksha Mala",
  },
];

export default data;