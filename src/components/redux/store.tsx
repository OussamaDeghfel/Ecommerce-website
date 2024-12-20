import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import paymentSlice from "./paymentSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        payment: paymentSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch