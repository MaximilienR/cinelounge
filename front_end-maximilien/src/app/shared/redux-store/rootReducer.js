import { combineReducers } from "redux";
import { authenticationSlice } from "./authenticationSlice";
// import allItemsReducer from "../../reducers/allItemsReducer";
import filtersSlice from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
/**
 * Combine all the reducers create in different files, to add them in the redux-store
 * So, if you create a new reducer, it needs to be added here
 *
 * @author Peter Mollet
 */

const persistConfig = {
  key: "counter",
  storage,
};

const reducers = combineReducers({
  authenticationSlice,
  filtersSlice,
});

export const persistedReducer = persistReducer(persistConfig, reducers);

// export default configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export default combineReducers({
//   // peristedState,
//   authenticationSlice,
//   // allItemsReducer,
//   filtersSlice,
// });
