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
    price: 0,
    discountedPrice: 0,
    description: "", // Added missing field

    img: "",
    id: 0,
    images: [],
    imgs: {  // Now included in initial state
      thumbnails: [],
      previews: []
    },
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