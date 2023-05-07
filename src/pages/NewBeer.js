import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
      })
      .then((response) => {
        console.log(response);
        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewersTips('');
        setAttenuationLevel(0);
        setContributedBy('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="form-box">
        <div>
          <label>Name:</label>
          <input type='text' id='name' value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label>Tagline:</label>
          <input type='text' id='tagline' value={tagline} onChange={(event) => setTagline(event.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea id='description' value={description} onChange={(event) => setDescription(event.target.value)} />
        </div>
        <div>
          <label>First brewed:</label>
          <input type='text' id='firstBrewed' value={firstBrewed} onChange={(event) => setFirstBrewed(event.target.value)} />
        </div>
        <div>
          <label>Brewers tips:</label>
          <textarea id='brewersTips' value={brewersTips} onChange={(event) => setBrewersTips(event.target.value)} />
        </div>
        <div>
          <label>Attenuation level:</label>
          <input type='number' id='attenuationLevel' value={attenuationLevel} onChange={(event) => setAttenuationLevel(event.target.value)} />
        </div>
        <div>
          <label>Contributed by:</label>
          <input type='text' id='contributedBy' value={contributedBy} onChange={(event) => setContributedBy(event.target.value)} />
        </div>
        <button type='submit' className="add-new-box">
          <Link to="/beers" className="add-new-box">ADD NEW</Link>
        </button>
      </form>
    </div>
  );
}

export default NewBeer;

