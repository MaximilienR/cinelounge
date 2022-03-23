import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Panier from "../../assets/images/Panier.png";
import Dark from "../../assets/images/Mode dark.png";
import User from "../../assets/images/user.png";
import ShoppingCart from "../../components/shoppingCart/ShoppingCart";
import "../../components/shoppingCart/ShoppingCart.css";
import {
  URL_NAV_CARD,
  URL_NAV_NEW,
  URL_NAV_TOP,
  URL_NAV_SHOP,
  URL_LOGIN,
  URL_PROFILE,
  URL_HOME,
  URL_SEARCH_PAGE,
  URL_SEARCH,
} from "../../shared/constants/urls/urlConstants";
import usenavhash from "./usenavhash";

export default function Navbar() {
  const {
    onTextChange,
    myFunction,
    selectCategory,
    toggleNavSmallScreen,
    toggleModal,
    categorySearchNav,
    toggleDarkTheme,
    searchText,
    isOpen,
    isToggle,
  } = usenavhash();
  return (
    <>
      <div className="bg-blue1-custom pb-2 pt-2">
        <nav className="m-8">
          <Link to={URL_HOME}>
            <img src={Logo} className="m-4 logo_header"></img>
          </Link>
          {localStorage.getItem("user") ? (
            <Link to={URL_PROFILE} className="btn_compte">
              <img src={User}></img>
              {console.log("first")}
            </Link>
          ) : (
            <Link to={URL_LOGIN} className="btn_compte">
              <img src={User}></img>
            </Link>
          )}

          <button onClick={toggleDarkTheme} className="btn_dark">
            <img src={Dark}></img>
          </button>
          <div className="searchSelect">
            <select
              onChange={selectCategory}
              name="read"
              className="m-1 read rounded-2xl"
            >
              <option value="">Voir tout</option>
              <option value="films">Films</option>
              <option value="series">Séries</option>
              <option value="goodies">Goodies</option>
            </select>
          </div>
          <div className="searchBar">
            <input
              type="text"
              placeholder="rechercher un titre"
              className="search rounded-2xl"
              onChange={onTextChange}
            />
            <Link
              to={`/rayons/${searchText}`}
              replace
              className="searchButton m-4 fa fa-search"
            ></Link>
          </div>
        </nav>
      </div>
      <div className="global">
        <nav className="menu">
          <div>
            <ul className="topnav menuNav">
              <li className="barre diff ">
                <Link
                  to={URL_HOME}
                  className=" font-large px-10 py-2 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900"
                >
                  ACCUEIL
                </Link>
              </li>
              <li className="barre">
                <Link
                  className=" font-large px-10 py-2 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900"
                  to={{
                    pathname: "/rayons",
                    state: {
                      searchText: searchText,
                      categorySearchNav: categorySearchNav,
                      prevPath: "Accueil",
                    },
                  }}
                >
                  RAYONS
                </Link>
              </li>
              <li className="barre">
                <Link
                  to={{
                    pathname: URL_NAV_TOP,
                    state: {
                      prevPath: location.pathname,
                    },
                  }}
                  className="font-large px-10 py-2 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900"
                >
                  TOP VENTES
                </Link>
              </li>
              <li className="barre">
                <Link
                  to={URL_NAV_NEW}
                  className=" font-large px-10 py-2 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900"
                >
                  NOUVEAUTÉS
                </Link>
              </li>
              <li className="barre">
                <Link
                  to={URL_NAV_CARD}
                  className=" font-large px-10 py-2 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900"
                >
                  CARTE CADEAU
                </Link>
              </li>
              <li className="barre">
                <Link
                  to={URL_NAV_SHOP}
                  className=" font-large px-10 py-2 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900"
                >
                  ACHETER À NOUVEAU
                </Link>
              </li>
              <li className="icon">
                <a
                  className=" font-large px-10 py-2 text-white rounded-lg"
                  onClick={myFunction}
                >
                  ☰
                </a>
              </li>
              <div className="flex items-center justify-center h-full">
                <button
                  className="py-2 px-4 text-white rounded"
                  onClick={toggleModal}
                >
                  <img src={Panier}></img>
                </button>
              </div>
              <div
                className={
                  isToggle
                    ? "fixed z-10 top-0 left-0 "
                    : "fixed z-10 top-0 left-0 hidden"
                }
                id="modal"
              >
                <div className="flex items-center justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="fixed">
                    <div className="absolute inset-0" />
                  </div>
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                    &#8203;
                  </span>
                  <div
                    className="inline-block align-center bg-white rounded-lg text-left shadow-xl"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"></div>

                    <div className="shoppingCart">
                      {localStorage.getItem("Panier") && (
                        <ShoppingCart
                          productsShopping={localStorage.getItem("Panier")}
                        />
                      )}
                    </div>
                    <div className="bg-gray-200 px-4 py-3 text-right">
                      <button
                        type="button"
                        className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                        onClick={toggleModal}
                      >
                        Fermer
                      </button>
                      <button
                        type="button"
                        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                      >
                        Commander
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
