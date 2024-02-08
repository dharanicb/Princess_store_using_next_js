import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: {}};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload.products;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { ...action.payload.products, quantity: 1 };
      }
      console.log(state.items[id].quantity)
    },
    emptyCart: (state) => {
      state.items = {};
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;

      delete state.items[id];
    },
    increment: (state,action) => {
      const id = action.payload.id;
      if (state.items[id]) {
        state.items[id].quantity++;
      }
    },
    decrement: (state,action) => {
      const id = action.payload.id;
      if (state.items[id]) {
        if (state.items[id].quantity === 1) {
          delete state.items[id];
        } else {
          state.items[id].quantity--;
        }
      }
    },
  },
});

export const { addItem, removeFromCart, emptyCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
