import React from 'react'
import { ErrorMessage, useField } from 'formik'
import "../../assets/styles/index.css"

export const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    // console.log(field, meta)
    return (
        <div className="formContain">
            <div className="form">
                <input
                    placeholder={label}
                    className={` forminput shadow-none rounded-md bg-gray-200 focus:bg-white text-black mt-5 ${meta.touched && meta.error && 'is-invalid'}`}
                    {...field} {...props}
                    autoComplete="off"
                />
            </div>
            <span className="text-red-400 inline-block"><ErrorMessage name={field.name} /></span>
        </div>
    )
}
