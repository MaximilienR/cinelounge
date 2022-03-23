import React from "react";
import AdvantageUser from "../../components/accueil/advantage";
import Promo from "../../components/accueil/promo";
import Moncarousel from "./carousel";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import ListOfProducts from "../product/ListOfProducts";
import Pagination from "../../components/pagination/Pagination";
import Aside from "../sidebar/AsideComponent";
import "../../assets/styles/topview.css";
import useTopSalesHook from "./useTopSalesHook";

const TopSales = () => {
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
  } = useTopSalesHook();

  return (
    <>
      <div className="TopVentes">
        <div className="topright">
          <h3>
            <BreadCrumb
              viewName={"Top Ventes"}
              length={filterOn ? [filteredData.length] : [products.length]}
              breadCrumb={filters}
              parentFilter={filterProducts}
            />
          </h3>
          <h2>TOP VENTES</h2>
          <Moncarousel />
          <Aside parentFilter={filterProducts} />
          <div>
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
                pages={pages}
              />
            ) : (
              <span>loading ..</span>
            )}
          </div>
        </div>
        <Promo />
        <AdvantageUser />
      </div>
    </>
  );
};

export default TopSales;
