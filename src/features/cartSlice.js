import { createSlice } from "@reduxjs/toolkit";

import data from "../data.json";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = data.find((item) => item.id === action.payload);
      if (product) {
        state.cartItems.push(product);
      }
    },
    checkout: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, checkout } = cartSlice.actions;

export default cartSlice.reducer;
