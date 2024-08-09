import React, { useState } from 'react';
import axios from 'axios';
import './AddBeerPage.css';  // Assuming you'll style with a CSS file

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ensure attenuation_level is a number
    const beerData = { ...formData, attenuation_level: Number(formData.attenuation_level) };

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerData)
      .then(response => {
        console.log('Beer successfully added:', response.data);
        alert('Beer added successfully!');
      })
      .catch(error => {
        console.error('Error adding the beer:', error);
        alert('There was an error adding the beer. Please try again.');
      });
  };

  return (
    <div className="add-beer-page">
      <h1>Add a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Tagline:
          <input
            type="text"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label>
          First Brewed:
          <input
            type="text"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleChange}
          />
        </label>

        <label>
          Brewer's Tips:
          <input
            type="text"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleChange}
          />
        </label>

        <label>
          Attenuation Level:
          <input
            type="number"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleChange}
          />
        </label>

        <label>
          Contributed By:
          <input
            type="text"
            name="contributed_by"
            value={formData.contributed_by}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
