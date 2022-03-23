// import axios from "axios";
// import { returnErrors } from "./errorAction";
// import { createSlice } from "@reduxjs/toolkit";

// import {
//   USER_LOADED,
//   USER_LOADING,
//   AUTH_ERROR,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT_SUCCESS,
//   REGISTER_SUCCESS,
//   REGISTER_FAIL,
// } from "./types";

// export const loadUser = () => (dispatch, getState) => {
//   dispatch({ type: USER_LOADING });

//   axios
//     .get("/api/auth/user", tokenConfig(getState))
//     .then((res) =>
//       dispatch({
//         type: USER_LOADED,
//         payload: res.data,
//       })
//     )
//     .catch((err) => {
//       dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//         type: AUTH_ERROR,
//       });
//     });
// };

// export const tokenConfig = (getState) => {
//   const token = getState().auth.token;
//   const config = {
//     headers: {
//       "Content-type": "application/json",
//     },
//   };
//   if (token) {
//     config.headers["x-auth-token"] = token;
//   }

//   return config;
// };

// export const GET_ALL_ITEMS = "GET_ALL_ITEMS";

// export const getItems = () => {
//   return (dispatch) => {
//     return axios
//       .get("http://localhost:5000/api/products/")
//       .then((res) => {
//         dispatch({
//           type: GET_ALL_ITEMS,
//           payload: res.data.products,
//         });
//       })
//       .catch((err) => console.log(err));
//   };
// };

// export const GET_ALPHA = "GET_ALPHA";
// export const GET_UNALPHA = "GET_UNALPHA";
// export const GET_ASC = "GET_ASC";
// export const GET_DESC = "GET_DESC";

// export const getItemsByOrder = (request) => {
//   return (dispatch) => {
//     return axios
//       .get(`http://localhost:5000/api/products/${request}`)
//       .then((res) => {
//         dispatch({
//           type: GET_ALPHA,
//           payload: res.data.products,
//         });
//       })
//       .catch((err) => console.log(err));
//   };
// };
// export const getItemsByUnalpha = () => {
//   return (dispatch) => {
//     return axios
//       .get(`http://localhost:5000/api/products/${request}`)
//       .then((res) => {
//         dispatch({
//           type: GET_UNALPHA,
//           payload: res.data.products,
//         });
//       })
//       .catch((err) => console.log(err));
//   };
// };
// export const getItemsByAsc = () => {
//   return (dispatch) => {
//     return axios
//       .get(`http://localhost:5000/api/products/${request}`)
//       .then((res) => {
//         dispatch({
//           type: GET_ASC,
//           payload: res.data.products,
//         });
//       })
//       .catch((err) => console.log(err));
//   };
// };
// export const getItemsByDesc = () => {
//   return (dispatch) => {
//     return axios
//       .get(`http://localhost:5000/api/products/${request}`)
//       .then((res) => {
//         dispatch({
//           type: GET_DESC,
//           payload: res.data.products,
//         });
//       })
//       .catch((err) => console.log(err));
//   };
// };
