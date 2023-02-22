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
      const favoriteData = action.payload;
      const favoriteItems = state.favoriteItems?.map((x) => x.id);
      const index = favoriteItems.indexOf(id);

      if (index !== -1) {
        state.favoriteItems = state.favoriteItems.filter((x) => x.id !== id);
      } else {
        state.favoriteItems.push(favoriteData);
      }
    },
    filterFavoriteProduct: (state, action) => {
      state.liked = !state.liked;
      state.items =
        state.liked === true ? state.favoriteItems : state.allProducts;
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
export const { addFavoriteProduct, filterFavoriteProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
