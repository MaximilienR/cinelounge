import React from "react";
import useBuyHook from "./useBuyHook";
import Panier2 from "../../assets/images/panier2.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Buy = (props) => {
  const { addStockage } = useBuyHook();
  return (
    <>
      <li>
        <img
          className="panier2"
          src={Panier2}
          href=""
          onClick={() => {
            addStockage(props);
            toast("🛒 Ajouté au panier !", {
              position: "top-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
        />
      </li>
    </>
  );
};

export default Buy;
