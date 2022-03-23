import React, { useState } from "react";
import "../../assets/styles/connexion.css";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import AuthService from "../../services/auth.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Connecter = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string().email(
      "L'adresse e-mail ou le mot de passe ne sont pas corrects"
    ),
    password: Yup.string().required(
      "L'adresse e-mail ou le mot de passe ne sont pas corrects"
    ),
  });

  const urlSignIn = "http://localhost:5000/api/auth/signin";

  const onSubmit = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    setMessage("");
    setLoading(true);
    AuthService.login(values.email, values.password).then(
      () => {
        toast.success("🦄 Vous êtes connecté !...", {
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
        setLoading(false);
        setMessage(resMessage);
      }
    );
  };
  return { onSubmit, validate, message, email, password, loading };
};

export default Connecter;
