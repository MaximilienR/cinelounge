import React from "react";

import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from "axios";
import "../../assets/styles/form.css";
import { URL_LOGIN } from "../../shared/constants/urls/urlConstants";
import AuthService from "../../services/authService";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/styles/signup.css";

export default function SignUp(props) {
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [convertisseur,setConvertisseur]=useState(false);

  const changeInput =(e)=>{
    setConvertisseur(!convertisseur)
  }
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Doit contenir moins de 15 lettres")
      .required("Requis"),
    lastName: Yup.string()
      .max(20, "Doit contenir moins de 20 lettres")
      .required("Requis"),
    email: Yup.string().email("L'adresse n'est pas valide").required("Requis"),
    password: Yup.string()
      .min(6, "Doit contenir au moins 6 lettres")
      .required("Requis"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Les mots doivet être identiques")
      .required("Confirmer le mot de passe"),
  });
  //url requete bdd
  const urlRegister = "http://localhost:5000/api/users/register";
 //requete vers le back
  const onSubmit = (values) => {
    console.log(values);

    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
    console.log(data);
    AuthService.register(
      values.firstName,
      values.lastName,
      values.email,
      values.password
    ).then(
      () => {
        toast.success("😀 Merci de vous êtes inscrit !...", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        let reload = window.location.reload;
        props.history.push("/");
        setTimeout(reload, 2000);

        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        };
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
        setSuccessful(false);
      }
       
    );
  };
  return (
    <>
      <div>
        <h1 className="title_ContactView">CRÉER UN COMPTE </h1>
      </div>
      {message && (
        <div className="form-group">
          <div
            className={
              successful ? "alert alert-success" : "alert alert-danger"
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={onSubmit}
        validationSchema={validate}
      >
        {(formik) => (
          <div className="hote">
            <Form>
              <TextField
                label="Prénom"
                name="firstName"
                type="text"
                className="sign_info"
              />

              <TextField
                label="Nom"
                name="lastName"
                type="text"
                className="sign_info"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                className="sign_info"
              />
              <TextField
                label="Mot de passe"
                name="password"
                type={convertisseur?"text":"password"}
                className="sign_info"
              />
              <input
              type="checkbox"
              className="forget"
              value="text"
              onClick={changeInput}
            />
            <label >
           voir le mot de passe 
          </label>
              <TextField
                label="Confirmer le mot de passe"
                name="confirmPassword"
                type="password"
                className="sign_info"
              />
              <fieldset>
                <div>
                  <input
                    type="checkbox"
                     name="interest"
                    value="coding"
                    className="forget"
                    required
                  />
                  <label >
                    Sauvegarder mes coordonnées{" "}
                  </label>
                </div>
              </fieldset>

              <div className="hote">
                <button className="btn_sign" type="submit">
                  S'inscrire
                </button>

                <p className="forget">
                  J'ai un compte ?
                  <Link to={URL_LOGIN} className="btn_co">
                    je me connect
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}
