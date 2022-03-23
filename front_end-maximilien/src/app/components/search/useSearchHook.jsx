import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const useTopSalesHook = () => {
  const URLProducts = "http://localhost:5000/api/products/";
  const [products, setProducts] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filters, setFilters] = useState([]);
  const [filterOn, setFilterOn] = useState(false);
  const [filteredData, setFilteredData] = useState();
  const [pages, setPages] = useState([]);
  const searchWords = useParams("");
  const [searchTerm, setSearchTerm] = useState([]);
  const [breadCrumbNumber, setBreadCrumbNumber] = useState();

  useEffect(() => {
    setSearchTerm(searchWords.searchterm);
  }, [searchWords.searchterm]);

  useEffect(() => {
    axios.get(URLProducts).then((response) => {
      setIsLoaded(!isLoaded);
      setProducts(response.data.products);
    });
    const tableau = [];
    for (let i = 1; i <= Math.ceil(products?.length / 5); i++) {
      tableau.push(i);
    }
    setPages([...tableau]);
    setBreadCrumbNumber(products.length);
  }, []);

  const productsToList = (childData) => {
    setPaginatedData(childData);
  };

  const filterProducts = (childData) => {
    let filtre;
    if (Object.keys(childData).length > 1) {
      setFilters([childData.value.category, childData.value.subcategory]);
      filtre = products?.filter((item) => {
        return (
          item.categoryId[0].name
            .toLowerCase()
            .includes(childData.value.category) &&
          item.subCategoryId[0].name
            .toLowerCase()
            .includes(childData.value.subcategory)
        );
      });
    } else {
      setFilters([childData.category]);
      filtre = products?.filter((item) => {
        return item.categoryId[0].name
          .toLowerCase()
          .includes(childData.category);
      });
    }
    setFilteredData(filtre);
    setFilterOn(true);
    const tableau = [];
    for (let i = 1; i <= Math.ceil(Object.keys(filtre)?.length / 5); i++) {
      tableau.push(i);
    }
    setPages([...tableau]);
  };

  // useEffect(() => {
  //   console.log("changement de page");
  // }, [paginatedData]);

  useEffect(() => {
    const tableau = [];
    for (let i = 1; i <= Math.ceil(products?.length / 5); i++) {
      tableau.push(i);
    }
    setPages([...tableau]);
    setBreadCrumbNumber(products.length);
  }, [products]);
  return {
    products,
    paginatedData,
    filteredData,
    filterOn,
    filters,
    filterProducts,
    productsToList,
    isLoaded,
    pages,
    searchTerm,
    breadCrumbNumber,
  };
};

export default useTopSalesHook;
