import React, {useState } from 'react';
import axios from 'axios';

function Form(props) {
  const [beer, setBeer] = useState({
    brewers_tips: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: 0,
    description: '',
    contributed_by: '',
  });

  async function handleSubmit(event) {
      event.preventDefault();

      const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beer);

      props.history.push("/")
  }

  function handleChange(event) {
    setBeer({...beer, [event.currentTarget.name]: event.currentTarget.value,})
  } 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create a new beer!</h2>
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            id="newBeerName"
            onChange={handleChange}
            value={beer.name}
          />
        </div>

        <div>
          <label>Tagline</label>
          <input
            name="tagline"
            type="text"
            id="newBeerTagline"
            onChange={handleChange}
            value={beer.tagline}
          />
        </div>

        <div>
          <label>Description</label>
          <input
            name="description"
            type="text"
            id="newBeerDescription"
            onChange={handleChange}
            value={beer.description}
          />
        </div>

        <div>
          <label>First Brewed</label>
          <input
            name="first_brewed"
            type="text"
            id="newBeerFirst_brewed"
            onChange={handleChange}
            value={beer.first_brewed}
          />
        </div>

        <div>
          <label>Brewers Tips</label>
          <input
            name="brewers_tips"
            type="text"
            id="newBeerBrewers_tips"
            onChange={handleChange}
            value={beer.brewers_tips}
          />
        </div>

        <div>
          <label>Attenuation Level</label>
          <input
            name="attenuation_level"
            type="text"
            id="newBeerAttenuation_level"
            onChange={handleChange}
            value={beer.attenuation_level}
          />
        </div>

        <div>
          <label>Contributed By</label>
          <input
            name="contributed_by"
            type="text"
            id="newBeerContributed_by"
            onChange={handleChange}
            value={beer.contributed_by}
          />
        </div>

        <button type="submit">Create a new Beer</button>
      </form>
    </>
  );
}

export default Form;
