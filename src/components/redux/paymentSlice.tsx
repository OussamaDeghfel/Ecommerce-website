import { createSlice } from "@reduxjs/toolkit";

interface PaymentCart {
  cardId: number;
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardImg: string;
  ChoosedAsDefault?: boolean;
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
    },
    editPaymentCard: (state, action) => {
      const index = state.paymentMethods.findIndex(
        (item) => item.cardId === action.payload.cardId
      );
      if (index !== -1) {
        state.paymentMethods[index] = action.payload;
      }
    },
    choosedAsDefaultCardPayment: (state, action) => {
      const findCard = state.paymentMethods.findIndex(
        (item) => item.cardId === action.payload
      );
      if (findCard !== -1) {
        state.paymentMethods[findCard].ChoosedAsDefault = true;
      }
    },
  },
});

export default paymentSlice.reducer;
export const { addNewPayment, choosedPaymentMethod, editPaymentCard, choosedAsDefaultCardPayment } =
  paymentSlice.actions;
