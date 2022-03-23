import React from "react";
import { useState, useEffect } from "react";

const RecommendCarouselHook = (componentData) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(20);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [currentItems, setCurrentItems] = useState();
  const [itemsPerPage, setItemsPerpage] = useState(3);

  const indexOfLastitem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastitem - itemsPerPage;

  const onTrigger = (data) => {
    componentData.parentCallback(data);
  };

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
    // window.scrollTo(0, 0);
  };

  const handleNextbtn = () => {
    // window.scrollTo(0, 0);
    console.log(currentPage);

    if (currentPage == componentData.pages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
    // if (currentPage + 1 > maxPageNumberLimit) {
    //   setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    //   setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    // }
  };

  const handlePrevbtn = () => {
    console.log(currentPage);
    if (currentPage == 1) {
      console.log("precedent");
      setCurrentPage(componentData.pages);
    } else {
      // setCurrentPage(Number(e.target.id));
      setCurrentPage(currentPage - 1);
    }
    // window.scrollTo(0, 0);
    // if ((currentPage - 1) % pageNumberLimit == 0) {
    //   setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    //   setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    // }
  };

  useEffect(() => {
    componentData.parentCallback(
      componentData.products.products &&
        componentData.products.products.slice(indexOfFirstItem, indexOfLastitem)
    );
  }, []);

  useEffect(() => {
    componentData.resetCurrentPage ? setCurrentPage(1) : currentPage;

    componentData.parentCallback(
      componentData.products.products &&
        componentData.products.products.slice(indexOfFirstItem, indexOfLastitem)
    );
  }, [componentData.products.products]);

  useEffect(() => {
    // setCurrentItems(dataToPaginate?.slice(indexOfFirstItem, indexOfLastitem));
    componentData.parentCallback(
      componentData.products.products &&
        componentData.products.products.slice(indexOfFirstItem, indexOfLastitem)
    );
  }, [currentPage]);

  const renderPageNumbers = componentData.pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          className={`${
            currentPage == number ? "bg-black text-white" : "bg-white"
          } test p-2 border border-solid border-black cursor-pointer bg-white hover:bg-black hover:text-white `}
          key={number}
          id={number}
          onClick={handleClick}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  return {
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
  };
};

export default RecommendCarouselHook;
