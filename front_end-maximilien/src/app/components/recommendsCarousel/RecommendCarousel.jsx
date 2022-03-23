import React from "react";
import RecommendCarouselHook from "./useRecommendCarouselHook";

const RecommendCarousel = (props) => {
  let data = props;
  const {
    currentPage,
    pageNumberLimit,
    maxPageNumberLimit,
    minPageNumberLimit,
    itemsPerPage,
    indexOfFirstItem,
    indexOfLastitem,
    onTrigger,
    handleClick,
    handleNextbtn,
    handlePrevbtn,
    renderPageNumbers,
  } = RecommendCarouselHook(data);

  return (
    <div>
      <>
        <div>
          <ul>
            <li className="prevedent2">
              <button className="gauche2" onClick={handlePrevbtn}>
                Prev
              </button>
            </li>
            <div className="flex justify-center mt-5">
              <ul className="flex list-none">{renderPageNumbers}</ul>
            </div>
            <li className="next2">
              <button className="droite2" onClick={handleNextbtn}>
                Next
              </button>
            </li>
          </ul>
        </div>
      </>
    </div>
  );
};

export default RecommendCarousel;
