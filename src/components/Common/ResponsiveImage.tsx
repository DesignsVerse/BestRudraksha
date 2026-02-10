"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ResponsiveImageProps {
  src: string;
  mobileSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  style?: React.CSSProperties;
  onError?: () => void;
}

/**
 * ResponsiveImage component that automatically shows mobile or desktop images
 * based on screen size.
 * 
 * Image naming convention:
 * - Desktop: "/images/products/category/image.png"
 * - Mobile: "/images/products/category/image(mobile).png" or provide mobileSrc
 * 
 * Breakpoint: < 768px = mobile, >= 768px = desktop
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  mobileSrc,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  objectFit = "cover",
  style,
  onError,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile breakpoint at 768px
    };
    
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate mobile image path if not provided
  const getMobileSrc = () => {
    if (mobileSrc) return mobileSrc;
    
    // Auto-detect mobile image based on naming convention
    // e.g., "/images/products/1.png" -> "/images/products/1(mobile).png"
    const lastDot = src.lastIndexOf(".");
    if (lastDot === -1) return src;
    
    const extension = src.substring(lastDot);
    const basePath = src.substring(0, lastDot);
    return `${basePath}(mobile)${extension}`;
  };

  // Determine which image to use
  const imageSrc = mounted && isMobile ? getMobileSrc() : src;

  // Default sizes if not provided
  const defaultSizes = sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  const imageProps = {
    src: imageSrc,
    alt,
    className: `${className} object-${objectFit}`,
    priority,
    quality,
    sizes: defaultSizes,
    style,
    onError,
  };

  if (fill) {
    return <Image {...imageProps} fill />;
  }

  return (
    <Image
      {...imageProps}
      width={width || 300}
      height={height || 300}
    />
  );
};

export default ResponsiveImage;
