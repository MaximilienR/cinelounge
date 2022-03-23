import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel_1 from "../../assets/images/carousel_1.jpg";
import carousel_2 from "../../assets/images/carousel_2.jpg";
import carousel_3 from "../../assets/images/carousel_3.jpg";
import carousel_4 from "../../assets/images/carousel_4.jpg";
const Moncarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay className="carrous">
        <div>
          <img src={carousel_1} />
        </div>
        <div>
          <img src={carousel_2} />
        </div>
        <div>
          <img src={carousel_3} />
        </div>
        <div>
          <img src={carousel_4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Moncarousel;
