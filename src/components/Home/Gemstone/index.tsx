"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Product } from "@/types/product";
import shopData from "@/components/Shop/shopData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { toast } from "react-toastify"; // Added for toast notifications
import { useCartModalContext } from "@/app/context/CartSidebarModalContext"; // Added for cart sidebar

// Custom Arrow Components for Slider
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#800000] text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-all"
    onClick={onClick}
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#800000] text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-all"
    onClick={onClick}
  >
    <ChevronRight className="w-6 h-6" />
  </button>
);

const Gemstone: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { openCartModal } = useCartModalContext(); // Added for cart sidebar
  // Filter gemstone products
  const gemstoneProducts: Product[] = shopData.slice(14, 19);

  // Handle Add to Cart
  const handleAddToCart = useCallback(
    (product: Product) => {
      const regularSize = product.sizes?.[0] || { price: 0, discountedPrice: 0 };
      dispatch(
        addItemToCart({
          id: product.id, // Convert string to number
          imgs: {
            previews: product.imgs.previews || [],
            thumbnails: product.imgs.previews || [], // Fallback to previews
          },
          title: product.title,
          slug: product.slug,
          price: regularSize.price,
          discountedPrice: regularSize.discountedPrice,
          quantity: 1,
        })
      );
      toast.success(`${product.title} added to cart!`, {
        position: "top-right",
        autoClose: 3000,
      });
      openCartModal();
    },
    [dispatch, openCartModal]
  );

  // Handle Add to Wishlist
  const handleAddToWishlist = useCallback(
    (product: Product) => {
      const regularSize = product.sizes?.[0] || { price: 0, discountedPrice: 0 };
      dispatch(
        addItemToWishlist({
          id:product.id, // Convert string to number
          title: product.title,
          imgs: {
            previews: product.imgs.previews || [],
            thumbnails: product.imgs.previews || [], // Fallback to previews
          },
          slug: product.slug,
          price: regularSize.price,
          discountedPrice: regularSize.discountedPrice,
          status: "available",
          quantity: 1,
        })
      );
      toast.info(`${product.title} added to wishlist!`, {
        position: "top-right",
        autoClose: 2000,
      });
    },
    [dispatch]
  );

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#FFFAF5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left side - Featured image (hidden on mobile) */}
          <div className="hidden lg:block lg:w-2/5 relative rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[3/4] w-full relative">
              <Image
                src="/images/hero/home-gemstone.png"
                alt="Find what's meant to be yours"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t flex items-end p-8">
                <div className="text-center w-full">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Find Gemstone what&apos;s meant to be yours
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Product slider */}
          <div className="w-full md:mt-16 lg:w-3/5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#800000]">
                Featured Products
              </h3>
              <Link
                href="/shop-filter/gemstones"
                className="text-[#800000] hover:underline font-medium"
              >
                VIEW ALL
              </Link>
            </div>

            <Slider {...sliderSettings} className="gemstone-slider">
              {gemstoneProducts.map((product) => {
                const regularSize = product.sizes?.[0] || { price: 0, discountedPrice: 0 };
                const discountPercentage = regularSize.discountedPrice
                  ? Math.round((1 - regularSize.discountedPrice / regularSize.price) * 100)
                  : 0;

                return (
                  <div key={product.id} className="px-2">
                    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
                      <div className="relative aspect-square flex items-center justify-center bg-gray-100">
                        <Image
                          src={product.imgs?.previews?.[0] || "/images/placeholder.png"}
                          alt={product.title}
                          width={300}
                          height={300}
                          className="object-contain max-h-[80%] max-w-[80%]"
                        />
                        {discountPercentage > 0 && (
                          <div className="absolute top-3 right-3 bg-[#800000] text-white text-xs font-bold px-2 py-1 rounded">
                            {discountPercentage}% OFF
                          </div>
                        )}
                        {/* Action Buttons */}
                        <div className="absolute left-3 top-3 flex flex-col gap-2">
                          <button
                            onClick={() => handleAddToWishlist(product)}
                            className="p-2 bg-white rounded-full shadow-md"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.74949 2.94946C2.6435 3.45502 1.83325 4.65749 1.83325 6.0914C1.83325 7.55633 2.43273 8.68549 3.29211 9.65318C4.0004 10.4507 4.85781 11.1118 5.694 11.7564C5.89261 11.9095 6.09002 12.0617 6.28395 12.2146C6.63464 12.491 6.94747 12.7337 7.24899 12.9099C7.55068 13.0862 7.79352 13.1667 7.99992 13.1667C8.20632 13.1667 8.44916 13.0862 8.75085 12.9099C9.05237 12.7337 9.3652 12.491 9.71589 12.2146C9.90982 12.0617 10.1072 11.9095 10.3058 11.7564C11.142 11.1118 11.9994 10.4507 12.7077 9.65318C13.5671 8.68549 14.1666 7.55633 14.1666 6.0914C14.1666 4.65749 13.3563 3.45502 12.2503 2.94946C11.1759 2.45832 9.73214 2.58839 8.36016 4.01382C8.2659 4.11175 8.13584 4.16709 7.99992 4.16709C7.864 4.16709 7.73393 4.11175 7.63967 4.01382C6.26769 2.58839 4.82396 2.45832 3.74949 2.94946ZM7.99992 2.97255C6.45855 1.5935 4.73256 1.40058 3.33376 2.03998C1.85639 2.71528 0.833252 4.28336 0.833252 6.0914C0.833252 7.86842 1.57358 9.22404 2.5444 10.3172C3.32183 11.1926 4.2734 11.9253 5.1138 12.5724C5.30431 12.7191 5.48911 12.8614 5.66486 12.9999C6.00636 13.2691 6.37295 13.5562 6.74447 13.7733C7.11582 13.9903 7.53965 14.1667 7.99992 14.1667C8.46018 14.1667 8.88401 13.9903 9.25537 13.7733C9.62689 13.5562 9.99348 13.2691 10.335 12.9999C10.5107 12.8614 10.6955 12.7191 10.886 12.5724C11.7264 11.9253 12.678 11.1926 13.4554 10.3172C14.4263 9.22404 15.1666 7.86842 15.1666 6.0914C15.1666 4.28336 14.1434 2.71528 12.6661 2.03998C11.2673 1.40058 9.54129 1.5935 7.99992 2.97255Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                        <h4 className="font-medium text-gray-800 hover:text-[#800000] mb-2 line-clamp-2">
                          <Link href={`/shop/${product.slug}`}>
                            {product.title}
                          </Link>
                        </h4>

                        <div className="mt-auto">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {Array(5)
                                .fill(0)
                                .map((_, index) => (
                                  <Image
                                    key={index}
                                    src="/images/icons/icon-star.svg"
                                    alt="star"
                                    width={16}
                                    height={16}
                                    className="text-yellow-400"
                                  />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              ({product.reviews || 0})
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            {regularSize.discountedPrice &&
                            regularSize.discountedPrice !== regularSize.price ? (
                              <>
                                <p className="text-lg font-bold text-[#800000]">
                                  ₹{regularSize.discountedPrice.toLocaleString("en-IN")}
                                </p>
                                <p className="text-sm text-gray-500 line-through">
                                  ₹{regularSize.price.toLocaleString("en-IN")}
                                </p>
                              </>
                            ) : (
                              <p className="text-lg font-bold text-[#800000]">
                                ₹{regularSize.price.toLocaleString("en-IN")}
                              </p>
                            )}
                          </div>

                          <button
                            onClick={() => handleAddToCart(product)}
                            className="mt-3 w-full py-2 bg-[#800000] text-white rounded-lg hover:bg-[#600000] transition-colors text-sm font-medium"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .gemstone-slider .slick-dots {
          bottom: -40px;
          padding: 0 16px;
        }
        .gemstone-slider .slick-dots li button:before {
          color: #800000;
          opacity: 0.5;
          font-size: 10px;
        }
        .gemstone-slider .slick-dots li.slick-active button:before {
          color: #800000;
          opacity: 1;
        }
        .gemstone-slider .slick-prev,
        .gemstone-slider .slick-next {
          z-index: 10;
        }
        @media (max-width: 640px) {
          .gemstone-slider .slick-prev {
            left: 8px;
          }
          .gemstone-slider .slick-next {
            right: 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default Gemstone;