import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewBeer.css';
import axios from 'axios';

function NewBeer() {

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, SetFirstBrewed] = useState('');
  const [brewers_tips, SetBrewersTips] = useState('');
  const [attenuation_level, SetAttenuationLevel] = useState(0);
  const [contributed_by, SetContributedBy] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  const body = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }
  axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', body)
      .then((response) => {
        setName('');
        setTagline('');
        setDescription('');
        SetFirstBrewed('');
        SetBrewersTips('');
        SetAttenuationLevel(0);
        SetContributedBy('');
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="form">
       <h3>Add A New Beer</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="text">Tagline</label>
        <input type="text" onChange={(e) => setTagline(e.target.value)} />
        <label htmlFor="title">Description</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
        <label htmlFor="title">First Brewed</label>
        <input type="text" onChange={(e) => SetFirstBrewed(e.target.value)} />
        <label htmlFor="title">Brewers Tips</label>
        <input type="text" onChange={(e) => SetBrewersTips(e.target.value)} />
        <label htmlFor="title">Attenuation Level</label>
        <input type="number" onChange={(e) => SetAttenuationLevel(e.target.value)} />
        <label htmlFor="title">Contributed By</label>
        <input type="text" onChange={(e) => SetContributedBy(e.target.value)} />
        <button type="submit">Add Beer</button>
      </form>
    </div>
  )
}

export default NewBeer