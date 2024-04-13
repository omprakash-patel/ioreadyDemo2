import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartData",
  initialState: {
    cartList : []
  },
  reducers: {
    setCartstore: (state, action) => {
      return {
        ...state,   
        ...action.payload,
      };
    },
  },
});

export const { setCartstore } = cartSlice.actions;
export default cartSlice.reducer;
