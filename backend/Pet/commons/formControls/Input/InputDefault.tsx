import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { FieldProps } from 'formik'

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const InputDefault = ({field, form: _, ...props}: FieldProps & InputProps) => {
    return (
        <div>
            <input {...field} {...props}/>
        </div>
    )
}