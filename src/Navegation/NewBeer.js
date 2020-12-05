import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewBeer(props) {
  const [dataBeer, setDsataBeer] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });
  function handleChance(event) {
    setDsataBeer({
      ...dataBeer,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    async function insertBeer() {
      try {
        const response = await axios.post(
          `https://ih-beers-api2.herokuapp.com/beers/new/`,
          dataBeer
        );
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
    insertBeer();
  }

  return (
    <form className="dfc-jc-ac include">
      <label>Name</label>
      <input
        type="text"
        className="btn includeText"
        placeholder="Text"
        name="name"
        value={dataBeer.name}
        onChange={handleChance}
      />
      <label>Tagline</label>
      <input
        type="text"
        className="btn includeText"
        placeholder="Text"
        name="tagline"
        value={dataBeer.tagline}
        onChange={handleChance}
      />
      <label>Description</label>
      <input
        type="text"
        className="btn includeText"
        placeholder="Text"
        style={{ height: '100px' }}
        name="description"
        value={dataBeer.description}
        onChange={handleChance}
      />
      <label>First Brewed</label>
      <input
        type="text"
        className="btn includeText"
        placeholder="Text"
        name="first_brewed"
        value={dataBeer.first_brewed}
        onChange={handleChance}
      />
      <label>Brewers Tips</label>
      <input
        type="text"
        className="btn includeText"
        placeholder="Text"
        name="brewers_tips"
        value={dataBeer.brewers_tips}
        onChange={handleChance}
      />
      <label>Attenuation Level</label>
      <input
        type="number"
        className="btn includeNumber"
        placeholder="Number"
        name="attenuation_level"
        value={dataBeer.attenuation_level}
        onChange={handleChance}
      />
      <label>Contributed By</label>
      <input
        type="text"
        className="btn includeText"
        placeholder="Text"
        name="contributed_by"
        value={dataBeer.contributed_by}
        onChange={handleChance}
      />
      <button
        type="submit"
        className="btn"
        style={{ width: '92%', margin: '4%', borderRadius: '50px' }}
        value="submit"
        onClick={handleSubmit}
      >
        ADD NEW
      </button>
    </form>
  );
}

export default NewBeer;
