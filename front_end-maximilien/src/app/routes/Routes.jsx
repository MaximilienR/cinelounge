import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  URL_SEARCH,
  URL_SEARCH_PAGE,
  URL_HOME,
  URL_LOGIN,
  URL_ADMIN_HOME,
  URL_PROFILE,
  URL_ADMIN_CHANGE_PRODUIT,
  URL_ADMIN_ADD_THEME,
  URL_ADMIN_CHANGE_THEME,
  URL_ADMIN_MANEGE_USER,
  URL_ADMIN_MESSAGING,
  URL_ADMIN_LOGOUT,
  URL_SIGN_UP,
  URL_NAV_TOP,
  URL_NAV_NEW,
  URL_NAV_CARD,
  URL_NAV_SHOP,
  URL_FOOT_CONTACT,
  URL_PRODUCT,
  URL_RESET_ENVOYE,
  URL_RESET_PASSWORD,
  URL_ADMIN_ADD_PRODUIT,
  URL_ADMIN_MANEGE_ORDER,
  URL_ADMIN_MANEGE_RETURN,
  URL_ADMIN_MANEGE_COMMENT,
  URL_RAYONS,
  URL_CONFIRM,
  URL_ADDRESSES,
  URL_ENVIE,
  URL_RETOURS,
  URL_COMMANDES,
  URL_PAIEMENT,
} from "../shared/constants/urls/urlConstants";
import { customHistory } from "../shared/services/historyServices";
import AjouterUnTheme from "../components/admin/AjouterUnTheme";
import ModifierUnTheme from "../components/admin/ModifierUnTheme";
import GererUnUtilisateur from "../components/admin/GererUnUtilisateur";
import Messagerie from "../components/admin/Messagerie";
import LogOut from "../components/admin/LogOut";
import SignUp from "../components/account/SignUp";
import NotFound from "../components/NotFound/NotFound";
import CardView from "../views/CardView";
import ShopView from "../views/ShopView";
import TopSalesView from "../views/TopSales";
import Accueil from "../views/accueil";
import Admin from "../views/admin";
import ViewSearch from "../views/ViewSearch";
// import NewView from "../views/nouveaute/NewView";
import ContactView from "../views/ContactView";
import Product from "../views/product";
import Aside from "../components/sidebar/AsideComponent";
import ReiniEnvoye from "../views/ReiniEnvoye";
import ResetPassword from "../views/ResetPassword";
import ConnexionView from "../views/ConnectView";
import AjouterUnProduit from "../components/admin/AjouterUnProduit";
import Profile from "../../app/views/profile";
import AuthService from "../services/auth.service";
import { useState, useEffect } from "react";
import { PrivateRoute } from "../shared/components/utils-components/PrivateRoute";
import MoveInfo from "../components/product/MoveInfo";
import GestionDeCommandes from "../components/admin/GestionDeCommandes";
import GestionDesRetours from "../components/admin/GestionDesRetours";
import ModerationDeCommentaires from "../components/admin/ModerationDeCommentaires";
import PageProduct from "../components/product/productPage";
import Search from "../components/search/Search";
import Rayon from "../views/Rayons";
import News from "../views/News";
import ProfileView from "../../app/views/profile";
import adresse from "../views/adresse";
import paiement from "../views/paiement";
import commandes from "../views/commandes";
import retours from "../views/retours";
import favoris from "../views/favoris";

//  Search
/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
  const { getCurrentUser } = AuthService();
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  // useEffect(() => {
  //   onLoad();
  // }, []);

  // function onLoad() {
  useEffect(() => {
    const user = getCurrentUser();
    // console.log(user.roles);
    if (user) {
      if (user.roles.includes("ROLE_ADMIN")) {
        userHasAuthenticated(true);
      }
    }
  }, []);

  return (
    <Switch history={customHistory}>
      {isAuthenticated ? (
        <Route exact path={URL_ADMIN_HOME} component={Admin} />
      ) : null}

      {/* <PrivateRoute
        path={URL_ADMIN_HOME}
        component={AdminHomeView}
        roles={["ROLE_ADMIN"]}
      /> */}
      <Route path={URL_SIGN_UP} component={SignUp} />
      <Route exact path={URL_HOME} component={Accueil} />
      <Route exact path={URL_ADMIN_ADD_PRODUIT} component={AjouterUnProduit} />
      {/* <Route
        exact
        path={URL_ADMIN_CHANGE_PRODUIT}
        component={ModifierUnProduit}
      /> */}
      <Route exact path={URL_ADMIN_ADD_THEME} component={AjouterUnTheme} />
      <Route exact path={URL_ADMIN_CHANGE_THEME} component={ModifierUnTheme} />
      <Route
        exact
        path={URL_ADMIN_MANEGE_USER}
        component={GererUnUtilisateur}
      />
      <Route exact path={URL_ADMIN_MESSAGING} component={Messagerie} />
      <Route
        exact
        path={URL_ADMIN_MANEGE_ORDER}
        component={GestionDeCommandes}
      />
      <Route
        exact
        path={URL_ADMIN_MANEGE_RETURN}
        component={GestionDesRetours}
      />
      <Route
        exact
        path={URL_ADMIN_MANEGE_COMMENT}
        component={ModerationDeCommentaires}
      />
      <Route exact path={URL_ADMIN_LOGOUT} component={LogOut} />
      <Route exact path={URL_NAV_TOP} component={TopSalesView} />
      <Route exact path={URL_RAYONS} component={Rayon} />
      <Route exact path={URL_NAV_NEW} component={News} />
      <Route exact path={URL_NAV_CARD} component={CardView} />
      <Route exact path={URL_NAV_SHOP} component={ShopView} />
      <Route exact path={URL_LOGIN} component={ConnexionView} />
      <Route exact path={URL_FOOT_CONTACT} component={ContactView} />
      <Route exact path={URL_SEARCH} component={Search} />
      <Route exact path={URL_SEARCH_PAGE} component={Search} />
      <Route exact path={URL_PRODUCT} component={PageProduct} />
      <Route exact path={URL_RESET_PASSWORD} component={ResetPassword} />
      {/* <Route exact path={URL_PRODUCT} component={Product} /> */}
      <Route exact path={URL_RESET_ENVOYE} component={ReiniEnvoye} />
      <Route exact path={URL_PROFILE} component={Profile} />
      <Route exact path={URL_CONFIRM} component={ConnexionView} />
      <Route exact path={URL_ADDRESSES} component={adresse} />
      <Route exact path={URL_PAIEMENT} component={paiement} />
      <Route exact path={URL_COMMANDES} component={commandes} />
      <Route exact path={URL_RETOURS} component={retours} />
      <Route exact path={URL_ENVIE} component={favoris} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
