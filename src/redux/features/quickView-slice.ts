import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState: InitialState = {
  value: {
    title: "",
    reviews: 0,
    slug: "",
    description: "",
    id: 0,
    images: [],
    imgs: {
      thumbnails: [],
      previews: []
    },
    sizes: [
      { name: "Regular", price: 0, discountedPrice: 0 }, // Default size
      { name: "Premium", price: 0, discountedPrice: 0 }  // Default size
    ]
  },
};

export const quickView = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    updateQuickView: (state, action: PayloadAction<Product>) => {
      state.value = action.payload;
    },
    resetQuickView: () => initialState,
  },
});

export const { updateQuickView, resetQuickView } = quickView.actions;
export default quickView.reducer;