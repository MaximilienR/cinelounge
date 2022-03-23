import React from 'react';
import * as yup from 'yup'

const useResetpasswordHook = (props) => {
(function(){
    emailjs.init("user_ZRX4QHdWh9TIypYqK1eyN");
})();

function sendmail(){
    let userEmail=document.getElementsByClassName("inputReset").value;
        let contactParams={
         from_email: userEmail};

         emailjs.send('service_9s91o25','template_m3rdigc',contactParams).then(function(res){})
} 
const mailSchema = yup.object().shape({
     
    mail: yup.string().email().required('*Ce champ est obligatoire.'),
     
})
const mailValues={
     mail:'',
   }

    return (
        {sendmail,mailSchema,mailValues}
    );
};

export default useResetpasswordHook;