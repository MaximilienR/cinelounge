import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useContactHook from "./useContactHook";
import emailjs from "emailjs-com";
import { string } from "yup";
import { toast } from "react-toastify";



function Contact(props) {
  const { initialValues, userSchema } = useContactHook(props);
 

  const SendEmail = (object) => {
    emailjs
      .send("service_r46xuko", "template_r3x2ln6", object, "eNGDOYRnJO0pijwMX")
      .then(
        /*modif ici */
        () => {
          toast.success("👏 message envoyé avec succès ", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/home");
          location.reload();
          /*fin modif*/
        },
        (result) => {
          console.log(result.text);
        },
        
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  let user=JSON.parse(localStorage.getItem("user"))
  console.log(JSON.parse(localStorage.getItem("user")))
  
  return (
    <>
      <div>
        <h1 className="title_ContactView">CONTACT </h1>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          SendEmail(values);
        }}
        validationSchema={userSchema}
      >
        <div className="hote">
          <Form>
            <div className="mb-6">
              <p className="text_contact">
                Nous sommes à votre écoute pour toutes questions. Veuillez nous
                laisser <br /> votre message et nous vous recontacterons au plus
                vite
              </p>
              <Field
                name="firstName"
                type="text"
                placeholder="Veuillez entrer votre nom svp"
                className="info"
              />
              <span className="text-red-400  inline-block">
                <ErrorMessage name="firstName" />
              </span>
            </div>
            <div className="mb-6">
              <Field
                name="lastName"
                type="text"
                placeholder="Veuillez entrer votre prénom svp"
                className="info"
              />
              <span className="text-red-400  inline-block">
                <ErrorMessage name="lastName" />
              </span>
            </div>

            <div className="mb-6">
              <Field
                name="mail"
                type="text"
                placeholder="Veuillez entrer votre adresse mail "
                className="info"
                 
              />
              <span className="text-red-400 inline-block">
                <ErrorMessage name="mail" />
              </span>
            </div>

            <div className="mb-6">
              <Field
                name="mobil"
                type="number"
                placeholder="Veuillez entrer votre numéro de téléphone (optionnel)"
                className="info"
              />
              <span className="text-red-400 inline-block">
                <ErrorMessage name="mobil" />
              </span>
            </div>

            <div className="mb-6">
              <Field
                name="commande"
                type="number"
                className="info"
                placeholder="Veuillez entrer votre numéro de commande (optionnel)"
              />
            </div>

            <div className="mb-6">
              <Field
                name="message"
                type="text"
                placeholder="Veuillez saisir votre texte ici"
                className="seized"
              ></Field>

              <span className="text-red-400 inline-block">
                <ErrorMessage name="message" />
              </span>
            </div>

            <button type="submit" className="btn_contact">
              envoyer
            </button>
          </Form>
        </div>
      </Formik>
    </>
  );
}

export default Contact;
