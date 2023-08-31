import React, { useState } from 'react';
import Header from '../components/Header';
import './NewBeer.css';

function NewBeer() {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <Header />
      <h2>New Beer</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Tagline:</label>
        <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} />

        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />

        <label>First Brewed:</label>
        <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} />

        <label>Brewers Tips:</label>
        <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} />

        <label>Attenuation Level:</label>
        <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} />

        <label>Contributed By:</label>
        <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} />

        <button type="submit">ADD NEW</button>
      </form>
    </div>
  );
}

export default NewBeer;