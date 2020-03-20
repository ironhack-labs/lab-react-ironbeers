// dependencies
import React, { useState } from 'react';

// local modules
import { addNewBeer } from '../services/beersService';

// styled components
import { Form, Input } from '../styles/Form';

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

  const handleSubmit = e => {
    e.preventDefault();
    addNewBeer(beer);
    console.log('added new beer ', beer);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <Input
          type="text"
          id="name"
          value={beer.name}
          onChange={e => setNewBeer({ ...beer, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="Tagline">Tagline: </label>
        <Input
          type="text"
          id="Tagline"
          value={beer.tagline}
          onChange={e => setNewBeer({ ...beer, tagline: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="Description">Description: </label>
        <Input
          type="text"
          id="Description"
          value={beer.description}
          onChange={e => setNewBeer({ ...beer, description: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="first_brewed">Date of first brew: </label>
        <Input
          type="text"
          id="first_brewed"
          value={beer.first_brewed}
          onChange={e => setNewBeer({ ...beer, first_brewed: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="brewers_tips">Some tips for brewers: </label>
        <Input
          type="text"
          id="brewers_tips"
          value={beer.brewers_tips}
          onChange={e => setNewBeer({ ...beer, brewers_tips: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="attenuation_level">Level of attenuation: </label>
        <Input
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
        <Input
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
