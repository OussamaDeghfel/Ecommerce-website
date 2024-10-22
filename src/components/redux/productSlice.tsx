import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductData } from "./types";
import { RootState } from "./store";

  interface ProductState {
    product: ProductData[];
    isLoading: boolean;
    error: string | null;
  }

// Initial state
const initialState:ProductState = {
  product: [],
  isLoading: false,
  error: "",
};

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.product = [];
      state.error = action.error.message ?? null;
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
// export const {getProducts} = productSlice.actions

export const selectProduct = (state:RootState) => state.product.product;

