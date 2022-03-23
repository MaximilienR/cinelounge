import React from "react";
import { useLocation } from "react-router-dom";

const ListOfProduct = (products) => {
  console.log(products);
  let toLoop;
  products.searchTerm
    ? (toLoop = products.products.filter((val) => {
        if (products.searchTerm == "") {
          return val;
        } else if (
          val.name.toLowerCase().includes(products.searchTerm.toLowerCase())
        ) {
          return val;
        }
      }))
    : (toLoop = products.products);

  // if (products.reverse) toLoop = products.products.reverse();

  const [listOfFavorites, setListOfFavorites] = useState();
  const [isStoring, setIsStoring] = useState();
  // test corentin
  //  const p = window.location.pathname;
  //  console.log(p.replace("%20", " "));
  const location = useLocation();
  // console.log(props);
  const options = { year: "numeric" };

  //ajoute un favorie
  function addStockage(product) {
    var a = [];
    a = JSON.parse(localStorage.getItem("Panier")) || [];
    a.push(product);
    setListOfFavorites(a);
    localStorage.setItem("Panier", JSON.stringify(a));
  }

  useEffect(() => {
    if (localStorage.getItem("Panier") === null) {
      localStorage.setItem("Panier", JSON.stringify([]));
    }
    if (isStoring == true) {
      localStorage.setItem("Panier", JSON.parse([listOfFavorites]));
      setIsStoring(!isStoring);
    }
  }, [listOfFavorites]);

  // retire des favories
  const suppStockage = (product) => {
    let settings = JSON.parse(localStorage.getItem("Panier"));
    // console.log(settings);

    let found = settings.find((x) => x === props.product._id);
    // console.log(settings.indexOf(found));
    settings.splice(settings.indexOf(found), 1);
    // console.log(settings);
    setListOfFavorites(localStorage.getItem("Panier"));
    localStorage.setItem("Panier", JSON.stringify(settings));
  };

  return (
    <div className="topventeglob">
      <div className="articles">
        {products.noItems ? (
          <span>Aucun articles correspondants ..</span>
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
                      {/* <div
                          onClick={() => {
                            suppStockage(product);
                          }}
                        >
                          <img src={Coeur} />
                        </div> */}
                      <Favorites product={product} />
                    </li>
                    <li>
                      <Link to={`/product/${product._id}`}>
                        <p className="affichage_prix">{product.price} €</p>
                      </Link>
                    </li>

                    <li>
                      <img
                        className="panier2"
                        src={Panier2}
                        href=""
                        onClick={() => {
                          addStockage(product);
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListOfProduct;
