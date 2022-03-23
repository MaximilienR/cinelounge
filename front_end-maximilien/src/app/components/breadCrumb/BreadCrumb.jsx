import React from "react";
import useBreadCrumbHook from "./useBreadCrumbHook";
const BreadCrumb = (props) => {
  const { productsQuantity, triggerParentFunction } = useBreadCrumbHook(props);
  return (
    <div>
      {/* Remplace a par link et boucler/dynamique */}
      <nav className="breadCrumbNav">
        <ol className="cd-breadcrumb custom-separator">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href={`/${props.viewName}`}>
              {props.viewName}
              {props.searchTerm === undefined ? `(${props.length})` : null}
            </a>
          </li>
          {props.searchTerm ? (
            <li>
              <a href="">
                {props.searchTerm}({props.length})
              </a>
            </li>
          ) : null}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
