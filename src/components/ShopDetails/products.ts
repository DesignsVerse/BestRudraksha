// productData.ts

export interface Product {
    id: number;
    title: string;
    price: number;
    discountedPrice: number;
    imgs: {
      previews: string[];
      thumbnails: string[];
    };
    description: string;
    specifications: {
      brand: string;
      model: string;
      displaySize: string;
      displayType: string;
      displayResolution: string;
      chipset: string;
      memory: string;
      mainCamera: string;
      selfieCamera: string;
      batteryInfo: string;
    };
    careMaintenance: string;
  }
  
  // Sample product data
  export const products: Product[] = [
    {
      id: 1,
      title: "iPhone 14 Plus",
      price: 999,
      discountedPrice: 1299,
      imgs: {
        previews: [
          "/images/products/iphone14-plus-1.jpg",
          "/images/products/iphone14-plus-2.jpg",
          "/images/products/iphone14-plus-3.jpg",
        ],
        thumbnails: [
          "/images/products/iphone14-plus-thumb-1.jpg",
          "/images/products/iphone14-plus-thumb-2.jpg",
          "/images/products/iphone14-plus-thumb-3.jpg",
        ],
      },
      description: "The iPhone 14 Plus features a stunning Super Retina XDR display and powerful A15 Bionic chip.",
      specifications: {
        brand: "Apple",
        model: "iPhone 14 Plus",
        displaySize: "6.7 inches",
        displayType: "Super Retina XDR OLED, HDR10, Dolby Vision",
        displayResolution: "1284 x 2778 pixels",
        chipset: "Apple A15 Bionic (5 nm)",
        memory: "128GB 6GB RAM | 256GB 6GB RAM | 512GB 6GB RAM",
        mainCamera: "12MP + 12MP | 4K@24/25/30/60fps",
        selfieCamera: "12 MP | 4K@24/25/30/60fps",
        batteryInfo: "Li-Ion 4323 mAh, non-removable",
      },
      careMaintenance: "Keep your iPhone 14 Plus clean and dry. Avoid extreme temperatures.",
    },
    // Add more products as needed
  ];