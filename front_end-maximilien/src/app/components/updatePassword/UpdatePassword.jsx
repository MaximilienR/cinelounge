import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import "../../assets/styles/profile.css";
import * as Yup from "yup";
import axios from "axios";
import useUpdatePasswordHook from "./useUpdatePasswordHook";
const UpdatePassword = () => {
  const [convertisseur, setConvertisseur] = useState(false);
  const { onSubmit, validate, email, password, userEmail } =
    useUpdatePasswordHook();
  console.log(userEmail);
  const changeInput = (e) => {
    setConvertisseur(!convertisseur);
  };
  return (
    <div className="containerinfo w-5/6">
      <h2 className="titreprofile">INFORMATION</h2>

      <Formik
        initialValues={{
          PasswordNow: "",
          NewPassword: "",
          ConfirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <label className="informationlab" htmlFor="PasswordNow">
              <p>Mot de passe actuels</p>
            </label>
            <Field
              name="PasswordNow"
              type={convertisseur ? "text" : "password"}
              placeholder="veuillez saisir votre mot de passe "
              className="information"
            />
            <label className="informationlab" htmlFor="NewPassword">
              Nouveau mot de passe
            </label>
            <Field
              name="NewPassword"
              type={convertisseur ? "text" : "password"}
              placeholder="veuillez saisir votre nouveaux mot de passe "
              className="information"
            />
            <label className="informationlab" htmlFor="ConfirmPassword">
              Confirmer le mot de passe
            </label>
            <Field
              name="ConfirmPassword"
              type={convertisseur ? "text" : "password"}
              placeholder="veuillez confirmer votre mot de passe "
              className="information"
            />
            <input
              type="checkbox"
              className="forget"
              value="text"
              onClick={changeInput}
            />
            <label>voir le mot de passe</label>
            <br />
            <button type="submit" className="ConfInfo mb-4">
              Confirmer
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdatePassword;
