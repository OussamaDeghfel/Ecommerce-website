import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
    id: string;
    category: {
      id: string;
      name: string;
    };
    title: string;
    description: string; // Corrected spelling
    price: number;
  }

  interface ProductState {
    product: Product[];
    loading: boolean;
    error: string | null;
  }

// Initial state
const initialState:ProductState = {
  product: [],
  loading: false,
  error: "",
};

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.product = [];
      state.error = action.error.message ?? null;
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
