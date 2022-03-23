import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthProvider";
const API_URL = "http://localhost:5000/api/auth/";
const AuthService = () => {
  const login = async (email, password) => {
    const { setAuth } = useContext(AuthContext);

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    return await axios
      .post(API_URL + "signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          const accessToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({ user, pwd, roles, accessToken });
          setUser("");
          setPwd("");
        }
        return response.data;
      });
  };
  const logout = () => {
    localStorage.removeItem("user");
  };
  const register = (firstName, lastName, email, password) => {
    return axios.post(API_URL + "signup", {
      firstName,
      lastName,
      email,
      password,
    });
  };
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  return {
    login,
    logout,
    register,
    getCurrentUser,
  };
};

export default AuthService;
