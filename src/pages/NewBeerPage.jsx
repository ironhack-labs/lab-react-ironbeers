import React, { useState } from "react";
import axios from "axios";

import Input from "../components/Input";

import "./NewBeerPage.css";
import { useNavigate } from "react-router-dom";

const formFields = [
  { label: "Name", type: "text", name: "name", id: "name" },
  {
    label: "Tagline",
    type: "text",
    name: "tagline",
    id: "tagline",
  },
  {
    label: "Description",
    type: "text",
    name: "description",
    id: "description",
  },
  {
    label: "First brewed",
    type: "text",
    name: "first_brewed",
    id: "first_brewed",
  },
  {
    label: "Brewers tips",
    type: "text",
    name: "brewers_tips",
    id: "brewers_tips",
  },
  {
    label: "Attenuation level",
    type: "number",
    name: "attenuation_level",
    id: "attenuation_level",
  },
  {
    label: "Contributed By",
    type: "text",
    name: "contributed_by",
    id: "contributed_by",
  },
];

const NewBeerPage = ({ addBeer }) => {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // specifics of this form submission
    try {
      axios({
        method: "POST",
        url: "https://ih-beers-api2.herokuapp.com/beers/new",
        data: { ...formData },
      }).then((response) => {
        console.log("response.data", response.data);
        navigate("/");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="newBeerFrom" onSubmit={handleSubmit}>
        {formFields.map((formField) => (
          <Input
            key={formField.name}
            {...formField}
            formData={formData}
            setFormData={setFormData}
          />
        ))}

        <div className="group-input">
          <input
            className="input-like"
            type="submit"
            name="submit"
            id="submit"
            value="Add new"
          />
        </div>
      </form>
    </>
  );
};

export default NewBeerPage;
