import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddBeerPage() {

  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  const navigate = useNavigate(); 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: name === 'attenuation_level' ? Number(value) : value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData);
      if (response.status === 200) {
        alert('Beer successfully added!');
        navigate('/beers');

      }
    } catch (error) {
      console.error('There was an error adding the beer:', error.response);

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Tagline:
        <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        First Brewed:
        <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} />
      </label>
      <label>
        Brewer's Tips:
        <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} />
      </label>
      <label>
        Attenuation Level:
        <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} />
      </label>
      <label>
        Contributed By:
        <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} />
      </label>
      <button type="submit">Add Beer</button>
    </form>
  );
}

export default AddBeerPage;