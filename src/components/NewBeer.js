import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import { Link } from 'react-router-dom';

import Navbar from './Navbar';

const NewBeer = () => {
  let [name, setName] = useState('Name');
  let [tagline, setTagline] = useState('Tagline');
  let [description, setDescription] = useState('Description');
  let [first_brewed, setBrewed] = useState('Brewed');
  let [brewers_tips, setTips] = useState('Tips');
  let [attenuation_level, setLevel] = useState('Level');
  let [contributed_by, setUser] = useState('By');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleTaglineChange = (event) => {
    setTagline(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleBrewedChange = (event) => {
    setBrewed(event.target.value);
  };
  const handleTipsChange = (event) => {
    setTips(event.target.value);
  };
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };
  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTaglineChange}
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleBrewedChange}
        />
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={handleTipsChange}
        />
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleLevelChange}
        />
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleUserChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewBeer;
