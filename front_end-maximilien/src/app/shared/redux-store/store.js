import { configureStore } from "@reduxjs/toolkit";
// import authenticationReducer from "./authenticationSlice";
import filtersReducer from "./filtersSlice";
/**
 * To configure the store redux.
 *
 * @author Peter Mollet
 */
export const store = configureStore({
  reducer: {
    // auth: authenticationReducer,
    filters: filtersReducer,
  },
});
