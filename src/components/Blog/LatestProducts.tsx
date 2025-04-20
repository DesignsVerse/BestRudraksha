import React from "react";
import Image from "next/image";
import Link from "next/link";

const LatestProducts = ({ products = [] }) => {
  return (
    <div className="shadow-md bg-white rounded-xl mt-7.5">
      <div className="px-4 sm:px-6 py-4.5 border-b border-gray-300">
        <h2 className="font-medium text-lg text-gray-900">Latest Products</h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-6">
          {products.length === 0 ? (
            <p className="text-gray-500 text-sm">No products available.</p>
          ) : (
            products.slice(0, 3).map((product, index) => {
              // Derive regularSize similar to wishlist's SingleItem
              const regularSize = product.sizes?.[0] || {
                price: product.price,
                discountedPrice: product.discountedPrice,
              };

              return (
                <div className="flex items-center gap-4" key={product.id || index}>
                  <Link
                    href={`/shop/${product.slug || "product-" + index}`}
                    className="max-w-[90px] w-full rounded-[10px] overflow-hidden"
                    aria-label={`View ${product.title || "product"} details`}
                  >
                    <div className="flex items-center justify-center rounded-[10px] bg-gray-200 max-w-[90px] w-full h-[90px]">
                      <Image
                        src={product.imgs?.thumbnails?.[0] || "/images/placeholder.png"}
                        alt={product.title || "Product image"}
                        width={74}
                        height={74}
                        className="object-contain"
                      />
                    </div>
                  </Link>

                  <div>
                    <h3 className="font-medium text-gray-900 ease-out duration-200 hover:text-blue-600 mb-1.5">
                      <Link href={`/shop/${product.slug || "product-" + index}`}>
                        {product.title || "Untitled Product"}
                      </Link>
                    </h3>
                    <p className="text-gray-900 text-sm ">
                      {regularSize.discountedPrice &&
                        regularSize.discountedPrice !== regularSize.price && (
                          <span className="font-medium text-[#800000]">
                            ₹{regularSize.discountedPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                      <span className="line-through text-gray-500 ml-2 text-sm">
                        ₹{regularSize.price?.toLocaleString("en-IN") || "N/A"}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;