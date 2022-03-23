import React from "react";
import useAdminHook from "./useAdminHook";
import Popup from "../admin/Popup";
import PreviewImage from "../admin/PreviewImage";
import { Formik, Form, Field, ErrorMessage } from "formik";
import NavAdmin from "../admin/NavAdmin";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export default function Admin(props) {
  const {
    isOpen,
    formDisplay,
    arrayProduct,
    renderData,
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
  } = useAdminHook(props);
  let navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-wrap bg-grey-custom">
      {/* Navigation */}

      <NavAdmin />

      {isOpen && setItemProduct && (
        <Popup
          content={
            <>
              <p className="text-center mb-8 font-semibold">
                Êtes vous sûr d'effacer les données du produit ?
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-yellow-custom font-firaCode rounded-md py-2 px-4"
                  onClick={(e) => deleteProducts(itemProduct._id, e)}
                >
                  Supprimer le produit
                </button>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}

      {/* Tableau des produits */}

      <div className="mb-7 w-5/6 text-left">
        {!formDisplay && !arrayProduct && renderData(currentItems)}

        {formDisplay && itemProduct && (
          <Formik
            initialValues={{
              id: itemProduct._id,
              name: itemProduct.name,
              price: itemProduct.price,
              licence: itemProduct.licence,
              caracteristics: itemProduct.feature,
              category: "",
              //category: itemProduct.categoryId[0]._id,
              //subcategory: itemProduct.subCategoryId[0]._id,
              subcategory: "",
              image: "",
              stock: itemProduct.stock,
              description: itemProduct.description,
              etat: itemProduct.online,
            }}
            //validationSchema={validate}
            onSubmit={async (values) => {
              const { initialValues, ...data } = values;
              const formData = new FormData();
              formData.append("name", values.name);
              formData.append("price", values.price);
              formData.append("licence", values.licence);
              formData.append("stock", values.stock);
              formData.append("categoryId", [values.category]);
              formData.append("subCategoryId", [values.subcategory]);
              formData.append("image", values.image);
              formData.append("feature", values.caracteristics);
              formData.append("description", values.description);
              formData.append("online", true);
              console.log(data);

              const response = await axios
                .put(`http://localhost:5000/api/products/${data.id}`, formData)
                .then(() => {
                  toast.success("Produit modifié avec succès !", {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  navigate("/admin");
                })
                .catch((err) => {
                  if (err && err.response) console.log("Error: ", err);
                });
            }}
          >
            {({ values, isSubmitting, setFieldValue }) => (
              <span className="mr-auto">
                <div className="italic text-sm my-4 text-right mr-14">
                  {d.toLocaleDateString("fr-FR", options)}
                </div>
                <button
                  className="ml-10"
                  onClick={() => {
                    setFormDisplay(!formDisplay);
                    setArrayProduct(arrayProduct);
                  }}
                >
                  &#x25C4; Retouner à la liste
                </button>
                <h2 className="text-xl my-10 ml-10">MODIFIER UN PRODUIT</h2>
                <Form className="flex flex-col w-6/12 mx-auto">
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Nomination
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="border-none w-80"
                      />
                      <ErrorMessage
                        name="name"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Prix
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="number"
                        id="price"
                        name="price"
                        className="border-none w-80"
                      />
                      <ErrorMessage
                        name="price"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Licence
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="licence"
                        name="licence"
                        className="border-none w-80"
                      />
                      <ErrorMessage
                        name="licence"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Caractéristique
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="caracteristics"
                        name="caracteristics"
                        className="border-none w-80"
                      />
                      <ErrorMessage
                        name="caracteristics"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Quantité
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="number"
                        id="stock"
                        name="stock"
                        className="border-none w-80"
                      />
                      <ErrorMessage
                        name="stock"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Catégories
                    </label>
                    <div>
                      <Field
                        as="select"
                        name="category"
                        id="category"
                        className="border-none w-80"
                        onChange={(e) => {
                          changeSelectOption(e, setFieldValue);
                        }}
                      >
                        <option value="">Choisir une catégorie</option>
                        {categories.map((categorie) => (
                          <option
                            key={categorie._id}
                            name="category"
                            value={categorie._id}
                          >
                            {categorie.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="category"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Sous-catégories
                    </label>
                    <div>
                      <Field
                        as="select"
                        name="subcategory"
                        id="subcategory"
                        className="border-none w-80"
                      >
                        <option value="">Choisir une sous-catégorie</option>
                        {selected?.map((subcat) => (
                          <option
                            key={subcat._id}
                            name="subcategory"
                            value={subcat._id}
                          >
                            {subcat.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="subcategory"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Images
                    </label>
                    <div className="flex flex-col">
                      <input
                        multiple
                        type="file"
                        name="image"
                        className="border-none w-80"
                        onChange={(event) => {
                          setFieldValue("image", event.target.files[0]);
                        }}
                      />
                      <ErrorMessage
                        name="image"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                  </div>
                  {values.image && <PreviewImage file={values.image} />}
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Description
                    </label>
                    <div className="flex flex-col">
                      <Field
                        as="textarea"
                        id="description"
                        name="description"
                        className="border-none w-80 h-40"
                      />
                      <ErrorMessage
                        name="description"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Statut en ligne
                    </label>
                    <div className="flex flex-col">
                      <Field
                        as="select"
                        id="online"
                        name="online"
                        className="border-none"
                      >
                        <option value="true" name="online">
                          Actif
                        </option>
                        <option value="false" name="online">
                          Inactif
                        </option>
                      </Field>
                      <ErrorMessage
                        name="online"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Promotion
                    </label>
                    <div className="flex flex-col">
                      <Field
                        as="select"
                        id="promo"
                        name="promo"
                        className="border-none"
                      >
                        <option value="" name="promo">
                          Ajouter une promotion
                        </option>
                        <option value="promodix" name="promo">
                          10% sur le prix
                        </option>
                        <option value="promoquinze" name="promo">
                          15% sur le prix
                        </option>
                        <option value="promovingt" name="promo">
                          20% sur le prix
                        </option>
                        <option value="promovingtcinq" name="promo">
                          25% sur le prix
                        </option>
                        <option value="promotrente" name="promo">
                          30% sur le prix
                        </option>
                      </Field>
                      <ErrorMessage
                        name="promo"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Début promotion
                    </label>
                    <div className="flex flex-col mr-2">
                      <Field
                        type="date"
                        id="startpromo"
                        name="startpromo"
                        className="border-none"
                      />
                      <ErrorMessage
                        name="startpromo"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                    <label className="flex items-center font-firaCode">
                      Fin promotion
                    </label>
                    <div className="flex flex-col ml-2">
                      <Field
                        type="date"
                        id="startpromo"
                        name="startpromo"
                        className="border-none"
                      />
                      <ErrorMessage
                        name="startpromo"
                        component="small"
                        className="text-red-500 inline-block flex justify-center"
                      />
                    </div>
                  </div>
                  <button
                    className="btn-submit-yellow shadow-md mx-auto mt-10 mb-4 p-3"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "ENVOI EN COURS..." : "VALIDER LE PRODUIT"}
                  </button>
                </Form>
              </span>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}
