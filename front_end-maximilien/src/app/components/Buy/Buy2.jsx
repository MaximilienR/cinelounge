import React from "react";
import useBuyHook from "./useBuyHook";
import { BsFillCartFill } from "react-icons/bs";

const Buy = (props) => {
  const { addStockage } = useBuyHook();
  return (
    <>
      <button
            className="panierprod cart bg-yellow-custom rounded-lg"
            onClick={() => {
              addStockage(props.product);
            }}
          >
            Ajouter au panier <BsFillCartFill />
          </button>
    </>
  );
};

export default Buy;
