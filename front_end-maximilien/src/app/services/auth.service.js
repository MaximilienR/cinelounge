import axios from "axios";
import jwt_decode from "jwt-decode";

const API_URL = "http://localhost:5000/api/auth/";
class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  updatePassword(email, passwordNow, confirmPassword) {
    return axios
      .post(API_URL + "updatePassword", {
        email,
        passwordNow,
        confirmPassword,
      })
      .then((response) => {
        if (response.data) {
          return true;
        }
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(firstName, lastName, email, password) {
    return axios.post(API_URL + "signup", {
      firstName,
      lastName,
      email,
      password,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  checkTokenAndAdmin(token) {
    const decodedToken = jwt_decode(token);
    return decodedToken.role.map((value) => value.name.includes("admin"))
      ? true
      : false;
  }
  checkTokenAndUser(token) {
    const decodedToken = jwt_decode(token);
    return decodedToken.role.map((value) => value.name.includes("user"))
      ? true
      : false;
  }
}
export default new AuthService();
