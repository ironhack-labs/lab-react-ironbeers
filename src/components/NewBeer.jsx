import React from 'react'
import NavBar from './NavBar';
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy };

      await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);

      setName('')
      setTagline('')
      setDescription('')
      setFirstBrewed('')
      setBrewersTips('')
      setAttenuationLevel(0)
      setContributedBy('')
      navigate('/');

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
    <NavBar/>
    <div>
      <h3>Add new beer</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={handleName} />
        <label htmlFor="tagline">Tagline:</label>
        <input type="text" value={tagline} onChange={handleTagline} />
        <label htmlFor="description">Description:</label>
        <input type="text" value={description} onChange={handleDescription} />
        <label htmlFor="first_brewed">First Brewed:</label>
        <input type="text" value={firstBrewed} onChange={handleFirstBrewed} />
        <label htmlFor="brewers_tips">Tips:</label>
        <input type="text" value={brewersTips} onChange={handleBrewersTips} />
        <label htmlFor="attenuation_level">Attenuation Level:</label>
        <input type="number" value={attenuationLevel} onChange={handleAttenuationLevel} />
        <label htmlFor="contributed_by">Contributed By:</label>
        <input type="text" value={contributedBy} onChange={handleContributedBy} />

        <button type="Submit">Add</button>
      </form>
    </div>
    </div>
  )
}

export default NewBeer

/* 
name - must be type text
tagline - must be type text
description - must be type text
first_brewed - must be type text
brewers_tips - must be type text
attenuation_level - must be type number !!!
contributed_by - must be type text
*/