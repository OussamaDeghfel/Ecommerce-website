import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch