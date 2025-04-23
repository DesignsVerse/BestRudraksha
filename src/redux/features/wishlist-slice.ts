import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Types
type WishlistImageSet = {
  thumbnails: string[];
  previews: string[];
};

type WishListItem = {
  id: number;
  title: string;
  slug: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  status?: string;
  imgs?: WishlistImageSet;
  description?: string;
  category?: string;
};

type WishlistState = {
  items: WishListItem[];
};

// Load from localStorage (helper)
const loadFromLocalStorage = (): WishlistState => {
  try {
    const data = localStorage.getItem("wishlist");
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Failed to load wishlist from localStorage", error);
  }
  return { items: [] };
};

// Save to localStorage (helper)
const saveToLocalStorage = (state: WishlistState) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save wishlist to localStorage", error);
  }
};

// Initial state from localStorage
const initialState: WishlistState = loadFromLocalStorage();

// Create slice
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action: PayloadAction<WishListItem>) => {
      const exists = state.items.some(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push({ ...action.payload, quantity: 1 });
        saveToLocalStorage(state);
      }
    },

    removeItemFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveToLocalStorage(state);
    },

    removeAllItemsFromWishlist: (state) => {
      state.items = [];
      saveToLocalStorage(state);
    },
  },
});

// Exports
export const {
  addItemToWishlist,
  removeItemFromWishlist,
  removeAllItemsFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
