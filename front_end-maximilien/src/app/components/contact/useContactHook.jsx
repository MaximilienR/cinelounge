
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import * as yup from "yup";

function useContactHook(componentData) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);
    emailjs
      .sendForm(
        "service_r46xuko",
        "template_r3x2ln6",
        form.current,
        "eNGDOYRnJO0pijwMX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const validate = (value) => {};

  const userSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "Doit contenir moins de 3 lettres")
      .max(10)
      .required("*Ce champ est obligatoire."),
    lastName: yup
      .string()
      .min(3, "Doit contenir moins de 15 lettres")
      .max(10)
      .required("*Ce champ est obligatoire."),
    mail: yup.string().email().required("*Ce champ est obligatoire."),
    mobil: yup.number().min(10, "Doit contenir moins de 10 chiffres"),
    message: yup.string().min(5, "Doit contenir moins de 50 lettres"),
  });
  let user=JSON.parse(localStorage.getItem("user"))
  const initialValues = {
    firstName: user?user.firstName:"",
    lastName: user?user.lastName:"",
    mail: user?user.email:"",
    mobil: "",
    message: "",
    
  };
  
  return { sendEmail, initialValues, userSchema, form };
}

export default useContactHook;
