import React, { useEffect, useState } from "react";
import "react-dropdown/style.css";
import "./Search.css";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import Aside from "../sidebar/AsideComponent";
import useSearchHook from "./useSearchHook";
import ListOfProducts from "../product/ListOfProducts";
import Pagination from "../pagination/Pagination";
const ViewSearch = (props) => {
  const {
    products,
    paginatedData,
    filteredData,
    filterProducts,
    productsToList,
    pages,
    filterOn,
    filters,
    isLoaded,
    searchTerm,
    breadCrumbNumber,
  } = useSearchHook();
  console.log(paginatedData.length);
  return (
    <>
      <div className="TopVentes">
        <div className="topright">
          <h3>
            <BreadCrumb
              viewName={"Rayons"}
              length={breadCrumbNumber}
              searchTerm={searchTerm}
              parentFilter={filterProducts}
            />
          </h3>
          <h2>Résultat de recherche</h2>
          <Aside parentFilter={filterProducts} />
          <div>
            <ListOfProducts
              searchTerm={searchTerm}
              products={paginatedData}
              noItems={paginatedData.length === 0 ? true : false}
            />
            {products.length ? (
              <Pagination
                parentCallback={productsToList}
                products={filterOn ? filteredData : products}
                resetCurrentPage={filterOn ? true : false}
                nofilter={products}
                filterOn={filterOn}
                pages={pages}
              />
            ) : (
              <span>loading ..</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewSearch;
