// dependencies
import React, { useState } from 'react';
import axios from 'axios';

// styled components
import { Form } from '../styles/Form';

export const AddBeer = () => {
  const [beer, setNewBeer] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });

  const addNewBeer = () => {
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', beer)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNewBeer();
    console.log('added new beer ', beer);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={beer.name}
          onChange={e => setNewBeer({ ...beer, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="Tagline">Tagline: </label>
        <input
          type="text"
          id="Tagline"
          value={beer.tagline}
          onChange={e => setNewBeer({ ...beer, tagline: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="Description">Description: </label>
        <input
          type="text"
          id="Description"
          value={beer.description}
          onChange={e => setNewBeer({ ...beer, description: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="first_brewed">Date of first brew: </label>
        <input
          type="text"
          id="first_brewed"
          value={beer.first_brewed}
          onChange={e => setNewBeer({ ...beer, first_brewed: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="brewers_tips">Some tips for brewers: </label>
        <input
          type="text"
          id="brewers_tips"
          value={beer.brewers_tips}
          onChange={e => setNewBeer({ ...beer, brewers_tips: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="attenuation_level">Level of attenuation: </label>
        <input
          type="number"
          id="attenuation_level"
          value={beer.attenuation_level}
          onChange={e =>
            setNewBeer({ ...beer, attenuation_level: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="contributed_by">Created by: </label>
        <input
          type="text"
          id="contributed_by"
          value={beer.contributed_by}
          onChange={e =>
            setNewBeer({ ...beer, contributed_by: e.target.value })
          }
        />
      </div>
      <div className="btn-container">
        <button type="submit">Add beer!</button>
      </div>
    </Form>
  );
};
