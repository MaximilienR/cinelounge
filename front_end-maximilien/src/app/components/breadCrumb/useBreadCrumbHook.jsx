import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useBreadCrumbHook = (componentData) => {
  const [productsQuantity, setProductsQuantity] = useState();
  const triggerParentFunction = () => {
    componentData.breadCrumb.pop();
    componentData.parentFilter({ category: componentData.breadCrumb[0] });
  };

  useEffect(() => {
    setProductsQuantity(componentData.length);
  }, [componentData.length]);

  return { productsQuantity, triggerParentFunction };
};

export default useBreadCrumbHook;
