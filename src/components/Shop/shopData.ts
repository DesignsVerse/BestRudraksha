import { Product } from "@/types/product";

const shopData: Product[] = [
  {
    title: "Havit HV-G69 USB Gamepad",
    reviews: 15,
    slug: "havit-hv-g69-usb-gamepad",
    price: 59.0,
    discountedPrice: 29.0,
    img: "/images/products/product-1-sm-1.png", // Added main image
    images: ["/images/products/product-1-sm-1.png"], // Added images array
    id: 1,
    imgs: {
      thumbnails: [
        "/images/products/product-1-sm-1.png",
        "/images/products/product-1-sm-2.png",
      ],
      previews: [
        "/images/products/product-1-bg-1.png",
        "/images/products/product-1-bg-2.png",
      ],
    },
  },
  {
    title: "iPhone 14 Plus, 6/128GB",
    reviews: 5,
    price: 899.0,
    slug: "iphone-14-plus-6-128gb",
    discountedPrice: 99.0,
    img: "/images/products/product-2-sm-1.png",
    images: ["/images/products/product-2-sm-1.png"],
    id: 2,
    imgs: {
      thumbnails: [
        "/images/products/product-2-sm-1.png",
        "/images/products/product-2-sm-2.png",
      ],
      previews: [
        "/images/products/product-2-bg-1.png",
        "/images/products/product-2-bg-2.png",
      ],
    },
  },
  {
    title: "Apple iMac M1 24-inch 2021",
    reviews: 5,
    price: 59.0,
    discountedPrice: 29.0,
    slug: "apple-imac-m1-24-inch-2021",
    img: "/images/products/product-3-sm-1.png",
    images: ["/images/products/product-3-sm-1.png"],
    id: 3,
    imgs: {
      thumbnails: [
        "/images/products/product-3-sm-1.png",
        "/images/products/product-3-sm-2.png",
      ],
      previews: [
        "/images/products/product-3-bg-1.png",
        "/images/products/product-3-bg-2.png",
      ],
    },
  },
  // ... rest of the products with similar corrections
];

export default shopData;