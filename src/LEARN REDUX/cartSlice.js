import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { quantity, price } = action.payload;

      const currProducts = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (currProducts) {
        currProducts.quantity += quantity;
        state.totalPrice += price;
        state.totalQuantity += quantity;
      } else {
        state.products.push(action.payload);
        state.totalPrice += price;
        state.totalQuantity += quantity;
      }
    },

    removeFromCart: (state, action) => {
      const filteredProducts = state.products.filter(
        (item) => item.id !== action.payload.id
      );

      const currProducts = state.products.find(
        (item) => item.id === action.payload.id
      );

      const totalMinus = currProducts.quantity * currProducts.price;

      state.totalPrice -= totalMinus;
      state.totalQuantity -= currProducts.quantity;
      state.products = filteredProducts;
    },

    resetCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
