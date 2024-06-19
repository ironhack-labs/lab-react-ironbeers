// src/pages/AddBeerPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './AddBeerPage.css'
function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', formData)
      .then((response) => {
        console.log(response.data);
        alert('Beer added successfully!');
      })
      .catch((error) => {
        console.error('Error adding beer:', error);
      });
  };

  return (
    <form className="add-beer-form" onSubmit={handleSubmit}>
      <h2>Add New Beer</h2>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label>Tagline</label>
      <input
        type="text"
        name="tagline"
        value={formData.tagline}
        onChange={handleChange}
        required
      />
      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <label>First Brewed</label>
      <input
        type="text"
        name="first_brewed"
        value={formData.first_brewed}
        onChange={handleChange}
        required
      />
      <label>Brewer's Tips</label>
      <input
        type="text"
        name="brewers_tips"
        value={formData.brewers_tips}
        onChange={handleChange}
        required
      />
      <label>Attenuation Level</label>
      <input
        type="number"
        name="attenuation_level"
        value={formData.attenuation_level}
        onChange={handleChange}
        required
      />
      <label>Contributed By</label>
      <input
        type="text"
        name="contributed_by"
        value={formData.contributed_by}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
