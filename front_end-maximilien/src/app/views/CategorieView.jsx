import React, { useEffect, useState } from "react";
import Vector from "../../assets/images/Vector.png";
import Panier2 from "../../assets/images/panier2.png";
import Rien from "../../assets/images/rien.jpg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useLocation } from "react-router-dom";
import Pagination_topvente from "../Top vente/Pagination_topvente";

const CategorieView = (props) => {
  const [filterOn, setFilterOn] = useState();
  const [data, setData] = useState();
  console.log(props);

  let getCategorySearchNav = useLocation();

  const [products, setProducts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerpage] = useState(12);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [currentItems, setCurrentItems] = useState();
  const [pages, setPages] = useState([]);

  const indexOfLastitem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastitem - itemsPerPage;

  console.log(indexOfLastitem, indexOfFirstItem);


  useEffect(() => {
    console.log("----------useEffect depart -------");
    setProducts(props.products.products);
  }, []);

  useEffect(() => {
    console.log("here ????");
    console.log(data);
    setProducts(data);
    setFilterOn(!filterOn);
    setCurrentItems(products?.slice(indexOfFirstItem, indexOfLastitem));
    const tableau = [];
    console.log(products, itemsPerPage);
    console.log(Math.ceil(products?.length / itemsPerPage));
    for (let i = 1; i <= Math.ceil(products?.length / itemsPerPage); i++) {
      tableau.push(i);
      console.log(i);
    }
    console.log("tableau :", tableau);
    setPages([...tableau]);
  }, [!data]);

  console.log(products);
  // let currentItems;
  // Data des produits
  useEffect(() => {
    console.log("----------");
    // axios.get(URLProducts).then((response) => {
    // console.log(products);
    if (getCategorySearchNav.state.categorySearchNav) {
      console.log(
        "recherche par catégorie Navbar :",
        getCategorySearchNav.state.categorySearchNav.products
      );
      setProducts(getCategorySearchNav.state.categorySearchNav.products);
      // getCategorySearchNav.state.categorySearchNav = undefined;
    } else {
      setProducts(props.products.products);
    }
    setCurrentItems(
      // props.products.products.slice(currentPage - 1, currentPage - 1 + 12)
      products?.slice(indexOfFirstItem, indexOfLastitem)
    );
    console.log(products);
    // });
    // let pages = [];
    const tableau = [];
    console.log(products, itemsPerPage);
    console.log(Math.ceil(products?.length / itemsPerPage));
    for (let i = 1; i <= Math.ceil(products?.length / itemsPerPage); i++) {
      tableau.push(i);
      console.log(i);
    }
    console.log("tableau :", tableau);
    setPages([...tableau]);
  }, [props]);
  console.log(currentItems);
  // useEffect(() => {
  //   console.log("filtres");
  //   setFilteredData(data);
  // }, [props]);

  useEffect(() => {
    console.log("------products---------");
    setCurrentItems(products?.slice(indexOfFirstItem, indexOfLastitem));
    const tableau = [];
    console.log(products, itemsPerPage);
    console.log(Math.ceil(products?.length / itemsPerPage));
    for (let i = 1; i <= Math.ceil(products?.length / itemsPerPage); i++) {
      tableau.push(i);
      console.log(i);
    }
    console.log("tableau :", tableau);
    setPages([...tableau]);
  }, [products]);

  useEffect(() => {
    setCurrentItems(products?.slice(indexOfFirstItem, indexOfLastitem));
  }, [currentPage]);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
    window.scrollTo(0, 0);
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const renderPageNumbers = pages.map((number) => {
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

  const triggerParentFunction = () => {
    props.breadCrumb.pop();
    props.getProducts(props.breadCrumb);
  };

  const options = [
    { value: "Aasc", label: "A - Z" },
    { value: "Adesc", label: "Z - A" },
    { value: "1asc", label: "Prix croissant" },
    { value: "1desc", label: "Prix décroissant" },
  ];
  // let data = {};
  const sendFilter = (filter) => {
    console.log(filter);
    switch (filter.value) {
      case "Aasc":
        setData(
          products.sort(function (current, next) {
            return current.name.localeCompare(next.name);
          })
        );
        setFilterOn(!filterOn);
        // setProducts(data);
        // });
        // setFilteredData(data);
        break;
      case "Adesc":
        // setFilterOn(!filterOn);

        setData(
          products.sort(function (current, next) {
            return next.name.localeCompare(current.name);
          })
        );
        setFilterOn(!filterOn);

        // setFilterOn(!filterOn);
        // setFilteredData(data);
        break;
      case "1asc":
        setData(
          products.sort(function (a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
          })
        );
        setFilterOn(!filterOn);

        // setFilterOn(!filterOn);
        // setFilteredData(data);
        break;
      default:
        setData(
          products.sort(function (a, b) {
            return parseFloat(b.price) - parseFloat(a.price);
          })
        );
        setFilterOn(!filterOn);

      // setFilterOn(!filterOn);
    }
  };

  const renderData = (products) => {
    console.log(products);
    return (
      <div>
        <div className="searchglob">
          <div className="articles">
            {products
              .filter((val) => {
                if (props.searchterm == "") {
                  return val;
                } else if (
                  val.name
                    .toLowerCase()
                    .includes(props.searchterm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((product) => (
                <div className="decal" key={product._id}>
                  {product.image ? (
                    <a href={"product/" + product.name}>
                      <img
                        src={`http://localhost:3000/` + product.image}
                        className="tourimgprom"
                      />
                    </a>
                  ) : (
                    <a href={"product/" + product.name}>
                      <img src={Rien} className="tourimgprom" />
                    </a>
                  )}

                  <div className="bloquage_nom bg-blanc-custom mt-2">
                    <a href={"product/" + product.name}>
                      <p className="centre">{product.name}</p>
                    </a>
                    <div className="promoflex">
                      <ul>
                        <li>
                          <img src={Vector} />
                        </li>
                        <li>
                          <a href={"product/" + product.name}>
                            <p className="affichage_prix">{product.price} €</p>
                          </a>
                        </li>

                        <li>
                          <img className="panier2" src={Panier2} href="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div>
            <ul>
              <li className="prevedent">
                <button
                  className="gauche"
                  onClick={handlePrevbtn}
                  disabled={currentPage == pages[0] ? true : false}
                >
                  Prev
                </button>
              </li>

              <div className="flex justify-center mt-5">
                <ul className="flex list-none">{renderPageNumbers}</ul>
              </div>

              <li className="next">
                <button
                  className="droite"
                  onClick={handleNextbtn}
                  disabled={
                    currentPage == pages[pages.length - 1] ? true : false
                  }
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col searchView">
        <div className="breadCrumb">
          <nav className="breadCrumbNav">
            <ol className="cd-breadcrumb custom-separator">
              <li>
                <a key="1" href="/">
                  Accueil
                </a>
              </li>
              {props.breadCrumb && props.breadCrumb[0] ? (
                <li>
                  <a key="2" onClick={triggerParentFunction}>
                    {props.breadCrumb[0]}
                  </a>
                </li>
              ) : null}
              {props.breadCrumb && props.breadCrumb[1] ? (
                <li>
                  <a key="3" href="#0">
                    {props.breadCrumb[1]}
                  </a>
                </li>
              ) : null}
            </ol>
          </nav>
          <Dropdown
            onChange={sendFilter}
            options={options}
            placeholder="Trier par"
          />
        </div>
        {currentItems && renderData(currentItems)}
      </div>
    </>
  );
};

export default CategorieView;
