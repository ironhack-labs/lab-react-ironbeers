import { useState } from 'react';
import React from 'react';
import BeersList from './BeersList';
import axios from 'axios';

function NewBeer() {
  const [name, setName] = useState('');
  const [tagline, setTagLine] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewer_tips, setBrewerTips] = useState('');
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewer_tips: brewer_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', body)
      .then((response) => {
        setName('');
        setTagLine('');
        setDescription('');
        setFirstBrewed('');
        setBrewerTips('');
        setAttenuationLevel(0);
        setContributedBy('');
      });
  };

  return (
    <div>
      <h3>New Beer</h3>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagLine(e.target.value)}
          value={tagline}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={first_brewed}
        />

        <label>Brewer Tips</label>
        <input
          type="text"
          name="brewer_tips"
          onChange={(e) => setBrewerTips(e.target.value)}
          value={brewer_tips}
        />

        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => setAttenuationLevel(e.target.value)}
          value={attenuation_level}
        />

        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributed_by}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default NewBeer;
