// src/components/Home/Categories/categoryData.ts
import { Category } from "@/types/category"; // Adjust path based on your structure

const data: Category[] = [
  {
    title: "Televisions",
    id: 1,
    img: "/images/categories/categories-01.png",
    link: "/shop/televisions",
  },
  {
    title: "Laptop & PC",
    id: 2,
    img: "/images/categories/categories-02.png",
    link: "/shop/laptops-pcs",
  },
  {
    title: "Mobile & Tablets",
    id: 3,
    img: "/images/categories/categories-03.png",
    link: "/shop/mobiles-tablets",
  },
  {
    title: "Games & Videos",
    id: 4,
    img: "/images/categories/categories-04.png",
    link: "/shop/games-videos",
  },
  {
    title: "Games & Videos",
    id: 5,
    img: "/images/categories/categories-04.png",
    link: "/shop/games-videos-2",
  },
];

export default data;