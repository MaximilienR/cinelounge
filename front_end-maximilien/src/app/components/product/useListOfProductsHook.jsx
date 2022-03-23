import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const useListOfProducts = (componentData) => {
  let toLoop;
  const [empty, setEmpty] = useState(false);
  componentData.searchTerm
    ? (toLoop = componentData.products.filter((val) => {
        if (componentData.searchTerm == "") {
          setEmpty(false);
          return val;
        } else if (
          val.name
            .toLowerCase()
            .includes(componentData.searchTerm.toLowerCase())
        ) {
          setEmpty(false);
          return val;
        } else if (val.name !== componentData.searchTerm) {
          setEmpty(true);
          return [];
        }
      }))
    : (toLoop = componentData.products);

  const location = useLocation();
  const options = { year: "numeric" };
  return { toLoop, empty };
};

export default useListOfProducts;
