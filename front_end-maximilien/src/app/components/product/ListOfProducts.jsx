import React from "react";
import { Link } from "react-router-dom";
import Rien from "../../assets/images/rien.jpg";
import Favorites from "../Favorites/Favorites";
import Buy from "../Buy/Buy";
import useListOfProducts from "./useListOfProductsHook";
import EmptySearch from "../../views/EmptySearch";
const ListOfProducts = (products) => {
  const { toLoop, empty } = useListOfProducts(products);
  console.log(empty);
  return (
    <>
      <div className="topventeglob">
        <div className="articles">
          {empty ? (
            <EmptySearch />
          ) : (
            toLoop.map((product) => (
              <div className="decal" key={product._id}>
                {product.image ? (
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image} className="tourimgprom" />
                  </Link>
                ) : (
                  <Link to={`/product/${product._id}`}>
                    <img src={Rien} className="tourimgprom" />
                  </Link>
                )}
                <div className="bloquage_nom bg-blanc-custom mt-2">
                  <Link to={`/product/${product._id}`}>
                    <p className="centre">{product.name}</p>
                  </Link>
                  <div className="promoflex">
                    <ul>
                      <li>
                        <Favorites product={product} />
                      </li>
                      <li>
                        <Link to={`/product/${product._id}`}>
                          <p className="affichage_prix">{product.price} €</p>
                        </Link>
                      </li>
                      <Buy product={product} />
                    </ul>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ListOfProducts;
