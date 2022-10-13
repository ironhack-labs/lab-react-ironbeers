import axios from "axios";
import React, { useState } from "react";

const NewBeerPage = () => {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });
  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: name === "attenuation_level" ? +value : value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="row w-100 p-2 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="col-12 col-md-6">
        <label htmlFor="name" className="text-start w-100 ps-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control mb-4"
          value={form.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="tagline" className="text-start w-100 ps-2">
          Tagline
        </label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          className="form-control mb-4"
          value={form.tagline}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="description" className="text-start w-100 ps-2">
          Description
        </label>
        <textarea
          type="text"
          name="description"
          id="description"
          rows="3"
          className="form-control mb-4"
          value={form.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="first_brewed" className="text-start w-100 ps-2">
          First Brewed
        </label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          className="form-control mb-4"
          value={form.first_brewed}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="brewers_tips" className="text-start w-100 ps-2">
          Brewers Tips
        </label>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          className="form-control mb-4"
          value={form.brewers_tips}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="attenuation_level" className="text-start w-100 ps-2">
          Attenuation Level
        </label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          className="form-control mb-4"
          value={form.attenuation_level}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="contributed_by" className="text-start w-100 ps-2">
          Contributed By
        </label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          className="form-control mb-4"
          value={form.contributed_by}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12 col-md-6">
        <button type="submit" className="btn btn-primary w-100">
          Create
        </button>
      </div>
    </form>
  );
};

export default NewBeerPage;
