import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Redux/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
