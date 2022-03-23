import React, { useState } from "react";
import AdvantageUser from "../components/accueil/advantage";
import Promo from "../components/accueil/promo";
import "../assets/styles/index.css";
import MoveInfo from "../components/product/MoveInfo";
 
export default class Product extends React.Component {
  render() {
    return (
      <div>
        <MoveInfo />
        <Description />
        <RecommendsCarousel />
        <Comments />
        <Promo />
        <AdvantageUser />
      </div>
    );
  }
}
