import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./AsideComponent.css";

const ProductList = (props) => {
  const [filter, setFilter] = useState();
  const options = [
    {
      type: "group",
      name: "FILMS",
      items: [
        { value: "films/selection", label: "Notre sélection" },
        { value: "films/blueray", label: "Blue-Ray" },
        { value: "films/dvd", label: "DVD" },
        {
          value: { category: "films", subcategory: "action" },
          label: "Actions & Aventures",
        },
        { value: { category: "films", subcategory: "crime" }, label: "Crime" },
        {
          value: { category: "films", subcategory: "documentaire" },
          label: "Documentaire",
        },
      ],
    },
  ];

  const optionsSeries = [
    {
      type: "group",
      name: "SÉRIES",
      items: [
        { value: "series/selection", label: "Notre sélection" },
        { value: "series/blueray", label: "Blue-Ray" },
        { value: "series/dvd", label: "DVD" },
        {
          value: { category: "series", subcategory: "action" },
          label: "Actions & Aventures",
        },
        { value: { category: "series", subcategory: "crime" }, label: "Crime" },
        {
          value: { category: "series", subcategory: "documentaire" },
          label: "Documentaire",
        },
        {
          value: { category: "series", subcategory: "fantastique" },
          label: "Fantasy",
        },
        {
          value: { category: "series", subcategory: "sciencefiction" },
          label: "Sci-Fi",
        },
        {
          value: { category: "series", subcategory: "comedie" },
          label: "Comedy",
        },
        { value: { category: "series", subcategory: "drame" }, label: "Drama" },
        {
          value: { category: "series", subcategory: "horreur" },
          label: "Horror",
        },
        {
          value: { category: "series", subcategory: "animation" },
          label: "Animation",
        },
      ],
    },
  ];

  const optionsGoodies = [
    {
      type: "group",
      name: "GOODIES",
      items: [
        {
          value: { category: "goodies", subcategory: "epicerie" },
          label: "Epicerie",
        },
        {
          value: { category: "goodies", subcategory: "vetements" },
          label: "Vêtements",
        },
        {
          value: { category: "goodies", subcategory: "maison" },
          label: "Maison",
        },
        {
          value: { category: "goodies", subcategory: "jeux" },
          label: "Jeux/Jouets",
        },
      ],
    },
  ];

  const sendRequest = (filter) => {
    setFilter(filter);
    props.parentFilter(filter);
  };

  return (
    <div className="contains">
      <div className="filtre">
        <h1> Filtre </h1>
        <Dropdown
          className="selectCategories"
          onChange={sendRequest}
          options={options}
          arrowClosed={<span className="arrow-closed" />}
          arrowOpen={<span className="arrow-open" />}
          placeholder="FILMS"
        />
        <Dropdown
          className="selectCategories"
          onChange={sendRequest}
          options={optionsSeries}
          arrowClosed={<span className="arrow-closed" />}
          arrowOpen={<span className="arrow-open" />}
          placeholder="SERIES"
        />
        <Dropdown
          className="selectCategories"
          onChange={sendRequest}
          options={optionsGoodies}
          arrowClosed={<span className="arrow-closed" />}
          arrowOpen={<span className="arrow-open" />}
          placeholder="GOODIES"
        />
      </div>
    </div>
  );
};

export default ProductList;
