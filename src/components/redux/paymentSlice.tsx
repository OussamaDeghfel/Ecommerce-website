import { createSlice } from "@reduxjs/toolkit";

interface PaymentCart {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardImg: string
}

interface paymentState {
  paymentMethod: PaymentCart;
} 

const initialState: paymentState = {
    paymentMethod: []
}

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {}
})

export default paymentSlice.reducer