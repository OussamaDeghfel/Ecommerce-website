import { createSlice } from "@reduxjs/toolkit";

interface PaymentCart {
  cardId: number;
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardImg: string;
}

interface paymentState {
  paymentMethods: PaymentCart[];
  paymentCardId: number;
}

const initialState: paymentState = {
  paymentMethods: [],
  paymentCardId: 0,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addNewPayment: (state, action) => {
      state.paymentMethods.push(action.payload);
    },
    choosedPaymentMethod: (state, action) => {
      state.paymentCardId = action.payload;
    }
  },
});

export default paymentSlice.reducer;
export const { addNewPayment, choosedPaymentMethod } = paymentSlice.actions;
