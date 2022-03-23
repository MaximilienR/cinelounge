import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthService from "../services/auth.service";

const AdminRoute = () => {
  const isToken = AuthService.getCurrentUser();
  let auth;
  let token;
  isToken ? (token = isToken.accessToken) : (token = null);
  if (isToken) {
    if (token) {
      auth = AuthService.checkTokenAndAdmin(token);
    } else {
      auth = false;
    }
  } else {
    auth = false;
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default AdminRoute;
