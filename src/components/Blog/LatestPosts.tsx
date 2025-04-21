import Link from "next/link";
import React from "react";
import Image from "next/image";

const LatestPosts = ({ blogs }) => {
  // Function to shuffle array randomly
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Shuffle blogs array and take first 3 items
  const shuffledBlogs = shuffleArray(blogs).slice(0, 3);

  return (
    <div className="shadow-1 bg-white rounded-xl mt-7.5">
      <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
        <h2 className="font-medium text-lg text-dark">Recent Posts</h2>
      </div>

      <div className="p-4 sm:p-6">
  <div className="flex flex-col gap-6">
    {shuffledBlogs.map((blog, key) => (
      <div className="flex items-center gap-4" key={key}>
        <Link
          href={`/blog/${blog.slug}`} // Dynamic URL using blog.slug
          className="max-w-[110px] w-full rounded-[10px] overflow-hidden"
        >
          <Image
            src={blog.img}
            alt={blog.title} // Use blog.title for better accessibility
            className="rounded-[10px] w-full"
            width={110}
            height={80}
          />
        </Link>

        <div>
          <h3 className="text-dark leading-[22px] ease-out duration-200 mb-1.5 hover:text-blue">
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </h3>

          <span className="flex items-center gap-3">
            <a
              href="#" // Consider linking to a date archive or removing href if not needed
              className="text-custom-xs ease-out duration-200 hover:text-blue"
            >
              {blog.date}
            </a>

            <span className="block w-px h-4 bg-gray-4"></span>

            <a
              href="#" // Consider linking to a views-related page or removing href
              className="text-custom-xs ease-out duration-200 hover:text-blue"
            >
              {blog.views}k Views
            </a>
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default LatestPosts;