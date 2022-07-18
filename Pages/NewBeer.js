import React from "react";
import { Link } from "react-router-dom";
import HomeHead from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";
import axios from "axios";
import { useState } from "react";

const NewBeer = () => {
  const [addBeer, setAddBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(addBeer);

    axios({
      method: "POST",
      url: "https://ih-beers-api2.herokuapp.com/beers/new",
      data: addBeer,
    }).then(() => {
      console.log("You dit it");
    });
  };

  return (
    <>
      <header>
        <Link to={"/"}>
          <img src={HomeHead} />
        </Link>
      </header>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setAddBeer({ ...addBeer, [e.target.name]: e.target.value });
            }}
          />

          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => {
              setAddBeer({ ...addBeer, [e.target.name]: e.target.value });
            }}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => {
              setAddBeer({ ...addBeer, [e.target.name]: e.target.value });
            }}
          />

          <label>First_brewed</label>
          <input
            type="text"
            name="first_brewed"
            onChange={(e) => {
              setAddBeer({ ...addBeer, [e.target.name]: e.target.value });
            }}
          />

          <label>Brewers tips</label>
          <input
            type="text"
            name="brewers_tips"
            onChange={(e) => {
              setAddBeer({ ...addBeer, [e.target.name]: e.target.value });
            }}
          />

          <label>Attenuation_level</label>
          <input
            type="number"
            name="attenuation_level"
            min={0}
            onChange={(e) => {
              setAddBeer({ ...addBeer, [e.target.name]: e.target.value });
            }}
          />

          <label>Contributed_by</label>
          <input
            type="text"
            name="contributed_by"
            onChange={(e) => {
              setAddBeer({ ...addBeer, [e.target.name]: e.target.value });
            }}
          />
          <button type="submit">Submit beer</button>
        </form>
      </div>
    </>
  );
};

export default NewBeer;