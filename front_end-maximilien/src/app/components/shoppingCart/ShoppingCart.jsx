import React from "react";
import { useEffect } from "react";
import useShoppingCartHook from "./useShoppingCartHook";

const ShoppingCart = (props) => {
  const {
    onRemoveProduct,
    onChangeProductQuantity,
    products,
    itemCount,
    Header,
    promoCode,
    ProductListOfShoppingCart,
    Summary,
    discount,
    discountPercent,
    subTotal,
  } = useShoppingCartHook(props);

  return (
    <div>
      <Header itemCount={itemCount} />

      {products.length > 0 ? (
        <div>
          <div className="draggable">
            <ProductListOfShoppingCart
              products={products}
              onChangeProductQuantity={onChangeProductQuantity}
              onRemoveProduct={onRemoveProduct}
            />

            <Summary products={products} discount={discount} />
          </div>
        </div>
      ) : (
        <div className="empty-product">
          {/* <h3>There are no products in your cart.</h3> */}
          {/* <button onClick={() => setProducts(storage)}>Shopping now</button> */}
        </div>
      )}
    </div>
  );
};
export default ShoppingCart;
