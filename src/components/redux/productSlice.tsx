import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductData } from "./types";
import { RootState } from "./store";

  interface ProductState {
    product: ProductData[];
    isLoading: boolean;
    error: string | null;
    favoriteList : string[]
  }

// Initial state
const initialState:ProductState = {
  product: [],
  isLoading: false,
  error: "",
  favoriteList: []
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
    favorite: (state, action) => {
      const prodId = action.payload
      
      const productIndex = state.product.findIndex((item) => item.id === prodId)

      if(productIndex !== -1){
        state.product[productIndex].isLiked = !state.product[productIndex].isLiked;
      }
    },
    addFavoriteProductToList : (state, action) => {
      state.favoriteList.push(action.payload)
    },
    removeFavoriteProductFromList : (state, action) => {
      const findTheIndex = state.favoriteList.findIndex((item) => item.id === action.payload)
      state.favoriteList.splice(findTheIndex, 1)
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
      state.error = "";
      // state.product.map((item) => {
      //   item.isLiked = false
      // })
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.product = [];
      state.error = action.error.message ?? null;
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
export const {
  favorite, addFavoriteProductToList, removeFavoriteProductFromList
} = productSlice.actions;

export const selectProduct = (state:RootState) => state.product.product;

