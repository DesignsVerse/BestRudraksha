import { Product } from "@/types/product";

const shopData: Product[] = [
  {
    id: 1,
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    title: "1 Mukhi Rudraksha",
    slug: "1-mukhi-rudraksha",
    reviews: 15,
    description: "Single-faced Rudraksha representing Lord Shiva",
    
    images: ["/images/products/1-14-mukhi/1.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/1.png"],
      previews: ["/images/products/1-14-mukhi/1.png"]
    },
    sizes: [
      { name: "Regular", price: 2100, discountedPrice: 1800 },
      { name: "Premium", price: 2500, discountedPrice: 2000 }
    ]
    
  },
  {
    id: 2,
    title: "2 Mukhi Rudraksha",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    slug: "2-mukhi-rudraksha",
    reviews: 5,
    description: "Two-faced Rudraksha symbolizing unity",
    images: ["/images/products/1-14-mukhi/2.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/2.png"],
      previews: ["/images/products/1-14-mukhi/2.png"]
    },
    sizes: [
      { name: "Regular", price: 1200, discountedPrice: 1500 },
      { name: "Premium", price: 1800, discountedPrice: 1500 }
    ]
  },
  {
    id: 3,
    title: "3 Mukhi Rudraksha",
    slug: "3-mukhi-rudraksha",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    reviews: 5,
    description: "Three-faced Rudraksha for fire energy",
    images: ["/images/products/1-14-mukhi/3.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/3.png"],
      previews: ["/images/products/1-14-mukhi/3.png"]
    },
    sizes: [
      { name: "Regular", price: 800, discountedPrice: 650 },
      { name: "Premium", price: 1000, discountedPrice: 850 }
    ]
  },
  {
    id: 4,
    title: "4 Mukhi Rudraksha",
    slug: "4-mukhi-rudraksha",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    reviews: 5,
    description: "Four-faced Rudraksha for knowledge",
    images: ["/images/products/1-14-mukhi/4.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/4.png"],
      previews: ["/images/products/1-14-mukhi/4.png"]
    },
    sizes: [
      { name: "Regular", price: 600, discountedPrice: 500 },
      { name: "Premium", price: 800, discountedPrice: 650 }
    ]
  },
  {
    id: 5,
    title: "5 Mukhi Rudraksha",
    slug: "5-mukhi-rudraksha",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    reviews: 5,
    description: "Five-faced Rudraksha for health",
    images: ["/images/products/1-14-mukhi/5.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/5.png"],
      previews: ["/images/products/1-14-mukhi/5.png"]
    },
    sizes: [
      { name: "Regular", price: 300, discountedPrice: 250 },
      { name: "Premium", price: 450, discountedPrice: 400 }
    ]
  },
  {
    id: 6,
    title: "6 Mukhi Rudraksha",
    slug: "6-mukhi-rudraksha",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    reviews: 5,
    description: "Six-faced Rudraksha for success",
    images: ["/images/products/1-14-mukhi/6.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/6.png"],
      previews: ["/images/products/1-14-mukhi/6.png"]
    },
    sizes: [
      { name: "Regular", price: 700, discountedPrice: 600 },
      { name: "Premium", price: 900, discountedPrice: 750 }
    ]
  },
  {
    id: 7,
    title: "7 Mukhi Rudraksha",
    slug: "7-mukhi-rudraksha",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    reviews: 5,
    description: "Seven-faced Rudraksha for wealth",
    images: ["/images/products/1-14-mukhi/7.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/7.png"],
      previews: ["/images/products/1-14-mukhi/7.png"]
    },
    sizes: [
      { name: "Regular", price: 1100, discountedPrice: 950 },
      { name: "Premium", price: 1400, discountedPrice: 1200 }
    ]
  },
  {
    id: 8,
    title: "8 Mukhi Rudraksha",
    slug: "8-mukhi-rudraksha",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    reviews: 5,
    description: "Eight-faced Rudraksha for victory",
    images: ["/images/products/1-14-mukhi/8.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/8.png"],
      previews: ["/images/products/1-14-mukhi/8.png"]
    },
    sizes: [
      { name: "Regular", price: 2500, discountedPrice: 2200 },
      { name: "Premium", price: 3000, discountedPrice: 2700 }
    ]
  },
  {
    id: 9,
    title: "9 Mukhi Rudraksha",
    slug: "9-mukhi-rudraksha",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    reviews: 5,
    description: "Nine-faced Rudraksha for power",
    images: ["/images/products/1-14-mukhi/9.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/9.png"],
      previews: ["/images/products/1-14-mukhi/9.png"]
    },
    sizes: [
      { name: "Regular", price: 3500, discountedPrice: 3200 },
      { name: "Premium", price: 4000, discountedPrice: 3700 }
    ]
  },
  {
    id: 10,
    title: "10 Mukhi Rudraksha",
    slug: "10-mukhi-rudraksha",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    reviews: 5,
    description: "Ten-faced Rudraksha for protection",
    images: ["/images/products/1-14-mukhi/10.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/10.png"],
      previews: ["/images/products/1-14-mukhi/10.png"]
    },
    sizes: [
      { name: "Regular", price: 4500, discountedPrice: 4200 },
      { name: "Premium", price: 5000, discountedPrice: 4700 }
    ]
  },
  {
    id: 11,
    title: "11 Mukhi Rudraksha",
    slug: "11-mukhi-rudraksha",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    reviews: 5,
    description: "Eleven-faced Rudraksha for wisdom",
    images: ["/images/products/1-14-mukhi/11.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/11.png"],
      previews: ["/images/products/1-14-mukhi/11.png"]
    },
    sizes: [
      { name: "Regular", price: 5500, discountedPrice: 5200 },
      { name: "Premium", price: 6000, discountedPrice: 5700 }
    ]
  },
  {
    id: 12,
    title: "12 Mukhi Rudraksha",
    slug: "12-mukhi-rudraksa",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    reviews: 5,
    description: "Twelve-faced Rudraksha for cosmic energy",
    images: ["/images/products/1-14-mukhi/12.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/12.png"],
      previews: ["/images/products/1-14-mukhi/12.png"]
    },
    sizes: [
      { name: "Regular", price: 7000, discountedPrice: 6500 },
      { name: "Premium", price: 7500, discountedPrice: 7200 }
    ]
  },
  {
    id: 13,
    title: "13 Mukhi Rudraksha",
    slug: "13-mukhi-rudraksha",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    reviews: 5,
    description: "Thirteen-faced Rudraksha for fulfillment",
    images: ["/images/products/1-14-mukhi/13.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/13.png"],
      previews: ["/images/products/1-14-mukhi/13.png"]
    },
    sizes: [
      { name: "Regular", price: 9000, discountedPrice: 8500 },
      { name: "Premium", price: 9500, discountedPrice: 9200 }
    ]
  },
  {
    id: 14,
    title: "14 Mukhi Rudraksha",
    slug: "14-mukhi-rudraksha",
    paymentLink:"https://payments.cashfree.com/forms/1-mukhi",
    reviews: 5,
    description: "Fourteen-faced Rudraksha for divine blessings",
    images: ["/images/products/1-14-mukhi/14.png"],
    imgs: {
      thumbnails: ["/images/products/1-14-mukhi/14.png"],
      previews: ["/images/products/1-14-mukhi/14.png"]
    },
    sizes: [
      { name: "Regular", price: 15000, discountedPrice: 14000 },
      { name: "Premium", price: 16000, discountedPrice: 15500 }
    ]
  }
];

export default shopData;