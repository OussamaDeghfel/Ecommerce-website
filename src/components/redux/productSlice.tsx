import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "./types"; // Assuming you have a separate file defining the Product interface
import axios from "axios";


const initialState: {
  products: Product[];
  prix: number;
  isLoading: boolean;
  error: string | null;
} = {
  products: [],
  prix: 0,
  isLoading: false,
  error: null,
};

export const fetchImagesData = createAsyncThunk<Product[]>(
  "product/fetchImages", () => {
    return axios
        .get("https://api.unsplash.com/photos/?client_id=G_jsyuMxxg2ge-zm4r3hlGnZRnT8pvt3sLUCX8CUe4g")
        .then((response) => response.data)

  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(fetchImagesData.pending, (state) => {
        state.isLoading = true;
      })
      // builder.addCase(fetchImagesData.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.products = action.payload;
      // })
      builder.addCase(fetchImagesData.fulfilled, (state, action) => {
        state.isLoading = false
        const productsWithPrice = action.payload.map((product) => ({
          ...product,
          price: 1 // Math.random() * 100
        }))
        state.products = productsWithPrice
      })
      builder.addCase(fetchImagesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default productSlice.reducer;
// export const { } = productSlice.actions;
