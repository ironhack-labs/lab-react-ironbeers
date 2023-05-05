import React, { useState } from 'react';
import Header from './Header';

function NewBeer() {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="tagline">Tagline:</label>
        <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
        <label htmlFor="first_brewed">First Brewed:</label>
        <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} />
        <label htmlFor="brewers_tips">Brewers Tips:</label>
        <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} />
        <label htmlFor="attenuation_level">Attenuation Level:</label>
        <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} />
        <label htmlFor="contributed_by">Contributed By:</label>
        <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
