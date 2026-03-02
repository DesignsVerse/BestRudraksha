import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type CartItem = {
  id: number;
  title: string;
  slug: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  qualityType?: "standard" | "premium";
  selectedSize?: string;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};

type InitialState = {
  items: CartItem[];
};

const getInitialCart = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cartItems");
    if (!storedCart) return [];

    // Backwards-compatible migration:
    // "indonesian" -> "standard", "nepali" -> "premium"
    const normalizeQualityType = (qt?: string) => {
      if (qt === "indonesian") return "standard";
      if (qt === "nepali") return "premium";
      if (qt === "standard" || qt === "premium") return qt;
      return undefined;
    };

    try {
      const parsed = JSON.parse(storedCart) as any[];
      return Array.isArray(parsed)
        ? parsed.map((item) => ({
            ...item,
            qualityType: normalizeQualityType(item?.qualityType),
          }))
        : [];
    } catch {
      return [];
    }
  }
  return [];
};

const initialState: InitialState = {
  items: getInitialCart(),
};

const persistCart = (items: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'> & { quantity?: number }>) => {
      const { id, title, slug, price, quantity = 1, discountedPrice, imgs, qualityType, selectedSize } = action.payload;

      // Normalize any legacy values that might still be passed around
      const normalizedQualityType =
        (qualityType as any) === "indonesian"
          ? "standard"
          : (qualityType as any) === "nepali"
            ? "premium"
            : qualityType;
      // Find existing item with same id, qualityType, and selectedSize
      const existingItem = state.items.find((item) => 
        item.id === id && 
        item.qualityType === normalizedQualityType && 
        item.selectedSize === selectedSize
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id,
          title,
          slug,
          price,
          quantity,
          discountedPrice,
          imgs,
          qualityType: normalizedQualityType,
          selectedSize,
        });
      }
      persistCart(state.items);
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      persistCart(state.items);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
        persistCart(state.items);
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
        persistCart(state.items);
      }
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
        persistCart(state.items);
      }
    },
    removeAllItemsFromCart: (state) => {
      state.items = [];
      persistCart([]);
    },
  },
});

// Selectors
export const selectCartItems = (state: RootState) => state.cartReducer.items;

export const selectTotalPrice = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.discountedPrice * item.quantity, 0)
);

export const selectTotalItems = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
);

export const {
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
  updateCartItemQuantity,
  removeAllItemsFromCart,
} = cart.actions;

export default cart.reducer;
