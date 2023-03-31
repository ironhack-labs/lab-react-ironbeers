import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "../../../components/misc/FormControl/FormControl";
import Input from "../../../components/misc/Input/Input";
import { Navbar } from "../../../components/misc/Navbar/Navbar";
import { newBeer } from "../../../services/BeersService";
import { newBeerSchema } from "./schema/newBeer.schema";

const initialValues = {
  name: "",
  tagline: "",
  description: "",
  first_brewed: "",
  brewers_tips: "",
  attenuation_level: 0,
  contributed_by: "",
};

export const NewBeer = () => {
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
    setSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: newBeerSchema,
    onSubmit: (values) => {
      newBeer({
        name: values.name,
        tagline: values.tagline,
        description: values.description,
        first_brewed: values.first_brewed,
        brewers_tips: values.brewers_tips,
        attenuation_level: values.attenuation_level,
        contributed_by: values.contributed_by,
      })
        .then((response) => {
          console.info(response);
          navigate("/");
        })
        .catch((err) => {
          console.err(err);
          setSubmitting(false);
        });
    },
  });
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="mx-3">
        <FormControl
          text="Name"
          error={touched.name && errors.name}
          htmlFor="name"
        >
          <Input
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && errors.name}
          />
        </FormControl>

        <FormControl
          text="Tagline"
          error={touched.tagline && errors.tagline}
          htmlFor="tagline"
        >
          <Input
            id="tagline"
            name="tagline"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tagline}
            error={touched.tagline && errors.tagline}
          />
        </FormControl>

        <FormControl
          text="Description"
          error={touched.description && errors.description}
          htmlFor="description"
        >
          <Input
            id="description"
            name="description"
            type="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            error={touched.description && errors.description}
          />
        </FormControl>

        <FormControl
          text="First Brewed"
          error={touched.first_brewed && errors.first_brewed}
          htmlFor="first_brewed"
        >
          <Input
            id="first_brewed"
            name="first_brewed"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.first_brewed}
            error={touched.first_brewed && errors.first_brewed}
          />
        </FormControl>

        <FormControl
          text="Brewers Tips"
          error={touched.brewers_tips && errors.brewers_tips}
          htmlFor="brewers_tips"
        >
          <Input
            id="brewers_tips"
            name="brewers_tips"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.brewers_tips}
            error={touched.brewers_tips && errors.brewers_tips}
          />
        </FormControl>

        <FormControl
          text="Attenuation Level"
          error={touched.attenuation_level && errors.attenuation_level}
          htmlFor="attenuation_level"
        >
          <Input
            id="attenuation_level"
            name="attenuation_level"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.attenuation_level}
            error={touched.attenuation_level && errors.attenuation_level}
          />
        </FormControl>

        <FormControl
          text="Contributed By"
          error={touched.contributed_by && errors.contributed_by}
          htmlFor="contributed_by"
        >
          <Input
            id="contributed_by"
            name="contributed_by"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.contributed_by}
            error={touched.contributed_by && errors.contributed_by}
          />
        </FormControl>
        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            className="btn rounded-pill"
            disabled={isSubmitting}
            style={{
              backgroundColor: "#3EC4FC",
              color: "white",
              width: "80vw",
            }}
          >
            {isSubmitting ? "ADDING NEW BEER" : "ADD NEW"}
          </button>
        </div>
      </form>
    </div>
  );
};
