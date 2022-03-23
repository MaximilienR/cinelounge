import React, { useState } from "react";
import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkThemeContext";
import axios from "axios";

const options = [
    { value: "", label: "Films" },
    { value: "", label: "Séries" },
    { value: "", label: "Mugs" },
  ];
const usenavhash = () => {
    const [categorySearchNav, setCategorySearchNav] = useState();
  const [toggleMenu, setToggleMenu] = useState(true);
  const { toggleDarkTheme, darkTheme } = useContext(DarkThemeContext);
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const toggleModal = () => {
    setIsToggle(!isToggle);
  };
  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  const selectCategory = (category) => {
    axios
      .get(`http://localhost:5000/api/products/search/${category.target.value}`)
      .then((res) => {
        setCategorySearchNav(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onTextChange = (input) => {
    setSearchText(input.target.value);
  };
  function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
  }
    return (
        {onTextChange,myFunction,selectCategory,toggleNavSmallScreen,toggleModal,categorySearchNav,toggleDarkTheme,searchText,isOpen,isToggle}
    );
};

export default usenavhash;