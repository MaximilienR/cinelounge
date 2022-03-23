import React from "react";
import { Link } from "react-router-dom";
import Vector from "../../assets/images/Vector.png";
import Panier2 from "../../assets/images/panier2.png";
import Rien from "../../assets/images/rien.jpg";
import Coeur from "../../assets/images/Coeur.png";
import Favorites from "../Favorites/Favorites";
import Buy from "../Buy/Buy";

const ListOfCarouselProduct = (products) => {
  return (
    <div>
      <p className="aimerpeutetre">Vous pourriez aimer aussi</p>

      <div className="">
        <div className="articles peuetre">
          {products.products.map((product) => (
            <div className="decal" key={product._id}>
              {product.image ? (
                <Link
                  to={{
                    pathname: `${product._id}`,

                    state: {
                      product,
                      products: products.allProducts,
                    },
                  }}
                >
                  <img src={product.image} className="tourimgprom" />
                </Link>
              ) : (
                <Link
                  to={{
                    pathname: `${product._id}`,

                    state: {
                      product,
                      products: products.allProducts,
                    },
                  }}
                >
                  <img src={Rien} className="tourimgprom" />
                </Link>
              )}
              <div className="bloquage_nom bg-blanc-custom mt-2">
                <Link
                  to={{
                    pathname: `${product._id}`,

                    state: {
                      product,
                      products: products.allProducts,
                    },
                  }}
                >
                  <p className="centre">{product.name}</p>
                </Link>
                <div className="promoflex">
                  <ul>
                    <li>
                      <Favorites product={product} />
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: `${product._id}`,

                          state: {
                            product,
                            products: products.allProducts,
                          },
                        }}
                      >
                        <p className="affichage_prix">{product.price} €</p>
                      </Link>
                    </li>
                    <Buy product={product} />
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListOfCarouselProduct;
