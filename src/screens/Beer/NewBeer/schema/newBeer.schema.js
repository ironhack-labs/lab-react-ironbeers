import * as Yup from "yup";

export const newBeerSchema = Yup.object({
  name: Yup.string("Type err").required("Field required"),
  tagline: Yup.string("Type err").required("Field required"),
  description: Yup.string("Type err").required("Field required"),
  first_brewed: Yup.string("Type err").required("Field required"),
  brewers_tips: Yup.string("Type err").required("Field required"),
  attenuation_level: Yup.number("Type err").required("Field required"),
  contributed_by: Yup.string("Type err").required("Field required"),
});
