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
import RecentlyViewdItems from "@/components/Shop/RecentlyViewd";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import RudrakshaComponent from "@/components/Shop/wearingguidline";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProductCard = ({ product, onToggleWishlist }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { openCartModal } = useCartModalContext();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  // Safely set default size or fallback
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || { name: "Regular", price: 0, discountedPrice: 0 }
  );
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  // If product or sizes is missing, render a fallback UI
  if (!product || !product.title) {
    return (
      <div className="max-w-[539px] w-full font-sans">
        <p className="text-lg font-medium text-gray-900">Product not available</p>
      </div>
    );
  }

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
    openCartModal();
  };

  const handleBuyNow = () => {
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
    openCartModal();
    // Optional: Navigate to checkout
    // setTimeout(() => {
    //   window.location.href = "/checkout";
    // }, 500);
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

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
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
            ₹{(selectedSize.discountedPrice || selectedSize.price).toLocaleString("en-IN")}
          </h3>
          {selectedSize.discountedPrice &&
            selectedSize.discountedPrice !== selectedSize.price && (
              <span className="text-gray-500 line-through">
                ₹{selectedSize.price.toLocaleString("en-IN")}
                {selectedSize.name !== "Regular" && (
                  <span className="text-sm text-gray-500 ml-2">
                    ({selectedSize.name})
                  </span>
                )}
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

      {product.sizes && product.sizes.length > 0 && (
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
      )}

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
          onClick={handleBuyNow}
          className="w-full sm:w-auto bg-[#800000] text-white font-semibold py-3 px-40 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
        >
          BUY NOW
        </button>
      </div>

      <div className="flex ml- mt-4 space-x-4">
        <div className="text-center">
          <Image
            src="/images/shop-detail/trustpilot.png"
            alt="Custom Review 1"
            width={100}
            height={100}
            style={{ width: "120px" }}
          />
        </div>
        <div className="text-center">
          <Image
            src="/images/shop-detail/trustpilot.png"
            alt="Custom Review 2"
            width={100}
            height={100}
            style={{ width: "120px" }}
          />
        </div>
        <div className="text-center">
          <Image
            src="/images/shop-detail/trustpilot.png"
            alt="Custom Review 3"
            width={100}
            height={100}
            style={{ width: "120px" }}
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={toggleDescription}
          className="bg-gray-200 py-2 text-dark rounded flex items-center"
        >
          Description
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          className={`mt-2 transition-all duration-300 ease-in-out ${
            isDescriptionVisible
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <p className="mb-4">
            {product.detail || "No description available."}
          </p>

          {product.beejMantra && (
            <p className="font-bold mb-4">
              Beej Mantra: <span className="text-lg">{product.beejMantra}</span>
            </p>
          )}

          <h3 className="font-bold text-lg mb-2">Key Features</h3>
          <ul className="list-disc pl-5 mb-4">
            {product.keyFeatures?.map((feature, index) => (
              <li key={index}>{feature}</li>
            )) || <li>No key features available</li>}
          </ul>

          <h3 className="font-bold text-lg mb-2">Benefits</h3>
          <p>
            Rudraksha beads are known to naturally calm the mind, reduce stress,
            and promote emotional balance, while enhancing focus, positivity,
            and spiritual growth.
          </p>
          <ul className="list-disc pl-5">
            {product.benefits?.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            )) || <li>No benefits information available</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ShopDetails = ({ params }: PageProps) => {
  const router = useRouter();
  const { slug } = React.use(params); // Unwrap the Promise from params
  const { openPreviewModal } = usePreviewSlider();
  const productFromStorage = useAppSelector(
    (state) => state.productDetailsReducer.value
  );

  const [previewImg, setPreviewImg] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("tabOne");

  // Fetch product logic
  const productFromData = shopData.find((item) => item.slug === slug);
  const product: Product | null = productFromData || productFromStorage;

  // Fallback for no product
  if (!product || !product.title) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium text-gray-900">Product not found!</p>
      </div>
    );
  }

  const handleToggleWishlist = (product: Product, isWishlisted: boolean) => {
    // Additional wishlist logic if needed
  };

  const handlePreviewSlider = () => {
    openPreviewModal();
  };

  return (
    <>
      <Breadcrumb title="Shop Details" pages={["shop details"]} />

      <section className="bg-[#FFFAF5] overflow-hidden relative pb-20">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
            {/* Image Gallery */}
            <div className="lg:max-w-[550px] w-full">
              <div className="lg:min-h-[250px] bg-white rounded-xl shadow-lg bg-gray-100 relative flex items-center justify-center overflow-hidden">
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

            {/* Product Details */}
            <ProductCard
              product={product}
              onToggleWishlist={handleToggleWishlist}
            />
          </div>
        </div>
      </section>
      <div className="bg-[#FFFAF5]">
        <RudrakshaComponent />
      </div>
      <RecentlyViewdItems />
      <Newsletter />
    </>
  );
};

export default ShopDetails;