import { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
export default function useAddProductHook(componentData) {
  const URLProducts = "http://localhost:5000/api/products/";
  const URLCategories = "http://localhost:5000/api/category/";
  const URLSubCategories = "http://localhost:5000/api/subCategory/";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selected, setSelected] = useState();

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

  // Vérification format d'image

  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

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
    image: Yup.mixed()
      .nullable()
      .test(
        "FILE_SIZE",
        "Taille non valide",
        (value) => !value || (value && value.size <= 1024 * 1024)
      )
      .test(
        "FILE_FORMAT",
        "Format non valide",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
      )
      .required("Veuillez mettre une image"),
    description: Yup.string()
      .max(250, "Ne pas dépasser plus de 250 caractères")
      .required("Veuillez mettre une description"),
    caracteristics: Yup.string()
      .max(150, "Ne pas dépasser plus de 150 caractères")
      .required("Veuillez mettre une caractéristique"),
  });
  return {
    categories,
    selected,
    subCategories,
    d,
    options,
    validate,
    changeSelectOption,
  };
}
