import type { Product } from '@/types/product';

/**
 * Temporary catalog visibility switches.
 * Default: Gemstones hidden (focus on Rudraksha).
 *
 * To re-enable gemstones later, set:
 *   NEXT_PUBLIC_HIDE_GEMSTONES=0
 */
export const HIDE_GEMSTONES: boolean =
  (process.env.NEXT_PUBLIC_HIDE_GEMSTONES ?? '1') !== '0';

// Gemstones currently live in `shopData.ts` as a fixed ID range (15-23).
export function isGemstoneProduct(product: Pick<Product, 'id'>): boolean {
  return product.id >= 15 && product.id <= 23;
}

export function getVisibleProducts<T extends Pick<Product, 'id'>>(products: T[]): T[] {
  if (!HIDE_GEMSTONES) return products;
  return products.filter((p) => !isGemstoneProduct(p));
}

