import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
    const res = await fetch(
      "https://honey-badgers-ecommerce.glitch.me/products"
    );
    return await res.json();
  }
);
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    categories: [],
    favoriteItems: [4, 5, 6],
    isLoading: false,
    error: null,
  },
  reducers: {
    addFavoriteProduct: (state, action) => {
      const id = action.payload;
      const index = state.favoriteItems.indexOf(id);

      if (index !== -1) {
        state.favoriteItems = state.favoriteItems.filter((x) => x !== id);
      } else {
        state.favoriteItems.push(id);
      }
    },
  },
  extraReducers: {
    [getProductsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProductsAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getProductsAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});
export const { addFavoriteProduct } = productsSlice.actions;
export default productsSlice.reducer;
