import axios from "axios";
import React, { useState } from "react";

function Newbeer() {
  const [newBeer, setNewBeer] = useState({});

  function handleChange(e) {
    console.log(e);
    const { name, value } = e.target;

    setNewBeer({ ...newBeer, [name]: value });
  }

  function submitBeer(e) {
    e.preventDefault();

    console.log({ newBeer });

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then(({ data }) => {
        console.log("data: ", data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }

  return (
    <div>
      <h1>New beer</h1>

      <form onSubmit={submitBeer}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={newBeer.name}
          />
        </label>
        <label>
          Tagline
          <input
            type="text"
            name="tagline"
            onChange={handleChange}
            value={newBeer.tagline}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={newBeer.description}
          />
        </label>
        <label>
          First Brewed
          <input
            type="text"
            name="firstBrewed"
            onChange={handleChange}
            value={newBeer.firstBrewed}
          />
        </label>
        <label>
          Brewers Tips
          <input
            type="text"
            name="brewersTips"
            onChange={handleChange}
            value={newBeer.brewersTips}
          />
        </label>
        <label>
          Attenuation Level
          <input
            type="number"
            name="attenuationLevel"
            onChange={handleChange}
            value={newBeer.attenueationLevel}
          />
        </label>
        <label>
          Contributed By
          <input
            type="text"
            name="contributedBy"
            onChange={handleChange}
            value={newBeer.contributedBy}
          />
        </label>
        <button type="submit">ADD NEW</button>
      </form>
    </div>
  );
}

export default Newbeer;
