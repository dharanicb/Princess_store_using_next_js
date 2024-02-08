import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./Reducers/loaderSlice";
import authSlice from "./Reducers/authSlice";
import  cartSlice  from "./Reducers/productSlice";


export const store = configureStore({
  reducer: {
    loader: loaderSlice,
    auth: authSlice,
    cart : cartSlice,
  },
});
