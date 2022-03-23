import React, { useEffect, useState } from 'react';
import NavAdmin from './NavAdmin';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import useAjouteruntheme from './useAjouteruntheme';

const AjouterUnTheme = () => {
    const {
        validateCategorie,
        validateSubCategorie,
        sleep,
        categories
      } = useAjouteruntheme();
    return (
        <div className="flex text-center bg-grey-custom">
            <NavAdmin />
            <div className="mx-auto w-2/6">
                <Formik
                    initialValues={{
                        name: '',
                    }}
                    validationSchema={validateCategorie}
                    onSubmit={async (values) => {
                        await sleep(2000);
                        const { initialValues, ...data } = values;
                        console.log(data);
                    }}
                >
                    {({ isSubmitting }) => (

                        <div>
                            <h2 className="text-xl my-10">AJOUTER UNE CATÉGORIE</h2>
                            <Form className="flex flex-col">
                                <div className='flex justify-between mb-8'>
                                    <label className='flex items-center font-firaCode'>Catégorie</label>
                                    <div className='flex flex-col'>
                                        <Field type="text" name="name" className="border-none w-80" />
                                        <ErrorMessage name="name" component="small" className="text-red-500 inline-block flex justify-center" />
                                    </div>
                                </div>
                                <button className="btn-submit-yellow shadow-md mx-auto mt-10 mb-4 p-3" type="submit" disabled={isSubmitting}
                                >
                                    {isSubmitting ? "ENVOI EN COURS..." : "VALIDER"}
                                </button>
                            </Form>
                        </div>
                    )}
                </Formik>
                <Formik
                    initialValues={{
                        upperCategory: '',
                        name: '',
                    }}
                    validationSchema={validateSubCategorie}
                    onSubmit={async (values) => {
                        await sleep(2000);
                        const { initialValues, ...data } = values;
                        console.log(data);
                    }}
                >
                    {({ isSubmitting })  => (
                        <div>
                            <h2 className="text-xl my-10">AJOUTER UNE SOUS-CATÉGORIE</h2>
                            <Form className="flex flex-col">
                                <div className="flex justify-between mb-8">
                                    <label className="flex items-center font-firaCode">Catégories</label>
                                    <div>
                                        <Field as="select" name="name" className="border-none w-80">
                                            <option value="">Choisir une catégorie</option>
                                            {categories.map(
                                                categorie =>
                                                    <option key={categorie._id} name="name" value={categorie._id}>{categorie.name}</option>
                                            )}
                                        </Field>
                                        <ErrorMessage name="name" component="small" className="text-red-500 inline-block flex justify-center" />
                                    </div>
                                </div>
                                <div className='flex justify-between mb-8'>
                                    <label className='flex items-center font-firaCode'>Sous-catégorie</label>
                                    <div className='flex flex-col'>
                                        <Field type="text" id="nameCat" name="nameCat" className="border-none w-80" />
                                        <ErrorMessage name="nameCat" component="small" className="text-red-500 inline-block flex justify-center" />
                                    </div>
                                </div>
                                <button className="btn-submit-yellow shadow-md mx-auto mt-10 mb-4 p-3" type="submit" disabled={isSubmitting}
                                >
                                    {isSubmitting ? "ENVOI EN COURS..." : "VALIDER"}
                                </button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AjouterUnTheme;