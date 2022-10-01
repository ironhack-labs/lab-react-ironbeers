import axios from "axios";
import React, { useState } from "react";

function NewBeer() {
  const [createBeer, setCreateBeer] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateBeer({ ...createBeer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(createBeer);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", createBeer)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Add Beer</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Tagline:
          <input type="text" name="tagline" onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={handleChange} />
        </label>
        <label>
          First Brewed:
          <input type="text" name="first_brewed" onChange={handleChange} />
        </label>
        <label>
          Brewers Tips:
          <input type="text" name="brewers_tips" onChange={handleChange} />
        </label>
        <label>
          Attenuation Level:
          <input
            type="number"
            name="attenuation_level"
            onChange={handleChange}
          />
        </label>
        <label>
          Contributed By:
          <input type="text" name="contributed_by" onChange={handleChange} />
        </label>
        <button>Add Brew</button>
      </form>
    </>
  );
}

export default NewBeer;
