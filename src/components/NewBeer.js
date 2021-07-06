import React from 'react';
import Header from './Header';
import axios from 'axios';
import { useState } from 'react';

function NewBeer(props) {
  const [beerObj, setBeerObj] = useState({});

  const handleChange = (e) => {
    let copyBeer = { ...beerObj };
    copyBeer[e.target.name] = e.target.value;
    setBeerObj(copyBeer);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    beerObj.attenuation_level = Number(beerObj.attenuation_level);
    console.log(beerObj);

    axios
      .post(`https://ironrest.herokuapp.com/beers`, beerObj)
      .then((res) => {
        console.log(res);
      })
      .catch(console.error);
  };

  return (
    <div>
      <Header />
      {/* <h1>NEW BEER IS WORKING</h1> */}
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <input
          name="beer"
          onChange={handleChange}
          placeholder="name"
          type="text"
        />
        <h3>Tagline</h3>
        <input
          name="tagline"
          onChange={handleChange}
          placeholder="tagline"
          type="text"
        />
        <h3>Description</h3>
        <input
          name="description"
          onChange={handleChange}
          placeholder="description"
          type="text"
        />
        <h3>First Brewed</h3>
        <input
          name="first_brewed"
          onChange={handleChange}
          placeholder="first_brewed"
          type="text"
        />
        <h3>Brewers Tips</h3>
        <input
          name="brewers_tips"
          onChange={handleChange}
          placeholder="name"
          type="text"
        />
        <h3>Attenuation Level</h3>
        <input
          name="attenuation_level"
          onChange={handleChange}
          placeholder="name"
          type="number"
        />
        <h3>Contributed By</h3>
        <input
          name="contributed_by"
          onChange={handleChange}
          placeholder="name"
          type="text"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
