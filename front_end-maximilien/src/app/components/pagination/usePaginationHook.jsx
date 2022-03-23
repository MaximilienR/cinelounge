import React from "react";
import { useState, useEffect } from "react";

const PaginationHook = (componentData) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [currentItems, setCurrentItems] = useState();
  const [itemsPerPage, setItemsPerpage] = useState(5);

  const indexOfLastitem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastitem - itemsPerPage;

  let productsItems;
  if (componentData.reverse) {
    productsItems = componentData.products.reverse();
  } else {
    productsItems = componentData.products;
  }

  const onTrigger = (data) => {
    componentData.parentCallback(data);
  };

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
    window.scrollTo(0, 720);
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 720);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 720);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  useEffect(() => {
    componentData.parentCallback(
      componentData.products &&
        productsItems.slice(indexOfFirstItem, indexOfLastitem)
    );
  }, []);

  useEffect(() => {
    componentData.resetCurrentPage ? setCurrentPage(1) : currentPage;

    componentData.parentCallback(
      componentData.products &&
        productsItems.slice(indexOfFirstItem, indexOfLastitem)
    );
  }, [componentData.products]);

  useEffect(() => {
    componentData.parentCallback(
      componentData.products &&
        productsItems.slice(indexOfFirstItem, indexOfLastitem)
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

export default PaginationHook;
