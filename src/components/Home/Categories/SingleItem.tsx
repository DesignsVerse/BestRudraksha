// SingleItem.tsx
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types/category"; // This should now work

interface SingleItemProps {
  item: Category;
}

const SingleItem = ({ item }: SingleItemProps) => {
  return (
    <Link
      href={item.link}
      className="group flex flex-col items-center w-full max-w-[200px] transition-all duration-300"
    >
      <div className="w-full aspect-square bg-[#800000] bg-opacity-5 rounded-md flex items-center justify-center mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <Image
          src={item.img}
          alt={item.title}
          width={180}
          height={180}
          className="object-contain w-[100%] h-[100%]"
          priority={false}
        />
      </div>

      <h3 className="font-medium text-center text-gray-900 bg-gradient-to-r from-[#800000] to-[#800000] bg-[length:0px_2px] bg-no-repeat bg-bottom transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
        {item.title}
      </h3>
    </Link>
  );
};

export default SingleItem;