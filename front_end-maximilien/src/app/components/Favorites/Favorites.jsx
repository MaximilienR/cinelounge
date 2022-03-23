import React from "react";
import Vector from "../../assets/images/Vector.png";
import Coeur from "../../assets/images/Coeur.png";
import useFavoritesHook from "./useFavoritesHook";
const Favorites = (props) => {
  const { addStockage, suppStockage } = useFavoritesHook(props);
  return (
    <div>
      <div className="filmtitle m-6">
        {!localStorage.getItem("Favorites")?.includes(props.product._id) ? (
          <div
            onClick={() => {
              addStockage(props.product);
            }}
          >
            <img className="coeurta" src={Vector} />
          </div>
        ) : (
          <div
            onClick={() => {
              suppStockage(props.product);
            }}
          >
            <img className="coeurta" src={Coeur} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
