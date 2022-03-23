import { createSlice } from "@reduxjs/toolkit";
const filtersSlice = createSlice({
  name: "filterProduct",
  initialState: {
    filters: [{ colors: "test" }],
    products: [],
  },
  reducers: {
    addFilters: (state = initialState, action) => {
      // state.filters.push(action.payload);
      return { ...state, filters: action.payload };
      // return [...state, ...action.payload];
    },
    addFiltersProducts: (state, action) => {
      // state.products.push(action.payload);
      return { ...state, products: action.payload };
      // return [...state, ...action.payload];
    },
  },
});

export const { addFilters } = filtersSlice.actions;
export const { addFiltersProducts } = filtersSlice.actions;
export default filtersSlice.reducer;
