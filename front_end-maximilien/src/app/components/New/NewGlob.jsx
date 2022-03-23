import React from "react";
import stars_wars from "../../assets/images/news.png";
import baby_yoda from "../../assets/images/yoda2.png";
const NewGlob = () => {
  return (
    <>
      <div className="flex_cont">
        <a href="/nouveautés">
          <img className="taille" src={stars_wars} />
        </a>
        <a href="/nouveautés">
          <img className="taille" src={baby_yoda} />
        </a>
      </div>
    </>
  );
};

export default NewGlob;
