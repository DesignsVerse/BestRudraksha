# Responsive Images Implementation Guide

## Overview
The website now supports responsive images that automatically display mobile-optimized images on mobile devices and desktop images on larger screens.

## Image Naming Convention

### Automatic Detection (Recommended)
If you follow this naming pattern, the system will automatically detect mobile images:

**Desktop Image:**
```
/images/products/category/product-name.png
```

**Mobile Image (same location, with "(mobile)" suffix):**
```
/images/products/category/product-name(mobile).png
```

### Example:
- Desktop: `/images/products/1-14-mukhi/1.png`
- Mobile: `/images/products/1-14-mukhi/1(mobile).png`

## How It Works

### Breakpoint
- **Mobile:** Screens < 768px width
- **Desktop/Laptop:** Screens >= 768px width

### Components Updated
1. ✅ `ProductItem` - Product grid items
2. ✅ `SingleGridItem` - Shop grid items
3. ✅ `ShopDetails` (slug.tsx) - Product detail page main image
4. ✅ `QuickViewModal` - Quick view modal
5. ✅ `HeroCarousel` - Already had mobile/desktop support

## Adding Mobile Images

### Option 1: Automatic Detection (Easiest)
1. Place your desktop image: `/images/products/category/image.png`
2. Place your mobile image: `/images/products/category/image(mobile).png`
3. The system will automatically use the correct image based on screen size

### Option 2: Explicit in Product Data
You can also specify mobile images explicitly in `shopData.ts`:

```typescript
imgs: {
  thumbnails: ["/images/products/category/image.png"],
  previews: ["/images/products/category/image.png"],
  mobileThumbnails: ["/images/products/category/image-mobile.png"], // Optional
  mobilePreviews: ["/images/products/category/image-mobile.png"], // Optional
}
```

## Image Format Support
- ✅ `.png`
- ✅ `.jpg` / `.jpeg`
- ✅ `.webp`
- ✅ `.jfif` (like your "Ujjain Shree Mahakal Wallpaper 4K(mobile).jfif")

## Best Practices

### Image Sizes
- **Mobile images:** Optimize for ~400-600px width
- **Desktop images:** Optimize for ~800-1200px width
- Use WebP format when possible for better compression

### File Organization
```
public/images/
  products/
    1-14-mukhi/
      1.png              (desktop)
      1(mobile).png      (mobile)
      2.png
      2(mobile).png
    stone/
      ruby.png
      ruby(mobile).png
```

## Testing

### Test on Different Devices:
1. **Mobile (< 768px):** Should show `image(mobile).png`
2. **Tablet/Desktop (>= 768px):** Should show `image.png`

### Browser DevTools:
1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test different screen sizes
4. Check Network tab to see which image loads

## Current Status

✅ **Implemented:**
- ResponsiveImage component created
- Product type updated to support mobile/desktop variants
- All product display components updated
- Automatic mobile image detection

⏳ **To Do:**
- Add mobile versions of existing product images
- Optimize image file sizes
- Consider using WebP format for better performance

## Example: Adding Mobile Image for Product

1. **Current desktop image:**
   `/images/products/1-14-mukhi/1.png`

2. **Add mobile version:**
   `/images/products/1-14-mukhi/1(mobile).png`

3. **That's it!** The system will automatically use:
   - `1.png` on desktop/laptop (>= 768px)
   - `1(mobile).png` on mobile (< 768px)

## Notes

- If a mobile image is not found, it will fall back to the desktop image
- The system checks for mobile images on component mount and window resize
- Images are optimized by Next.js Image component automatically
- Lazy loading is enabled for better performance

---

**Last Updated:** February 2025
**Component:** `src/components/Common/ResponsiveImage.tsx`
