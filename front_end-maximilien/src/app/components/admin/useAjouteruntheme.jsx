import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';

const URLCategories = "http://localhost:5000/api/category/";
const useAjouteruntheme = () => {
const [categories, setCategories] = useState([]);


    useEffect(() => {
        axios
            .get(URLCategories)
            .then((response) => {
                setCategories(response.data.category);
            });
    }, []);

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const validateCategorie = Yup.object({
        name: Yup.string()
            .max(20, 'Ne pas dépasser plus de 20 caractères')
            .required('Veuillez ajouter une catégorie'),
    })

    const validateSubCategorie = Yup.object({
        subcategory: Yup.string()
            .required('Veuillez choisir une catégorie'),
        name: Yup.string()
            .max(20, 'Ne pas dépasser plus de 20 caractères')
            .required('Veuillez ajouter une sous-catégorie'),
    })

    return (
        {validateCategorie,validateSubCategorie,sleep,categories}
    );
};

export default useAjouteruntheme;