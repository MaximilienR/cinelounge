import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="page_404">
      <div className="containerr">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Vous semblez perdu !</h3>

                <p>La page recherchée n'existe pas!</p>

                <a href="/" className="link_404">
                  Retourner à l'accueil
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
