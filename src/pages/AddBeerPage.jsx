import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    image_url: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        ...form,
        attenuation_level: Number(form.attenuation_level),
      });
      navigate("/beers");
    } catch (error) {
      console.error("Error adding new beer:", error);
    }
  };

  return (
    <div>
      <h1>Add New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Tagline:
          <input
            type="text"
            name="tagline"
            value={form.tagline}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image_url"
            value={form.image_url}
            onChange={handleChange}
          />
        </label>
        <label>
          First Brewed:
          <input
            type="text"
            name="first_brewed"
            value={form.first_brewed}
            onChange={handleChange}
          />
        </label>
        <label>
          Brewer's Tips:
          <input
            type="text"
            name="brewers_tips"
            value={form.brewers_tips}
            onChange={handleChange}
          />
        </label>
        <label>
          Attenuation Level:
          <input
            type="number"
            name="attenuation_level"
            value={form.attenuation_level}
            onChange={handleChange}
          />
        </label>
        <label>
          Contributed By:
          <input
            type="text"
            name="contributed_by"
            value={form.contributed_by}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
