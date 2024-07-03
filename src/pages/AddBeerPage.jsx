import React, { useState } from 'react';
import axios from 'axios';

const AddBeerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData)
      .then(response => {
        console.log('Beer added:', response.data);
      })
      .catch(error => {
        console.error('Error adding beer:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} placeholder="Tagline" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} placeholder="First Brewed" />
      <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} placeholder="Brewers Tips" />
      <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} placeholder="Attenuation Level" />
      <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} placeholder="Contributed By" />
      <button type="submit">Add Beer</button>
    </form>
  );
};

export default AddBeerPage;
