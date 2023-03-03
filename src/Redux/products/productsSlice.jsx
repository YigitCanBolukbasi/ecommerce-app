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
    allProducts: [],
    categories: [],
    favoriteItems: [],
    isLoading: false,
    error: null,
    liked: false,
  },
  reducers: {
    addFavoriteProduct: (state, action) => {
      const id = action.payload.id;
      if (state.favoriteItems.includes(id)) {
        state.favoriteItems = state.favoriteItems?.filter((x) => x !== id);
      } else {
        state.favoriteItems.push(action.payload.id);
      }
    },
    filterFavoriteProduct: (state, action) => {
      state.liked = !state.liked;
      state.items =
        state.liked === true
          ? state.allProducts.filter((x) => state.favoriteItems?.includes(x.id))
          : state.allProducts;
    },
    searchProduct: (state, action) => {
      if (action.payload !== "") {
        state.items = state.items.filter((x) =>
          x.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else {
        state.items = state.allProducts;
      }
    },
  },
  extraReducers: {
    [getProductsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProductsAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.allProducts = action.payload;
      state.isLoading = false;
    },
    [getProductsAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});
export const { addFavoriteProduct, searchProduct, filterFavoriteProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
