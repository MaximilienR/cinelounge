import React from 'react';
import { URL_HOME } from '../shared/constants/urls/urlConstants';
import {Link} from 'react-router-dom'

const ReiniEnvoye = () => {
    return (
        <div>
        <div className='form_Connect'>
        <h1 className='title_modal'>Reinitialiser envoyée</h1>
        <p className='text_contact'>Veuillez consulter votre mail</p>
        <button type="submit"  className="btn_contact"> <Link to={URL_HOME}  > Retourner à l'accueil</Link></button>

      </div>
        </div>
    );
};

export default ReiniEnvoye;