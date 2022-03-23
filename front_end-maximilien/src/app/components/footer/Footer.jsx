import React from "react";
import Logo from "../../assets/images/logo.png";
import { URL_FOOT_CONTACT,URL_LOGIN } from "../../shared/constants/urls/urlConstants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} className="logo_footer" />
      <div className="menu_footer">
        <ul>
          <li> <Link to={URL_LOGIN}> Mon compte </Link></li>
          <li>
            <Link to={URL_FOOT_CONTACT}> Nous contacter </Link>
          </li>
          <li>Support</li>
        </ul>

        <ul>
          <li >A propos</li>
          <li >Boutique</li>
          <li >Retours</li>
        </ul>

        <ul>
          <li>Newsletter</li>
          <li>Faq</li>
          <li>Recrutement</li>
        </ul>

        <ul>
          <li>Mentions Légales</li>
          <li>Utilisation des cookies</li>
          <li>Conditions générales de ventes</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
