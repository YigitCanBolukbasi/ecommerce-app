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
    isLoading: false,
    error: null,
  },
  reducers: {
    exemplaReducer: (state, action) => {
      state.items.push(action.payload);
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
export const { addToDo, toggle, destroy, changeActiveFilter, clearCompleted } =
  productsSlice.actions;
export default productsSlice.reducer;
