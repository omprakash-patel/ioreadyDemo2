import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filterData",
  initialState: {
    offset: 0,
    price_min: 0,
    price_max: 50000,
    categoryId: null,
    limit: 4,
  },
  reducers: {
    setDataStore: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setDataStore } = filterSlice.actions;
export default filterSlice.reducer;
