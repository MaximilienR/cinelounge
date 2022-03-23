import React, { useState } from "react";
import "../../assets/styles/connexion.css";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import AuthService from "../../services/auth.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const useUpdatePasswordHook = (props) => {
  const [passwordNow, setPasswordNow] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let userEmail = JSON.parse(localStorage.getItem("user")).email;

  const validate = Yup.object({
    PasswordNow: Yup.string().required(
      "L'adresse e-mail ou le mot de passe ne sont pas corrects"
    ),
    NewPassword: Yup.string().required(
      "L'adresse e-mail ou le mot de passe ne sont pas corrects"
    ),
    ConfirmPassword: Yup.string().required(
      "L'adresse e-mail ou le mot de passe ne sont pas corrects"
    ),
  });

  const urlSignIn = "http://localhost:5000/api/auth/signin";

  const onSubmit = (values) => {
    console.log("je passe dans le submit");
    const data = {
      email: userEmail,
      password: values.passwordNow,
    };

    // setLoading(true);
    AuthService.updatePassword(
      userEmail,
      values.PasswordNow,
      values.ConfirmPassword
    ).then(
      () => {
        toast.success("🦄 votre mot de passe a été modifié avec succès", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/profile");
        location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        // setLoading(false);
      }
    );
  };
  return { onSubmit, validate, passwordNow, userEmail };
};

export default useUpdatePasswordHook;
