import React from "react";
import { useState, useEffect } from "react";
const useBuyHook = () => {
  const [isStoring, setIsStoring] = useState();
  const [listOfShop, setListOfShop] = useState();
  function addStockage(product) {
    var a = [];
    a = JSON.parse(localStorage.getItem("Panier")) || [];
    a.push(product);
    setListOfShop(a);
    localStorage.setItem("Panier", JSON.stringify(a));
  }

  useEffect(() => {
    if (localStorage.getItem("Panier") === null) {
      localStorage.setItem("Panier", JSON.stringify([]));
    }
    if (isStoring == true) {
      localStorage.setItem("Panier", JSON.parse([listOfShop]));
      setIsStoring(!isStoring);
    }
  }, [listOfShop]);

  const suppStockage = (product) => {
    let settings = JSON.parse(localStorage.getItem("Panier"));

    let found = settings.find((x) => x === props.product._id);
    settings.splice(settings.indexOf(found), 1);
    setListOfShop(localStorage.getItem("Panier"));
    localStorage.setItem("Panier", JSON.stringify(settings));
  };

  return { addStockage, suppStockage };
};

export default useBuyHook;
