import { createSlice } from "@reduxjs/toolkit";

interface PaymentCart {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardImg: string
}

interface paymentState {
  paymentMethods: PaymentCart[];
} 

const initialState: paymentState = {
    paymentMethods: [
        {
            cardName: "",
            cardNumber: "",
            expiryDate: "",
            cvv: "",
            cardImg: ""
        }
    ]
}

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {}
})

export default paymentSlice.reducer