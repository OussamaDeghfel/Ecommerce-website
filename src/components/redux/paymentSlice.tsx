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
//   paymentCardId: number;
}

const initialState: paymentState = {
  paymentMethods: [
    // {
    //   cardId: 1,
    //   cardName: "Visa",
    //   cardNumber: "**** **** **** 1234",
    //   expiryDate: "12/24",
    //   cvv: "123",
    //   cardImg: "/images/visa.png",
    //   ChoosedAsDefault: false,
    // },
    // {
    //   cardId: 2,
    //   cardName: "MasterCard",
    //   cardNumber: "**** **** **** 1234",
    //   expiryDate: "12/24",
    //   cvv: "123",
    //   cardImg: "/images/masterCard.png",
    //   ChoosedAsDefault: false,
    // }
  ],
//   paymentCardId: 0,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addNewPayment: (state, action) => {
      state.paymentMethods.push(action.payload);
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
        state.paymentMethods.every((item) => {
          if(item.cardId !== findCard){
            item.ChoosedAsDefault = false
          } else {
            state.paymentMethods[findCard].ChoosedAsDefault = true
          }
        })
      }
    },
  },
});

export default paymentSlice.reducer;
export const { addNewPayment, editPaymentCard, choosedAsDefaultCardPayment } =
  paymentSlice.actions;
