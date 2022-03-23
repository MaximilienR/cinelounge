import React, { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { URL_ADMIN_ADD_PRODUIT } from "../../shared/constants/urls/urlConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function useAdminHook(componentData) {
  const URLProducts = "http://localhost:5000/api/products/";
  const URLCategories = "http://localhost:5000/api/category/";
  const URLSubCategories = "http://localhost:5000/api/subCategory/";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [formDisplay, setFormDisplay] = useState(false);
  const [arrayProduct, setArrayProduct] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [itemProduct, setItemProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerpage] = useState(10);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // Data des produits

  useEffect(() => {
    axios.get(URLProducts).then((response) => {
      setProducts(response.data.products);
      console.log("Products :", response.data.products);
    });
  }, []);

  // Data des catégories

  useEffect(() => {
    axios.get(URLCategories).then((response) => {
      setCategories(response.data.category);
      console.log("Category :", response.data.category);
    });
  }, []);

  // Data des sous-catégories

  useEffect(() => {
    axios.get(URLSubCategories).then((response) => {
      setSubCategories(response.data.subCategory);
      console.log("subCategory :", response.data.subCategory);
    });
  }, []);

  // Value de l'input de recherche

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Ouverture / fermeture Popup du delete product

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Function axios delete product

  const deleteProducts = async (_id, e) => {
    e.preventDefault();
    var index = products.indexOf(_id);
    products.splice(index, 1);
    const response = await axios
      .delete(`${URLProducts}${_id}`)
      .then(() => {
        setProducts(products);
        toast("❌ Produit supprimé avec succès !", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => console.log(err));
    setIsOpen(!isOpen);
    console.log("delete :", _id);
  };

  useEffect(() => {
    console.log("render");
  }, [products]);

  // Si pas de produit, retourne null

  if (!products) return null;

  // Gestion de la date

  const d = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  //console.log(d.toLocaleDateString('fr-FR', options));

  // Select de la subcategory par rapport à la catégory

  const changeSelectOption = (e, setFieldValue) => {
    const selectedId = e.target.value;
    const selectedSubcategory = categories.find((d) => d._id === selectedId);
    setSelected(selectedSubcategory.subCategories);
    setFieldValue("category", selectedId);
  };

  // ID des pages (pagnination)

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  // Calcule des pages

  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pages.push(i);
  }
  // ki
  // Gestion du btn Next

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  // Gestion du btn Prev

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  // Btn incrementation "..."

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        className="p-2 border border-solid border-black bg-white cursor-pointer hover:bg-black hover:text-white"
        onClick={handleNextbtn}
      >
        {" "}
        &hellip;{" "}
      </li>
    );
  }

  // Btn decrementation "..."

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li
        className="p-2 border border-solid border-black bg-white cursor-pointer hover:bg-black hover:text-white"
        onClick={handlePrevbtn}
      >
        {" "}
        &hellip;{" "}
      </li>
    );
  }

  // Btn incrémentation produits

  const handleLoadMore = () => {
    setItemsPerpage(itemsPerPage + 5);
  };

  // Calcule du dernier, premier et tous les produits

  const indexOfLastitem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastitem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastitem);

  // Rendu des nombres de la pagnination

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          className={`${
            currentPage === number ? "bg-black text-white" : "bg-white"
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

  // Rendu du tableau des produits + pagnination

  const renderData = (products) => {
    return (
      <div>
        <div className="italic text-sm my-4 text-right mr-14">
          {d.toLocaleDateString("fr-FR", options)}
        </div>
        <h2 className="text-xl my-10 ml-10">TOUS LES PRODUITS</h2>
        <div className="flex justify-center mb-10">
          <input
            className="w-96"
            type="text"
            placeholder="Rechercher un produit"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div className="flex ">
          <table className="table-fixe border-collapse border border-slate-900 mx-auto">
            <thead>
              <tr className="bg-white">
                <th className="py-5 px-4">
                  <input type="checkbox" />
                </th>
                <th className="py-5 px-4">DENOMINATION</th>
                <th className="py-5 px-4">PRIX</th>
                <th className="py-5 px-4">CATÉGORIE</th>
                <th className="py-5 px-4">DATE</th>
                <th className="py-5 px-4">STOCK</th>
                <th className="py-5 px-4">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((val) => {
                  return val.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
                })
                .map((val) => (
                  <tr key={val._id}>
                    <th className="py-3 px-4">
                      <input type="checkbox" />
                    </th>
                    <td className="py-3 px-4">{val.name}</td>
                    <td className="py-3 px-4">{val.price} €</td>
                    <td className="py-3 px-4">{val.categoryId[0].name}</td>
                    <td className="py-3 px-4">
                      {console.log(val.createdAt)}
                      {new Date(val.createdAt).toLocaleDateString("fr-FR")}
                    </td>
                    <td className="py-3 px-4">{val.stock}</td>
                    <td>
                      <div className="dropdown inline-block relative">
                        <button className="bg-white text-black py-2 px-4 rounded inline-flex items-center">
                          <span className="mr-1">Choisir une actions</span>
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                          </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                          <li className="">
                            <button
                              className="rounded-t bg-yellow-custom hover:bg-gray-400 w-full py-2 px-4 block whitespace-no-wrap"
                              onClick={() => {
                                setFormDisplay(!formDisplay);
                                setArrayProduct(arrayProduct);
                                setItemProduct(val);
                              }}
                            >
                              Modifier le produit
                            </button>
                          </li>
                          <li className="">
                            <button
                              className="bg-yellow-custom hover:bg-gray-400 w-full py-2 px-4 block whitespace-no-wrap"
                              onClick={() => {
                                togglePopup();
                                setItemProduct(val);
                              }}
                            >
                              Supprimer le produit
                            </button>
                          </li>
                          <li className="">
                            <button className="rounded-b bg-yellow-custom hover:bg-gray-400 -full py-2 px-4 block whitespace-no-wrap">
                              Télécharger la fiche produit
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <ul>
            <li className="prevedent">
              <button
                className="gauche"
                onClick={handlePrevbtn}
                disabled={currentPage == pages[0] ? true : false}
              >
                Précédent
              </button>
            </li>

            <div className="flex justify-center mt-5">
              <ul className="flex list-none">{renderPageNumbers}</ul>
            </div>

            <li className="next">
              <button
                className="droite"
                onClick={handleNextbtn}
                disabled={currentPage == pages[pages.length - 1] ? true : false}
              >
                Suivant
              </button>
            </li>
          </ul>
        </div>
        {/* <div className="flex justify-center">
                <button className="btn-submit mt-5 mb-10" onClick={handleLoadMore}>
                  Voir plus
                </button>
              </div> */}

        <NavLink
          className="btn-submit-yellow panierprod cart2 bg-yellow-custom rounded-lg"
          exact
          to={URL_ADMIN_ADD_PRODUIT}
        >
          Ajouter un produit
        </NavLink>
      </div>
    );
  };

  // Vérification format d'image

  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

  // Validation Yup ajout de produit

  const validate = Yup.object({
    name: Yup.string()
      .max(80, "Ne pas dépasser plus de 80 caractères")
      .required("Veuillez mettre un nom de produit"),
    price: Yup.number()
      .min(1, "Veuillez mettre au moins un chiffre")
      .positive("Veuillez mettre un chiffre positif")
      .required("Veuillez mettre un prix"),
    licence: Yup.string()
      .max(25, "Ne pas dépasser plus de 25 caractères")
      .required("Veuillez mettre une licence"),
    stock: Yup.number()
      .min(0, "Veuillez mettre un chiffre")
      .required("Veuillez mettre un nombre de stock"),
    category: Yup.string().required("Veuillez choisir une catégorie"),
    subcategory: Yup.string().required("Veuillez choisir une sous-catégorie"),
    // image: Yup
    //   .mixed()
    //   .nullable()
    //   .test("FILE_SIZE", 'Taille non valide', (value) => !value || (value && value.size <= 1024 * 1024))
    //   .test("FILE_FORMAT", 'Format non valide', (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type)))
    //   .required('Veuillez mettre une image'),
    description: Yup.string()
      .max(250, "Ne pas dépasser plus de 250 caractères")
      .required("Veuillez mettre une description"),
    caracteristics: Yup.string()
      .max(150, "Ne pas dépasser plus de 150 caractères")
      .required("Veuillez mettre une caractéristique"),
  });
  return {
    renderData,
    isOpen,
    formDisplay,
    arrayProduct,
    ReferenceError,
    currentItems,
    itemProduct,
    d,
    options,
    changeSelectOption,
    handleClick,
    pages,
    handleNextbtn,
    validate,
    categories,
    selected,
    setFormDisplay,
    setArrayProduct,
    setItemProduct,
    togglePopup,
    deleteProducts,
  };
}
