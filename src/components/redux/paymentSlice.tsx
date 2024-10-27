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
}

const initialState: paymentState = {
  paymentMethods: [
    // {
    //     cardName: "",
    //     cardNumber: "",
    //     expiryDate: "",
    //     cvv: "",
    //     cardImg: ""
    // }
  ],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addNewPayment: (state, action) => {
      state.paymentMethods.push(action.payload);
    },
  },
});

export default paymentSlice.reducer;
export const { addNewPayment } = paymentSlice.actions;
