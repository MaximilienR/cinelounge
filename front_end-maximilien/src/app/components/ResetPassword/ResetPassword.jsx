import React from 'react';
import {Formik,Form,Field,ErrorMessage } from "formik";
import { Link } from 'react-router-dom';
import { URL_RESET_ENVOYE } from '../../shared/constants/urls/urlConstants';
import useResetpasswordHook from './useResetpasswordHook';

const ResetPassword =(props)=> {
    const {sendmail,mailSchema,mailValues} = useResetpasswordHook(props);
  return <>
            <Formik validationSchema={mailSchema} 
            initialValues={mailValues} 
            onSubmit={values => {
                console.log(values);
          }}>
                <Form>
            <div className='form_Connect'>
            <h1 className='title_modal'>Reinitialiser votre  mot de passe</h1>
            <Field name="mail" type="mail" placeholder="Veuillez entrer votre email svp " className="inputReset"  />
            <span className='text-red-400 inline-block' >  <ErrorMessage name='mail'/> </span>
            <button onClick={sendmail}  type="submit"  className="btn_contact"><Link to={URL_RESET_ENVOYE}>envoyer</Link></button>
        </div>
        </Form>
        </Formik>
        </>
}

export default ResetPassword;
