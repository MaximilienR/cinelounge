import React from "react";
import { NavLink } from "react-router-dom";
import {
  URL_PROFILE,
  URL_ADDRESSES,
  URL_ENVIE,
  URL_RETOURS,
  URL_COMMANDES,
  URL_PAIEMENT,
  URL_LOGIN,
  URL_NAV_CARD,
  URL_UPDATE_PASSWORD,
} from "../../shared/constants/urls/urlConstants";
const Navbarprofile = () => {
  const deco = () => {
    localStorage.removeItem("user");
  };
  return (
    <div className="bg-white w-1/6 text-center">
      <div className="flex flex-col">
        <NavLink exact to={URL_PROFILE}>
          <h2 className="my-10 font-bold">MON COMPTE</h2>
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_PROFILE}>
          Mes informations
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_UPDATE_PASSWORD}>
          Modififer mon mot de passe
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_ADDRESSES}>
          Mes addresses
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_PAIEMENT}>
          Mes moyens de paiement
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_COMMANDES}>
          Mes commandes
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_NAV_CARD}>
          Ma carte cadeau
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_RETOURS}>
          Retours
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_ENVIE}>
          Ma liste d'envies
        </NavLink>

        <a href={URL_LOGIN} onClick={deco} className="btn-admin centredeco">
          Se déconnecter
        </a>
      </div>
    </div>
  );
};

export default Navbarprofile;
