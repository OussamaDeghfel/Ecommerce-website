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
    //   cardId: 12,
    //   cardName: 'Credit bussiness 01',
    //   expiryDate: 'Fri, 07 Mar 2025 23:00:00 GMT',
    //   cardNumber: '2121515245121512',
    //   cvv: '966',
    //   cardImg: 'visacard',
    //   ChoosedAsDefault: false
    // },
    // {
    //   cardId: 16,
    //   cardName: 'debit card 01',
    //   expiryDate: 'Thu, 13 Feb 2025 23:00:00 GMT',
    //   cardNumber: '1512415215121213',
    //   cvv: '548',
    //   cardImg: 'visacard',
    //   ChoosedAsDefault: false
    // },
    // {
    //   cardId: 14,
    //   cardName: 'Debit card 01',
    //   expiryDate: 'Thu, 13 Mar 2025 23:00:00 GMT',
    //   cardNumber: '6598986598659865',
    //   cvv: '684',
    //   cardImg: 'mastercard',
    //   ChoosedAsDefault: false
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
        state.paymentMethods.forEach((item) => {
          if (item.cardId !== action.payload) {
            item.ChoosedAsDefault = false;
          }
        });
      }
    },
    removePaymentMethod: (state, action) => {
      const findCard = state.paymentMethods.findIndex(
        (item) => item.cardId === action.payload
      )

      state.paymentMethods.splice(findCard, 1)
    },
  },
});

export default paymentSlice.reducer;
export const {
  addNewPayment,
  editPaymentCard,
  choosedAsDefaultCardPayment,
  removePaymentMethod,
} = paymentSlice.actions;
