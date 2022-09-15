import React from "react"
import { useForm, useFieldArray } from "react-hook-form"

import './Form.styles.css'

export const Form = (props) => {

  const {submitForm} = props

  const formValues = [
    {
      label: "Name",
      formValue: "name"
    },
    {
      label: "Tagline",
      formValue: "tagline"
    },
    {
      label: "Description",
      formValue: "description"
    },
    {
      label: "First Brewed",
      formValue: "first_brewed"
    },
    {
      label: "Brewers Tips",
      formValue: "brewers_tips"
    },
    {
      label: "Attenuation Level",
      formValue: "attenuation_level"
    },
    {
      label: "Contributed By",
      formValue: "contributed_by"
    }
  ]
  const {control, register, handleSubmit } = useForm()


  const { fields } = useFieldArray({
    control,
    name: "formValues",
  })

  
  return (
    <form className="form" onSubmit={handleSubmit(submitForm)}>

      { formValues.map((value, index) => {
        return(
          <span key={index} className={value.formValue}>
            <label>{value.label}</label>
            <input key={fields.label} {...register(value.formValue)} />
          </span>
        )
      })}
      <button type="submit" >ADD NEW</button>
    </form>
  )
}