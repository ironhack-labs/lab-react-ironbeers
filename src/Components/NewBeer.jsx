import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function NewBeer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const create = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        formData
      );
      setFormData({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
      })
      navigate("/");
      console.log("created data", create);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Tagline:
          <input
            type="text"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}>
          </textarea>
        </label>
        <label>
          First Brewed:
          <input
            type="text"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleChange}
          />
        </label>
        <label>
          Brewers Tips:
          <input
            type="text"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleChange}
          />
        </label>
        <label>
          Attenuation Level:
          <input
            type="number"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleChange}
          />
        </label>
        <label>
          Contributed By:
          <input
            type="text"
            name="contributed_by"
            value={formData.contributed_by}
            onChange={handleChange}
          />
          <div className="button-center"><button type="submit">Add new</button></div>
        </label>
      </form>
    </div>
  );
}

export default NewBeer;
