import React from "react";
import AdvantageUser from "../../components/accueil/advantage";
import Promo from "../../components/accueil/promo";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import RecommendCarousel from "../recommendsCarousel/RecommendCarousel";
import useTopSalesHook from "../topSales/useTopSalesHook";
import MoveInfo from "./MoveInfo";
import ListOfCarouselProduct from "../topSales/ListOfCarouselProduct";
import useProductHook from "./useProductHook";

const ProductPage = (props) => {
  const { productsToList, paginatedData, pages } = useTopSalesHook();
  const { product, products } = useProductHook();
  return (
    <>
      <div className="productPage">
        <div className="topright">
          <h2>Page Produit</h2>
          <div>
            <MoveInfo product={product ? product : props} />
            <ListOfCarouselProduct
              allProducts={products}
              products={paginatedData}
              noItems={paginatedData.length == 0 ? true : false}
            />
            {products && (
              <RecommendCarousel
                pages={[Math.ceil(products.products.length / 3)]}
                parentCallback={productsToList}
                products={products}
              />
            )}
          </div>
        </div>
      </div>
      <Promo />
      <AdvantageUser />
    </>
  );
};

export default ProductPage;
