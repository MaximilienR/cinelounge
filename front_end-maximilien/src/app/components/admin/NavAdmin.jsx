import React from "react";
import { NavLink } from "react-router-dom";
import {
  URL_ADMIN_ADD_PRODUIT,
  URL_ADMIN_ADD_THEME,
  URL_ADMIN_CHANGE_THEME,
  URL_ADMIN_HOME,
  URL_ADMIN_LOGOUT,
  URL_ADMIN_MANEGE_COMMENT,
  URL_ADMIN_MANEGE_ORDER,
  URL_ADMIN_MANEGE_RETURN,
  URL_ADMIN_MANEGE_USER,
  URL_ADMIN_MESSAGING,
} from "../../shared/constants/urls/urlConstants";

const NavAdmin = () => {
  return (
    <div className="bg-white w-1/6 text-center">
      <div className="flex flex-col">
        <NavLink exact to={URL_ADMIN_HOME}>
          <h2 className="my-10 font-bold">TABLEAU D'ADMINISTRATION</h2>
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_ADMIN_ADD_PRODUIT}>
          AJOUTER UN PRODUIT
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_ADMIN_ADD_THEME}>
          AJOUTER UNE CATÉGORIE OU UNE SOUS-CATÉGORIE
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_ADMIN_CHANGE_THEME}>
          MODIFIER UNE CATÉGORIE OU UNE SOUS-CATÉGORIE
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_ADMIN_MANEGE_ORDER}>
          GESTION DE COMMANDES
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_ADMIN_MANEGE_RETURN}>
          GESTION DES RETOURS
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_ADMIN_MANEGE_USER}>
          GESTIONS D'UTILISATEUR
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_ADMIN_MANEGE_COMMENT}>
          MODERATION DE COMMANTAIRES
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_ADMIN_MESSAGING}>
          MESSAGERIE
        </NavLink>
        <NavLink className="btn-admin" exact to={URL_ADMIN_LOGOUT}>
          QUITTER LE PANNEAU D'ADMINISTRATION
        </NavLink>
      </div>
    </div>
  );
};

export default NavAdmin;
