import React from "react";
import ReactDOM from "react-dom";
import "./app/assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./app/App";
// import { BrowserRouter } from "react-router-dom";
import { DarkThemeContextProvider } from "./app/context/DarkThemeContext";
// import { getItems, getItemsByOrder } from "./app/actions/authAction";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./app/shared/redux-store/rootReducer";
import { AuthProvider } from "./context/AuthProvider";

const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

ReactDOM.render(
  // <BrowserRouter>
  <DarkThemeContextProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </DarkThemeContextProvider>,
  // </BrowserRouter>,
  document.getElementById("root")
);
