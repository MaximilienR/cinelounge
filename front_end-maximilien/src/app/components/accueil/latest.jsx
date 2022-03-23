import React from "react";
import News from "../../assets/images/news.png";
import Movie from "../../assets/images/movie.jpg";
import { Link } from "react-router-dom";
import Top from "../../assets/images/top.jpg";
import {
  URL_NAV_CARD,
  URL_NAV_NEW,
  URL_NAV_TOP,
  URL_NAV_SHOP,
  URL_HOME,
  URL_SEARCH_PAGE,
} from "../../shared/constants/urls/urlConstants";
export default function Latest() {
  return (
    <div className="flex flex-wrap place-content-evenly text-center mt-5">
      <div className="flex flex-col items-center mx-4 ">
        <img src={News} className="taille_img_acc max-w-lg" />
        <div className="btnaccueil">
          <Link to={URL_NAV_NEW}>Nouveautés</Link>
        </div>
      </div>
      <div className="flex flex-col items-center mx-4">
        <img src={Movie} className="taille_img_acc max-w-lg" />
        <div className="btnaccueil">
          <a href="/">Derniers films</a>
        </div>
      </div>
      <div className="flex flex-col items-center mx-4">
        <img src={Top} className="taille_img_acc max-w-lg" />
        <div className="btnaccueil">
          <Link
            to={{
              pathname: URL_NAV_TOP,
              state: {
                prevPath: location.pathname,
              },
            }}
          >
            Top ventes
          </Link>
        </div>
      </div>
    </div>
  );
}
