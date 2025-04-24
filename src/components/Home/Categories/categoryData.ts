// src/components/Home/Categories/categoryData.ts
import { Category } from "@/types/category"; // Adjust path based on your structure

const data: Category[] = [
  {
    title: "Rudraksha",
    id: 1,
    img: "/images/home/Categories/1.png",
    link: "/shop-filter/1-14-mukhi-rudraksha",
    
  },
  {
    title: "Gemstones",
    id: 2,
    img: "/images/home/Categories/2.png",
    link: "/shop-filter/gemstones",
  },
  {
    title: "Special Rudraksha",
    id: 3,
    img: "/images/home/Categories/3.png",
    link: "/shop-filter/special-rudraksha",
  },
  {
    title: "Rudraksha Mala",
    id: 4,
    img: "/images/home/Categories/4.png",
    link: "/shop-filter/mala-and-yantra",
  },
];

export default data;