import React, { useState } from 'react';
import axios from 'axios';
import Header from "../Header/Header"

function NewBeer(props) {
  const [beerState, setBeerState] = useState({
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: 0,
    description: '',
    contributed_by: '',
    brewers_tips: '',
  });

  function handleChange(event) {
    setBeerState({
      ...beerState,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      beerState
    );

    console.log(response);

    props.history.push('/beers');
  }

  return (
    <form onSubmit={handleSubmit}>
    <Header />
      <div>
        <label htmlFor="newBeerName">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="newCharacterName"
          onChange={handleChange}
          value={beerState.name}
        />
      </div>

      <div>
        <label htmlFor="newBeerTagline">Tagline</label>
        <input
          name="tagline"
          type="text"
          className="form-control"
          id="newCharacterName"
          onChange={handleChange}
          value={beerState.tagline}
        />
      </div>

      <div>
        <label htmlFor="newBeerDescription">Description</label>
        <input
          name="description"
          type="text"
          className="form-control"
          id="newCharacterName"
          onChange={handleChange}
          value={beerState.description}
        />
      </div>

      <div>
        <label htmlFor="newBeerFirstBrewed">First Brewed</label>
        <input
          name="first_brewed"
          type="text"
          className="form-control"
          id="newCharacterName"
          onChange={handleChange}
          value={beerState.first_brewed}
        />
      </div>

      <div>
        <label htmlFor="newBeerBrewerTips">Brewer Tips</label>
        <input
          name="brewers_tips"
          type="text"
          className="form-control"
          id="newCharacterName"
          onChange={handleChange}
          value={beerState.brewers_tips}
        />
      </div>

      <div>
        <label htmlFor="newBeerAttenuationLevel">Attenuation Level</label>
        <input
          name="attenuation_level"
          type="number"
          className="form-control"
          id="newCharacterName"
          onChange={handleChange}
          value={beerState.attenuation_level}
        />
      </div>

      <div>
        <label htmlFor="newBeerContributedBy">Contributed By</label>
        <input
          name="contributed_by"
          type="text"
          className="form-control"
          id="newCharacterName"
          onChange={handleChange}
          value={beerState.contributed_by}
        />
      </div>

      <button type="submit">ADD NEW</button>
    </form>
  );
}

export default NewBeer;