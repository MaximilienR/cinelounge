import React from "react";
import { URL_ADMIN_HOME } from "./../shared/constants/urls/urlConstants";

const HomeView = ({ history }) => {
  return (
    <div>
      <p className="text-primary -500 font-extrabold">HOME</p>
      {
        <button
          className="btn btn-primary"
          onClick={() => history.push(URL_ADMIN_HOME)}
        >
          Admin
        </button>
      }
    </div>
  );
};

export default HomeView;
