import React from "react";
import Header from "../components/Header";
import axios from "axios";

const NewBeer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const tagline = e.target.tagline.value;
    const description = e.target.description.value;
    const first_brewed = e.target.first_brewed.value;
    const brewers_tips = e.target.brewers_tips.value;
    const attenuation_level = e.target.attenuation_level.value;
    const contributed_by = e.target.contributed_by.value;
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="tagline">Tagline</label>
        <input type="text" name="tagline" id="tagline" />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" />
        <label htmlFor="first_brewed">First Brewed</label>
        <input type="text" name="first_brewed" id="first_brewed" />
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input type="text" name="brewers_tips" id="brewers_tips" />
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input type="number" name="attenuation_level" id="attenuation_level" />
        <label htmlFor="contributed_by">Contributed By</label>
        <input type="text" name="contributed_by" id="contributed_by" />
        <button type="submit">Add New</button>
      </form>
    </div>
  );
};

export default NewBeer;