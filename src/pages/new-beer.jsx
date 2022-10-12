import axios from "axios";
import React, { useState } from "react";
import Header from "../components/header";

function Newbeer() {
  const [newBeer, setNewBeer] = useState({});

  function handleChange(e) {
    // console.log(e);
    const { name, value } = e.target;

    setNewBeer({ ...newBeer, [name]: value });
  }

  function submitBeer(e) {
    e.preventDefault();

    // console.log({ newBeer });

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
    <div className="beerFormDaddy">
      <Header />

      <form className="beerFormMain" onSubmit={submitBeer}>
        <label>
          <b>Name</b>
          <br />
          <input
            className="createBeerInput"
            type="text"
            name="name"
            onChange={handleChange}
            value={newBeer.name}
          />
        </label>
        <br />
        <label>
          <b>Tagline</b>
          <br />
          <input
            className="createBeerInput"
            type="text"
            name="tagline"
            onChange={handleChange}
            value={newBeer.tagline}
          />
        </label>
        <br />
        <label>
          <b>Description</b>
          <br />
          <input
            className="createBeerDescriptionInput"
            type="text"
            name="description"
            onChange={handleChange}
            value={newBeer.description}
          />
        </label>
        <br />
        <label>
          <b>First Brewed</b>
          <br />
          <input
            className="createBeerInput"
            type="text"
            name="firstBrewed"
            onChange={handleChange}
            value={newBeer.firstBrewed}
          />
        </label>
        <br />
        <label>
          <b>Brewers Tips</b>
          <br />
          <input
            className="createBeerInput"
            type="text"
            name="brewersTips"
            onChange={handleChange}
            value={newBeer.brewersTips}
          />
        </label>
        <br />
        <label>
          <b>Attenuation Level</b>
          <br />
          <input
            className="createBeerInput"
            type="number"
            name="attenuationLevel"
            onChange={handleChange}
            value={newBeer.attenueationLevel}
          />
        </label>
        <br />
        <label>
          <b>Contributed By</b>
          <br />
          <input
            className="createBeerInput"
            type="text"
            name="contributedBy"
            onChange={handleChange}
            value={newBeer.contributedBy}
          />
        </label>
        <br />
        <button className="formButton" type="submit">
          ADD NEW
        </button>
      </form>
    </div>
  );
}

export default Newbeer;
