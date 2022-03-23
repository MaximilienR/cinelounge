import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  URL_UPDATE_PASSWORD,
} from "../shared/constants/urls/urlConstants";
// import HomeView from "../views/HomeView";
// import { ROLE_ADMIN } from "../shared/constants/rolesConstant";
// import ModifierUnProduit from "../components/admin/ModifierUnProduit";
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
import Home from "../views/accueil";
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
import Profile from "../views/profile";
import AuthService from "../services/auth.service";
import { useState, useEffect } from "react";
import MoveInfo from "../components/product/MoveInfo";
import GestionDeCommandes from "../components/admin/GestionDeCommandes";
import GestionDesRetours from "../components/admin/GestionDesRetours";
import ModerationDeCommentaires from "../components/admin/ModerationDeCommentaires";
import PageProduct from "../components/product/productPage";
import Search from "../components/search/Search";
import Rayon from "../views/Rayons";
import News from "../views/News";
import AdminRoute from "../components/AdminRoute";
import ProtectedRoute from "../components/ProtectedRoute";
import Navbar from "../components/header/nav";
import Footer from "../components/footer/Footer";
import Adresse from "../views/adresse";
import Paiement from "../views/paiement";
import Commandes from "../views/commandes";
import Retours from "../views/retours";
import Favoris from "../views/favoris";
import UpdatePassword from "../views/UpdatePassword";
//  Search
/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routing = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    // console.log(user.roles);
    if (user && user.roles) {
      if (user.roles.includes("ROLE_ADMIN")) {
        userHasAuthenticated(true);
      }
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route exact path={URL_HOME} element={<Home />} />
        {/* ADMIN ROUTES */}
        <Route exact path="/" element={<AdminRoute />}>
          <Route exact path={URL_ADMIN_HOME} element={<Admin />} />
          <Route
            exact
            path={URL_ADMIN_ADD_PRODUIT}
            element={<AjouterUnProduit />}
          />

          <Route
            exact
            path={URL_ADMIN_ADD_THEME}
            element={<AjouterUnTheme />}
          />
          <Route
            exact
            path={URL_ADMIN_CHANGE_THEME}
            element={<ModifierUnTheme />}
          />
          <Route
            exact
            path={URL_ADMIN_MANEGE_USER}
            element={<GererUnUtilisateur />}
          />
          <Route exact path={URL_ADMIN_MESSAGING} element={<Messagerie />} />
          <Route
            exact
            path={URL_ADMIN_MANEGE_ORDER}
            element={<GestionDeCommandes />}
          />
          <Route
            exact
            path={URL_ADMIN_MANEGE_RETURN}
            element={<GestionDesRetours />}
          />
          <Route
            exact
            path={URL_ADMIN_MANEGE_COMMENT}
            element={<ModerationDeCommentaires />}
          />
          <Route exact path={URL_PROFILE} element={<Profile />} />
          <Route exact path={URL_PROFILE} element={<Profile />} />
          <Route exact path={URL_ADDRESSES} element={<Adresse />} />
          <Route exact path={URL_PAIEMENT} element={<Paiement />} />
          <Route exact path={URL_COMMANDES} element={<Commandes />} />
          <Route exact path={URL_RETOURS} element={<Retours />} />
          <Route exact path={URL_ENVIE} element={<Favoris />} />
        </Route>

        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path={URL_PROFILE} element={<Profile />} />
          <Route exact path={URL_ADDRESSES} element={<Adresse />} />
          <Route exact path={URL_PAIEMENT} element={<Paiement />} />
          <Route exact path={URL_COMMANDES} element={<Commandes />} />
          <Route exact path={URL_RETOURS} element={<Retours />} />
          <Route exact path={URL_ENVIE} element={<Favoris />} />
          <Route
            exact
            path={URL_UPDATE_PASSWORD}
            element={<UpdatePassword />}
          />
        </Route>

        <Route path={URL_SIGN_UP} element={<SignUp />} />
        <Route exact path={URL_ADMIN_LOGOUT} element={<LogOut />} />
        <Route exact path={URL_NAV_TOP} element={<TopSalesView />} />
        <Route exact path={URL_RAYONS} element={<Rayon />} />
        <Route exact path={URL_NAV_NEW} element={<News />} />
        <Route exact path={URL_NAV_CARD} element={<CardView />} />
        <Route exact path={URL_NAV_SHOP} element={<ShopView />} />
        <Route exact path={URL_LOGIN} element={<ConnexionView />} />
        <Route exact path={URL_FOOT_CONTACT} element={<ContactView />} />
        <Route exact path={URL_SEARCH} element={<Search />} />
        <Route exact path={URL_SEARCH_PAGE} element={<Search />} />
        <Route exact path={URL_PRODUCT} element={<PageProduct />} />
        <Route exact path={URL_RESET_PASSWORD} element={<ResetPassword />} />
        <Route exact path={URL_RESET_ENVOYE} element={<ReiniEnvoye />} />

        <Route exact path={URL_CONFIRM} element={<ConnexionView />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
