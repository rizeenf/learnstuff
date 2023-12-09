import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    list: listSlice,
    cart: cartSlice,
  },
});
