import React, { useState } from 'react';
import axios from 'axios';

function NewBeer() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState('');
  const [contributedBy, setContributedBy] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy
    };

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then(response => {
        setMessage(response.data.message);
        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewersTips('');
        setAttenuationLevel('');
        setContributedBy('');
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <label htmlFor="tagline">Tagline:</label>
        <input
          id="tagline"
          type="text"
          value={tagline}
          onChange={event => setTagline(event.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <label htmlFor="firstBrewed">First Brewed:</label>
        <input
          id="firstBrewed"
          type="text"
          value={firstBrewed}
          onChange={event => setFirstBrewed(event.target.value)}
        />

        <label htmlFor="brewersTips">Brewers Tips:</label>
        <input
          id="brewersTips"
          type="text"
          value={brewersTips}
          onChange={event => setBrewersTips(event.target.value)}
        />

        <label htmlFor="attenuationLevel">Attenuation Level:</label>
        <input
          id="attenuationLevel"
          type="number"
          value={attenuationLevel}
          onChange={event => setAttenuationLevel(event.target.value)}
        />

        <label htmlFor="contributedBy">Contributed By:</label>
        <input
          id="contributedBy"
          type="text"
          value={contributedBy}
          onChange={event => setContributedBy(event.target.value)}
        />

        <button type="submit">Add new beer</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default NewBeer;
