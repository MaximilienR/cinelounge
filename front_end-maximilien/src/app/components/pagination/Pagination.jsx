import React from "react";
import PaginationHook from "./usePaginationHook";
const Pagination = (props) => {
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
  } = PaginationHook(data);

  return (
    <>
      {renderPageNumbers < 1 ? null : (
        <ul className="pagiespac">
          <li className="prevedent">
            <button
              className="gauche"
              onClick={handlePrevbtn}
              disabled={currentPage == props.pages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          <div className="flex justify-center mt-5">
            <ul className="flex list-none">{renderPageNumbers}</ul>
          </div>
          <li className="next">
            <button
              className="droite"
              onClick={handleNextbtn}
              disabled={
                currentPage == props.pages[props.pages.length - 1]
                  ? true
                  : false
              }
            >
              Next
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default Pagination;
