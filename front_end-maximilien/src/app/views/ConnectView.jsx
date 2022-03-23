import React from "react";
import "../assets/styles/connexion.css";
import "react-toastify/dist/ReactToastify.css";
import ConnectView from "../components/connect/ConnectView";

const ConnexionView = (props) => {
  return (
    <>
      <ConnectView {...props} />
    </>
  );
};

export default ConnexionView;
