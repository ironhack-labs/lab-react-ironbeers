import axios from 'axios';
import React from 'react';
import { useState } from 'react';

export const CreateBeer = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewers_tips, setBrewersTips] = useState('');
  const [attenuation_level, setAttenuationLeve] = useState('');
  const [contributed_by, setContributedBy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level: +attenuation_level,
      contributed_by,
    };
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then((res) => console.log(res));
    console.log(newBeer);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Name</label>
          <input
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-field">
          <label>Tagline</label>
          <input
            value={tagline}
            type="text"
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </div>

        <div className="form-field">
          <label>Description</label>
          <input
            value={description}
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className="form-field">
          <label>First Brewed</label>
          <input
            value={first_brewed}
            type="text"
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
          />
        </div>

        <div className="form-field">
          <label>Brewers Tips</label>
          <input
            value={brewers_tips}
            type="text"
            onChange={(e) => {
              setBrewersTips(e.target.value);
            }}
          />
        </div>

        <div className="form-field">
          <label>Attenuation Level</label>
          <input
            value={attenuation_level}
            type="number"
            onChange={(e) => {
              setAttenuationLeve(e.target.value);
            }}
          />
        </div>

        <div className="form-field">
          <label>Contributed By</label>
          <input
            value={contributed_by}
            type="text"
            onChange={(e) => {
              setContributedBy(e.target.value);
            }}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
