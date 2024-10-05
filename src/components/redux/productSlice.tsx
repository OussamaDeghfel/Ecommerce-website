import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface productState {
  product: [
    {
      id: string;
      category: {
        id: string;
        name: string;
      };
      title: string;
      description: string;
      price: number;
    }
  ];
  loading: boolean
  error: string | null
}

const initialState: productState = {
  product: [{
      id: "",
      category: {
          id: "",
          name: ""
      },
      title: "",
      description: "",
      price: 0
  }],
  loading: false,
  error: null,
};
export const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.data);
});

