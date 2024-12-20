import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "./types";
// import { Product } from "./types";

interface cartItem {
  product: ProductData;
  quantity: number;
  quantityPrice: number;
}

interface cartState {
  cart: cartItem[];
  favCart: ProductData[];
  totalQuantityPrice: number;
}

const initialState: cartState = {
  cart: [],
  favCart: [],
  totalQuantityPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const productId = action.payload;

      const itemSearch = {
        product: {
          ...state.cart.find((item) => item.product.id === productId)?.product,
        },
        quantity:
          Number(
            state.cart.find((item) => item.product.id === productId)?.quantity
          ) + 1,
        quantityPrice: Number(
          state.cart.find((item) => item.product.id === productId)
            ?.quantityPrice
        ),
      } as cartItem;

      // console.log(priceValue);
      const newPrice = itemSearch.quantityPrice * itemSearch.quantity;

      const index = Number(
        state.cart.findIndex((item) => item.product.id === productId)
      );

      // const newPrice = itemSearch.product.price + originalPrice

      state.cart[index] = itemSearch;
      state.cart[index].product.price = newPrice;

      state.totalQuantityPrice =
        state.totalQuantityPrice + itemSearch.quantityPrice;
    },

    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const itemSearch = {
        product: {
          ...state.cart.find((item) => item.product.id === productId)?.product,
        },
        quantity:
          Number(
            state.cart.find((item) => item.product.id === productId)?.quantity
          ) - 1,
        quantityPrice: state.cart.find((item) => item.product.id === productId)
          ?.quantityPrice,
      } as cartItem;

      const newPrice = itemSearch.product.price - itemSearch.quantityPrice;

      const index = Number(
        state.cart.findIndex((item) => item.product.id === productId)
      );

      if (itemSearch.quantity > 0) {
        state.cart[index] = itemSearch;
        state.cart[index].product.price = newPrice;
        state.totalQuantityPrice =
          state.totalQuantityPrice - itemSearch.quantityPrice;
      }
    },

    addToCart: (state, action) => {
      const itemSearch = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (!itemSearch) {
        state.cart.push(action.payload);
        state.totalQuantityPrice =
          state.totalQuantityPrice + action.payload.product.price;
      }
    },

    removeFromCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter(
          (pic) => pic.product.id !== action.payload.productId
        ),
        totalQuantityPrice: state.totalQuantityPrice - action.payload.price,
      };
    },

    chooseFavorite: (state, action) => {
      state.favCart.push(action.payload);
    },

    removeFavorite: (state, action) => {
      return {
        ...state,
        favCart: state.favCart.filter(
          (prod) => prod.id !== action.payload.productID
        ),
      };
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  chooseFavorite,
  removeFavorite,
} = cartSlice.actions;
