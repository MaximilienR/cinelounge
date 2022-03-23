import React from "react";
import "../assets/styles/EmptySearch.css";

const EmptySearch = () => {
  return (
    <>
      <div className="empty"></div>
      <div>
        <h3>Oups !</h3>
        <p>Il n'y a aucun résultat pour votre recherche</p>
        <p>
          l'équipe CinéLounge met tout en oeuvre pour vous proposer
          prochainement toujours plus de produits.
        </p>
      </div>
    </>
  );
};

export default EmptySearch;
