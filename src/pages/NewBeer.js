import React from 'react'
import { useState } from 'react';
import Header from '../components/Header'
import axios from 'axios';

function NewBeer() {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [firstBrewed, setFirstBrewed] = useState('')
  const [brewersTips, setBrewersTips] = useState('')
  const [attenuationLevel, setAttenuationLevel] = useState(0)
  const [contributedBy, setContributedBy] = useState('')

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //The body of the request NEEDS to be an object
      const body = { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy };

      await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);

      setName('');
      setTagline('');
      setDescription('');
      setFirstBrewed('');
      setBrewersTips('');
      setAttenuationLevel(0);
      setContributedBy('');

      console.log(name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
    <Header />
    <div className='borderbeer'>
    <div className="NewBeer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={handleName} />

        <label htmlFor="Tagline">Tagline:</label>
        <input type="text" value={tagline} onChange={handleTagline} />

        <label htmlFor="Description">Description:</label>
        <input type="text" value={description} onChange={handleDescription} />

        <label htmlFor="FirstBrewed">First Brewed:</label>
        <input type="text" value={firstBrewed} onChange={handleFirstBrewed} />

        <label htmlFor="BrewersTips">Brewers Tips:</label>
        <input type="text" value={brewersTips} onChange={handleBrewersTips} />

        <label htmlFor="AttenuationLevel">Attenuation Level:</label>
        <input type="number" value={attenuationLevel} onChange={handleAttenuationLevel} />

        <label htmlFor="ContributedBy">Contributed By:</label>
        <input type="text" value={contributedBy} onChange={handleContributedBy} />

        <button type="Submit">add new</button>
      </form>
    </div>
  </div>
  </div>
  );
}


export default NewBeer