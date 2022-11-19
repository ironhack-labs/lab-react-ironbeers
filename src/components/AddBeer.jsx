
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBeer() {
  const[name, setName] = useState('');
  const[tagline, setTagline] = useState('');
  const[description, setDescription] = useState('');
  const[first_brewed, setFirstBrewed] = useState('');
  const[brewers_tips, setBrewersTips] = useState('');
  const[attenuation_level, setAtenuationLevel] = useState(0);
  const[contributed_by, setContributedBy] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAtenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};
      await axios.post('https://ih-beers-api2.herokuapp.com/beers/new',body);

      setName('');
      setTagline('');
      setDescription('');
      setFirstBrewed('');
      setBrewersTips('');
      setAtenuationLevel(0);
      setContributedBy('');

      navigate('/list');

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="AddBeerPage">
      <h3>Add A New Beer!</h3>
      <form onSubmit={handleSubmit}>

        <label htmlFor='name'>Name:</label>
        <input type="text" value = {name} onChange={handleName} />

        <label htmlFor='tagline'>Tagline:</label>
        <input type="text" value = {tagline} onChange={handleTagline} />

        <label htmlFor='description'>Description:</label>
        <input type="text" value = {description} onChange={handleDescription} />

        <label htmlFor='first_brewed'>First Brewed:</label>
        <input type="text" value = {first_brewed} onChange={handleFirstBrewed} />

        <label htmlFor='brewers_tips'>Brewers Tips:</label>
        <input type="text" value = {brewers_tips} onChange={handleBrewersTips} />

        <label htmlFor='attenuation_level'>Attenuation Level:</label>
        <input type="text" value = {attenuation_level} onChange={handleAttenuationLevel} />

        <label htmlFor='contributed_by'>Contributed By:</label>
        <input type="text" value = {contributed_by} onChange={handleContributedBy} />
     
        <button type ="Submit">List Beer</button>
     </form>
    </div>
  )
}

export default AddBeer;