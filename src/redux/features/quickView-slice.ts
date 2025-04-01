import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState: InitialState = {
  value: {
    title: "",
    reviews: 0,
    slug: "", // Added missing required field
    price: 0,
    discountedPrice: 0,
    img: "",
    id: 0,
    images: [], // This is now string[] which matches the Product type
    // Removed imgs from initial state since it's optional
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