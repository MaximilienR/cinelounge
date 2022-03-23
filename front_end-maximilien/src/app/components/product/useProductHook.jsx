import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const useProductHook = () => {
  // let [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // mettre dans back end controller route qui selectionne par category id

  const requestOne = axios.get(`http://localhost:5000/api/products/${id}`);
  const requestTwo = axios.get("http://localhost:5000/api/products/");

  useEffect(() => {
    // if (product.length !== 0) setIsLoading(!isLoading);
    axios.all([requestOne, requestTwo]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        setProduct(responseOne.data);
        setProducts(responseTwo.data);
        setIsLoading(true);
      })
    );
  }, [id]);

  return isLoading ? { product, products } : <span>test..</span>;
};

export default useProductHook;
