import React, { useState } from "react";
import Axios from "axios";
import "./NewBeer.css";

export default function NewBeer(props) {
  props.displayHeader(true);

  const [formInputs, setFormInputs] = useState({});

  const handleFormInput = (e) => {
    const copyInputs = { ...formInputs };
    copyInputs[e.target.name] = e.target.value;

    setFormInputs(copyInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://ih-beers-api2.herokuapp.com/beers/new", formInputs)
      .then(() => {
        setFormInputs({});
      })
      .catch((err) => console.log("could not post beer on API", err));
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={formInputs.name}
          name="name"
          onChange={handleFormInput}
        ></input>
        <label>Tagline</label>
        <input
          type="text"
          value={formInputs.tagline}
          name="tagline"
          onChange={handleFormInput}
        ></input>
        <label>Description</label>
        <input
          type="text"
          value={formInputs.description}
          name="description"
          onChange={handleFormInput}
        ></input>
        <label>First brewed</label>
        <input
          type="text"
          value={formInputs.first_brewed}
          name="first_brewed"
          onChange={handleFormInput}
        ></input>
        <label>Brewers tips</label>
        <input
          type="text"
          value={formInputs.brewers_tips}
          name="brewers_tips"
          onChange={handleFormInput}
        ></input>
        <label>Attenuation level</label>
        <input
          type="number"
          value={formInputs.attenuation_level}
          name="attenuation_level"
          onChange={handleFormInput}
        ></input>
        <label>Contributed by</label>
        <input
          type="text"
          value={formInputs.contributed_by}
          name="contributed_by"
          onChange={handleFormInput}
        ></input>
        <button type="submit">Submit Beer</button>
      </form>
    </div>
  );
}
