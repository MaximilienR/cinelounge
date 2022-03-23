import React from "react";
import Accessories from "../../assets/images/accessory.jpg";
import GOT from "../../assets/images/got.jpg";
import HP from "../../assets/images/HP.jpg";
import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkThemeContext";

export default function Shortcut() {
  const { toggleDarkTheme, darkTheme } = useContext(DarkThemeContext);
  return (
    <div>
      <p
        className={
          darkTheme
            ? "font-mono text-dark text-2xl mt-16 text-center"
            : "font-mono text-white text-2xl mt-16 text-center"
        }
      >
        Sélection spéciale de films, séries et accessoires pour votre famille
      </p>
      <div className="flex flex-wrap place-content-evenly text-center mt-5">
        <div className="flex flex-col items-center relative mb-8">
          <img src={Accessories} className="taille_img_acc max-w-xs rounded rounded-lg relative absolute" />
          <a className="txtacc absolute bottom-0" href="/">Accessoires</a>
        </div>
        <div className="flex flex-col items-center relative mb-8">
          <img src={GOT} className="taille_img_acc max-w-4xl rounded-lg relative absolute" />
          <a className="txtacc2 absolute bottom-0" href="/">Top séries de la semaine</a>
        </div>
        <div className="flex flex-col items-center mx-4 relative mb-8">
          <img src={HP} className="taille_img_acc max-w-4xl rounded-lg relative games absolute" />
          <a className="txtacc3 absolute bottom-0" href="/">Jeux et cadeaux</a>
        </div>
      </div>
    </div>
  );
}

// fdsfdsfdsfdf
// ....
