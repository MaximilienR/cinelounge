import React from "react";
import { useEffect, useState } from "react";

const useShoppingCartHook = (props) => {
  let storage = localStorage.getItem("Panier");
  // ? localStorage.getItem("Panier")
  // : [];
  const CLONE_PRODUCTS = JSON.parse(props.productsShopping);
  const [products, setProducts] = React.useState(CLONE_PRODUCTS);
  const [promoCode, setPromoCode] = React.useState("");
  const [discountPercent, setDiscountPercent] = React.useState(0);
  const itemCount = products.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);
  const subTotal = products.reduce((total, product) => {
    return total + product.price * +product.quantity;
  }, 0);
  // const total = products.reduce((total, product) => {
  //   product.price * +product.quantity;
  // }, 0);
  const discount = (subTotal * discountPercent) / 100;

  useEffect(() => {
    setProducts(JSON.parse(props.productsShopping));
  }, [props]);

  const onChangeProductQuantity = (index, event) => {
    const value = event.target.value;
    const valueInt = parseInt(value);
    const cloneProducts = [...products];

    useEffect(() => {
      setTotal = products.reduce((total, product) => {
        products.price * +product.quantity;
      }, 0);
    }, []);

    // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
    if (value === "") {
      cloneProducts[index].quantity = value;
    } else if (valueInt > 0 && valueInt < 100) {
      cloneProducts[index].quantity = valueInt;
    }
    setProducts(cloneProducts);
  };

  const onRemoveProduct = (i) => {
    const filteredProduct = products.filter((product, index) => {
      return index != i;
    });
    localStorage.setItem("Panier", JSON.stringify(filteredProduct));
    setProducts(filteredProduct);
  };

  const Header = () => {
    let itemCount = products.length;
    return (
      <header className="containerShopping">
        <h1>Panier</h1>
        <span className="count">{itemCount} produits dans votre panier</span>
      </header>
    );
  };

  function ProductListOfShoppingCart({
    products,
    onChangeProductQuantity,
    onRemoveProduct,
  }) {
    return (
      <section className="containerShopping">
        <ul className="products">
          {products.map((product, index) => {
            console.log(product);
            return (
              <li className="row" key={index}>
                <div className="col left">
                  <div className="thumbnail">
                    <a href="#">
                      <img
                        src={product.product.image}
                        alt={product.product.name}
                      />
                    </a>
                  </div>
                  <div className="detail">
                    <div className="name">
                      <a href="#">{product.product.name}</a>
                    </div>
                    <div className="description">
                      {product.product.description}
                    </div>
                    <div className="price">{product.product.price}</div>
                  </div>
                </div>

                <div className="col right">
                  <div className="quantity">
                    <label htmlFor="quantity">Quantité</label>
                    <input
                      type="text"
                      className="quantity"
                      step="1"
                      value={product.quantity}
                      onChange={(event) =>
                        onChangeProductQuantity(index, event)
                      }
                    />
                  </div>

                  <div className="remove">
                    <svg
                      onClick={() => onRemoveProduct(index)}
                      version="1.1"
                      className="close"
                      width="60px"
                      x="0px"
                      y="0px"
                      viewBox="0 0 60 60"
                      enableBackground="new 0 0 60 60"
                    >
                      <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                    </svg>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  function Summary({
    subTotal,
    products,
    discount,
    tax,
    onEnterPromoCode,
    checkPromoCode,
  }) {
    // const total = subTotal;
    console.log(products);
    return (
      <section className="containerShopping">
        {/* <div className="promotion">
          <label htmlFor="promo-code">Have A Promo Code?</label>
          <input type="text" onChange={onEnterPromoCode} />
          <button type="button" onClick={checkPromoCode} />
        </div> */}

        <div className="summary">
          <ul>
            {/* <li>
              Subtotal <span>{subTotal}</span>
            </li>
            {discount > 0 && (
              <li>
                Discount <span>{discount}</span>
              </li>
            )}
            <li>
              Tax <span>{tax}</span>
            </li> */}
            <li className="total">
              Total <span></span>
            </li>
          </ul>
        </div>

        {/* <div className="checkout">
          <button type="button">Check Out</button>
        </div> */}
      </section>
    );
  }

  return {
    // checkPromoCode,
    // onEnterPromoCode,
    onRemoveProduct,
    onChangeProductQuantity,
    products,
    promoCode,
    discountPercent,
    subTotal,
    discount,
    Header,
    itemCount,
    ProductListOfShoppingCart,
    Summary,
  };
};

export default useShoppingCartHook;
