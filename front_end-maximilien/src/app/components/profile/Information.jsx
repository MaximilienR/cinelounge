import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import "../../assets/styles/profile.css";
import * as yup from "yup";
import axios from "axios";
const Information = () => {
  const [convertisseur, setConvertisseur] = useState(false);

  const changeInput = (e) => {
    setConvertisseur(!convertisseur);
  };

  let user = JSON.parse(localStorage.getItem("user"));
  const initialValues = {
    firstName: user ? user.firstName : "",
    lastName: user ? user.lastName : "",
    email: user ? user.email : "",
    portable: "",
    fixe: "",
    MDP: "",
  };
  return (
    <div className="containerinfo w-5/6">
      <h2 className="titreprofile">INFORMATION</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          const { initialValues, ...data } = values;
          await axios.put(`http://localhost:5000/api/test/${user.id}`, {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
          });
        }}
      >
        <Form>
          <label id="Monsieur">
            <p className="civi">Civilité</p>
            <span className="civiM">Monsieur</span>
            <Field name="sexe" type="radio" />
          </label>
          <label id="Madame">
            <span className="civiM">Madame</span>
            <Field name="sexe" type="radio" />
          </label>
          <br />

          <label className="informationlab" htmlFor="nom">
            <p>Nom</p>
          </label>
          <Field
            name="lastName"
            type="text"
            placeholder="nom"
            className="information"
            id="nom"
          />
          <label className="informationlab" htmlFor="prenom">
            Prénom
          </label>
          <Field
            name="firstName"
            type="text"
            placeholder="prenom"
            className="information"
            id="prenom"
          />

          <label className="informationlab" htmlFor="mail">
            Adresse-mail
          </label>
          <Field
            name="email"
            type="text"
            placeholder="mail"
            className="information"
            id="mail"
          />

          <label className="informationlab" htmlFor="portable">
            Tél portable
          </label>
          <Field
            name="portable"
            type="number"
            placeholder="téléphone portable"
            className="information"
            id="portable"
          />

          <label className="informationlab" htmlFor="fixe">
            Tél fixe
          </label>
          <Field
            name="fixe"
            type="number"
            placeholder="téléphone fixe"
            className="information"
            id="fixe"
          />

          <label className="informationlab" htmlFor="MDP">
            Mot de passe
          </label>
          <Field
            name="MDP"
            type={convertisseur ? "text" : "password"}
            placeholder="Mot de passe"
            className="information"
            id="MDP"
          />
          <input
            type="checkbox"
            className="vus"
            value="text"
            onClick={changeInput}
          />

          <Field
            name="subm"
            type="submit"
            value="Enregistrer"
            className="enre"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default Information;
