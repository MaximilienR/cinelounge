import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PreviewImage from "./PreviewImage";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { URL_ADMIN_HOME } from "../../shared/constants/urls/urlConstants";
import NavAdmin from "./NavAdmin";
import useAddProductHook from "./useAddProductHook";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./star.css";
// import CheckBox from "./CheckBox";
const AddProduct = (props) => {
  const [isStar, setStar] = useState("false");
  const {
    categories,
    selected,
    subCategories,
    d,
    options,
    validate,
    changeSelectOption,
  } = useAddProductHook(props);
  let navigate = useNavigate();
  const [selection, setSelection] = useState(false);
  const handleToggle = () => {
    setStar(!isStar);
  };
  function CheckBox(props) {
    return (
      <Field name={props.name}>
        {({ field, form }) => (
          <label>
            <input
              {...field}
              type="checkbox"
              className="hidden"
              onClick={handleToggle}
              // checked={field.value.includes(props.value)}
              // onChange={() => {
              //   const set = new Set(field.value);
              //   if (set.has(props.value)) {
              //     set.delete(props.value);
              //   } else {
              //     set.add(props.value);
              //   }
              //   field.onChange(field.name)(Array.from(set));
              //   form.setFieldTouched(field.name, true);
              // }}
            />
            <span className={isStar ? "unstarred" : "starred"}>
              <span className="star-icon fa fa-star"></span>
            </span>
          </label>
        )}
      </Field>
    );
  }
  return (
    <>
      <div className="min-h-screen flex flex-wrap bg-grey-custom posts">
        <NavAdmin />
        <div className="bg-grey-custom w-10/12 mx-auto mb-10 ">
          <div className="italic text-sm my-4 text-right mr-14">
            {d.toLocaleDateString("fr-FR", options)}
          </div>
          <NavLink className="underline ml-10" exact to={URL_ADMIN_HOME}>
            &#x25C4; Retouner à la liste
          </NavLink>
          <h2 className="text-xl my-10 ml-10">AJOUTER UN PRODUIT</h2>
          <Formik
            initialValues={{
              selection: false,
              name: "",
              price: "",
              licence: "",
              stock: "",
              category: "",
              subcategory: "",
              image: null,
              caracteristics: "",
              description: "",
              online: true,
            }}
            validationSchema={validate}
            onSubmit={async (values) => {
              const { initialValues, ...data } = values;
              const formData = new FormData();
              if (values.selection === 0) {
                formData.append("selection", false);
              } else {
                formData.append("selection", true);
              }
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
              console.log(values.image.name);

              const response = await axios
                .post("http://localhost:5000/api/products/", formData)
                .catch((err) => {
                  if (err && err.response) console.log("Error: ", err);
                })
                .then(() => {
                  toast.success("Produit ajouté avec succès !", {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  // let reload = window.location.reload;
                  navigate("/admin");
                  // setTimeout(reload, 2000);
                });
              // props.history.push("/admin");
            }}
          >
            {({ values, isSubmitting, setFieldValue }) => (
              <div className="bg-grey-custom w-5/6 mx-auto">
                <Form
                  className="flex flex-col w-7/12 mx-auto"
                  encType="multipart/form-data"
                >
                  <div className="flex justify-between mb-8">
                    <label className="flex items-center font-firaCode">
                      Produit de Sélection
                    </label>
                    <div className="flex flex-col">
                      {/* <Field
                        type="checkbox"
                        checked={props.values.selection}
                        onChange={() =>
                          props.setFieldValue(
                            "selection",
                            !props.values.selection
                          )
                        }
                      >
                        <span class="star-icon fa fa-star fa-xl"></span>
                      </Field> */}
                      <CheckBox name="selection" value={!selection} />
                    </div>
                  </div>
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
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
