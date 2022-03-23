import React from "react";
import { useState, useEffect } from "react";
const useFavoritesHook = (componentData) => {
  const [listOfFavorites, setListOfFavorites] = useState();
  const [isStoring, setIsStoring] = useState();

  const addStockage = (product) => {
    var a = [];
    a = JSON.parse(localStorage.getItem("Favorites")) || [];
    a.push(product);
    setListOfFavorites(a);
    localStorage.setItem("Favorites", JSON.stringify(a));
  };
  const suppStockage = (product) => {
    let settings = JSON.parse(localStorage.getItem("Favorites"));
    // console.log(settings);

    let found = settings.find((x) => x === componentData.product._id);
    // console.log(settings.indexOf(found));
    settings.splice(settings.indexOf(found), 1);
    // console.log(settings);
    setListOfFavorites(localStorage.getItem("Favorites"));
    localStorage.setItem("Favorites", JSON.stringify(settings));
  };

  useEffect(() => {
    if (localStorage.getItem("Favorites") === null) {
      localStorage.setItem("Favorites", JSON.stringify([]));
    }
    if (isStoring == true) {
      localStorage.setItem("Favorites", JSON.parse([listOfFavorites]));
      setIsStoring(!isStoring);
    }
  }, [listOfFavorites]);
  return { addStockage, suppStockage };
};

export default useFavoritesHook;
