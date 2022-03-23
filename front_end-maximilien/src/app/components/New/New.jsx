import React from "react";
import Promo from "../accueil/promo";
import AdvantageUser from "../accueil/advantage";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import useTopSalesHook from "../topSales/useTopSalesHook";
import ListOfProducts from "../product/ListOfProducts";
import Pagination from "../pagination/Pagination";
import Aside from "../sidebar/AsideComponent";
import NewGlob from "./NewGlob";
import("../../assets/styles/NewView.css");
const New = () => {
  const {
    filterOn,
    filteredData,
    products,
    filters,
    filterProducts,
    paginatedData,
    productsToList,
    pages,
  } = useTopSalesHook();
  return (
    <>
      <div className="Nouveautes">
        <h3>
          <BreadCrumb
            viewName={"Nouveautés"}
            length={filterOn ? [filteredData.length] : [products.length]}
            breadCrumb={filters}
            parentFilter={filterProducts}
          />
        </h3>
        <h2 className="titlepage">Nouveauté</h2>
        <Aside parentFilter={filterProducts} />
        <NewGlob />
        <ListOfProducts
          products={paginatedData}
          noItems={paginatedData.length == 0 ? true : false}
        />
        {products.length ? (
          <Pagination
            parentCallback={productsToList}
            products={filterOn ? filteredData : products}
            resetCurrentPage={filterOn ? true : false}
            nofilter={products}
            filterOn={filterOn}
            reverse={true}
            pages={pages}
          />
        ) : (
          <span>loading ..</span>
        )}
      </div>
      <Promo />
      <AdvantageUser />
    </>
  );
};

export default New;
