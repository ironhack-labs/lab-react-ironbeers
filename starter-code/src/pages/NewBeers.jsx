import React, { useState } from "react";
import axios from "axios";
import NavMain from "./NavMain";

function NewBeer(props) {
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  });
  function handleChange(e) {
    setNewBeer({ ...newBeer, [e.target.name]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", newBeer)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
    console.log("The beer was added");
  }

  return (
    <div>
      <NavMain />
      <div className="container">
        <form onSubmit={onSubmit} className="addbeer">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={newBeer.name}
            onChange={handleChange}
          />
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={newBeer.tagline}
            onChange={handleChange}
          />
          <label>Description</label>
          <input
            id="description"
            type="text"
            name="description"
            value={newBeer.description}
            onChange={handleChange}
          />
          <label>First brew</label>
          <input
            type="text"
            name="first_brewed"
            value={newBeer.first_brewed}
            onChange={handleChange}
          />
          <label>Brewer tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={newBeer.brewers_tips}
            onChange={handleChange}
          />
          <label>Attenuation level</label>
          <input
            type="number"
            name="attenuation_level"
            value={newBeer.attenuation_level}
            onChange={handleChange}
          />
          <label>Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            value={newBeer.contributed_by}
            onChange={handleChange}
          />
          <button>ADD A BEER</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
