"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import shopData from "@/components/Shop/shopData";
import { Product } from "@/types/product";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Newsletter from "@/components/Common/Newsletter";
import RecentlyViewdItems from "@/components/ShopDetails/RecentlyViewd";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const metadata: Metadata = {
  title: "Rudraksha Details | BestRudraksha.com - Asli Rudraksha India",
  description:
    "BestRudraksha.com pe asli Rudraksha beads aur malas ke details dekhein. India ke liye authentic, certified Rudraksha online kharidari!",
  keywords: [
    "Rudraksha details",
    "asli Rudraksha",
    "Rudraksha mala",
    "buy Rudraksha online India",
    "certified Rudraksha",
    "Rudraksha beads",
    "spiritual products India",
  ],
  authors: [{ name: "BestRudraksha Team", url: "https://bestrudraksha.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Rudraksha Details | BestRudraksha.com",
    description:
      "India ka trusted Rudraksha store! BestRudraksha.com se asli Rudraksha beads ke details janiye aur kharido.",
    url: "https://bestrudraksha.com/shop-details",
    siteName: "BestRudraksha.com",
    images: [
      {
        url: "https://bestrudraksha.com/images/product-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asli Rudraksha Details",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudraksha Details | BestRudraksha.com",
    description:
      "Janiye asli Rudraksha ke baare mein BestRudraksha.com se. India ke liye authentic products!",
    images: ["https://bestrudraksha.com/images/product-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://bestrudraksha.com/shop-details",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
  },
};

const ProductCard = ({ product, onToggleWishlist }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleAddToCartLocal = () => {
    dispatch(
      addItemToCart({
        ...product,
        quantity,
        selectedSize: selectedSize.name,
        price: selectedSize.price,
        discountedPrice: selectedSize.discountedPrice,
      })
    );
    toast.success(`${product.title} (${selectedSize.name}) added to cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleToggleWishlist = () => {
    dispatch(
      addItemToWishlist({ ...product, status: "available", quantity: 1 })
    );
    setIsWishlisted(!isWishlisted);
    onToggleWishlist(product, !isWishlisted);
    toast.info(
      isWishlisted
        ? "Removed from wishlist"
        : `${product.title} added to wishlist!`,
      { position: "top-right", autoClose: 2000 }
    );
  };

  return (
    <div className="max-w-[539px] w-full font-sans">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl md:text-3xl text-[#800000] tracking-tight">
          {product.title || "Rudraks Premium Product"}
        </h2>
      </div>

      <div className="flex flex-wrap items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  className="fill-yellow"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 13.5l-5.5 3 1.5-6-5-4.5h6L9 0l2.5 5.5h6l-5 4.5 1.5 6z" />
                </svg>
              ))}
          </div>
          <span className="text-gray-600 text-sm">
            ({product.reviews || 5})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green rounded-full"></span>
          <span className="text-green font-medium">In Stock</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-semibold text-[#800000]">
            ₹{selectedSize.price.toLocaleString("en-IN")}
            {selectedSize.name !== "Regular" && (
              <span className="text-sm text-gray-500 ml-2">
                ({selectedSize.name})
              </span>
            )}
          </h3>
          {selectedSize.discountedPrice &&
            selectedSize.discountedPrice !== selectedSize.price && (
              <span className="text-gray-500 line-through">
                ₹{selectedSize.discountedPrice.toLocaleString("en-IN")}
              </span>
            )}
        </div>
      </div>

      <div style={{ marginBottom: "1rem", color: "#374151" }}>
        <span style={{ fontWeight: "bold", color: "#000000" }}>Origin:</span>{" "}
        <span style={{ color: "#000000" }}>Nepali</span> <br />
        <span style={{ fontWeight: "bold", color: "#000000" }}>
          Description:
        </span>{" "}
        <span style={{ color: "#000000" }}>{product.description}</span>
      </div>

      <div className="mb-6">
        <div className="flex flex-col gap-4">
          <div>
            <h4
              style={{ fontWeight: "bold", color: "#000000" }}
              className="text-md font-medium text-gray-700"
            >
              Size
            </h4>
            <div className="flex gap-2 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size.name}
                  type="button"
                  onClick={() => handleSizeChange(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize.name === size.name
                      ? "bg-gray-200 border-gray-400"
                      : "bg-white border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              type="button"
              aria-label="Decrease quantity"
              className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              <svg
                className="fill-gray-700"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="9" width="12" height="2" />
              </svg>
            </button>
            <span className="w-16 h-12 flex items-center justify-center text-lg font-medium">
              {quantity}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={() => setQuantity(quantity + 1)}
            >
              <svg
                className="fill-gray-700"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="9" y="4" width="2" height="12" />
                <rect x="4" y="9" width="12" height="2" />
              </svg>
            </button>
          </div>

          <button
            type="button"
            onClick={handleAddToCartLocal}
            className="bg-[#800000] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Add to Cart
          </button>

          <button
            type="button"
            onClick={handleToggleWishlist}
            className={`w-12 h-12 flex items-center justify-center rounded-lg border transition-colors duration-200 ${
              isWishlisted
                ? "bg-[#800000] text-white border-transparent"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      </form>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          onClick={handleAddToCartLocal}
          className="w-full sm:w-auto bg-[#800000] text-white font-semibold py-3 px-40 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

const ShopDetails = ({ params }: PageProps) => {
  const router = useRouter();
  const { slug } = React.use(params);
  const { openPreviewModal } = usePreviewSlider();
  const productFromStorage = useAppSelector(
    (state) => state.productDetailsReducer.value
  );

  const [previewImg, setPreviewImg] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("tabOne");

  const productFromData = shopData.find((item) => item.slug === slug);
  const product: Product | null = productFromData || productFromStorage;

  if (!product || !product.title) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium text-gray-900">Product not found!</p>
      </div>
    );
  }

  const handleToggleWishlist = (product: Product, isWishlisted: boolean) => {};

  const handlePreviewSlider = () => {
    openPreviewModal();
  };

  return (
    <>
      <Breadcrumb title="Rudraksha Details" pages={["shop-details"]} />

      <section className="bg-[#FFFAF5] overflow-hidden relative pb-20">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
            <div className="lg:max-w-[550px] w-full">
              <div className="lg:min-h-[250px] bg-[#D8CFC2] rounded-xl shadow-lg bg-gray-100 relative flex items-center justify-center overflow-hidden">
                <button
                  onClick={handlePreviewSlider}
                  aria-label="Zoom image"
                  className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-900 hover:text-indigo-600 transition-all duration-200 absolute top-6 right-6 z-50"
                >
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15 0H7v2h8v8h2V2c0-1.1-.9-2-2-2zM2 7H0v8c0 1.1.9 2 2 2h8v-2H2V7zm13 8h2v-2h-2v2zm-8-8H5v2h2V7z" />
                  </svg>
                </button>
                {product.imgs?.previews && (
                  <Image
                    src={product.imgs.previews[previewImg]}
                    alt={product.title}
                    width={300}
                    height={300}
                    priority
                    className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-6">
                {product.imgs?.thumbnails?.map((item, key) => (
                  <button
                    onClick={() => setPreviewImg(key)}
                    key={key}
                    className={`flex items-center justify-center bg-[#D8CFC2] w-16 h-16 rounded-lg bg-gray-100 shadow-md overflow-hidden transition-all duration-200 ${
                      key === previewImg
                        ? "border-2 border-indigo-600"
                        : "border-2 border-transparent hover:border-indigo-300"
                    }`}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={item}
                      alt="thumbnail"
                      className="object-cover bg-[#D8CFC2]"
                    />
                  </button>
                ))}
              </div>
            </div>

            <ProductCard
              product={product}
              onToggleWishlist={handleToggleWishlist}
            />
          </div>
        </div>
      </section>
      <RecentlyViewdItems />
      <Newsletter />
    </>
  );
};

export default ShopDetails;