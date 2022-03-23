import React, { useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "../../components/account/TextField";
import { Link } from "react-router-dom";
import {
  URL_RESET_PASSWORD,
  URL_SIGN_UP,
} from "../../shared/constants/urls/urlConstants";
import Modal from "../ResetPassword/Modal";
import "../../assets/styles/connexion.css"
import "react-toastify/dist/ReactToastify.css";
import Connecter from "./Connecter"

const ConnectView = (props) => {
    const { onSubmit, validate, message,email ,password, loading } = Connecter(props);
    return (
            <>
      <div>
        <h1 className="title_ContactView">Se connecter</h1>
      </div>
      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={onSubmit}
        validationSchema={validate}
      >
        {(formik) => (
          <div className="hote">
            <Form>
              <TextField
                label="Email"
                name="email"
                type="email"
                className="sign_info"
              />
              <TextField
                label="Mot de passe"
                name="password"
                type="password"
                className="sign_info"
              />
              <p className="forget">
              Mot de passe oublié  ?
              <button 
              type="button" 
              onClick={()=> setShowModal(true)}
              className="btn_reinitialiser">
              </button>
              <Modal/>
              </p>

              <div className="hote">
                <button className="btn_connect">Se connecter</button>

                <p className="forget">
                  Je n'ai pas de compte ?
                  <Link to={URL_SIGN_UP} className="btn_inscript">
                    Je m'inscris
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
    );
};

export default ConnectView;