import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

const initialBeerData = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };
function NewBeer() {
  const [beerData, setBeerData] = useState(initialBeerData);
 
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBeerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        beerData
      );
      setSuccessMessage('New beer successfully saved!');
      setBeerData(initialBeerData);
      console.log('New beer successfully saved!');
    } catch (error) {
   
      console.error('Error saving the new beer:', error);
    }
  };

  return (
    <div className="container">
      <Header />
      <h1>Create a New Beer</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={beerData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
  <label htmlFor="tagline">Tagline:</label>
  <input
    type="text"
    name="tagline"
    id="tagline"
    value={beerData.tagline}
    onChange={handleInputChange}
  />
</div>

<div className="form-group">
  <label htmlFor="description">Description:</label>
  <textarea
    name="description"
    id="description"
    value={beerData.description}
    onChange={handleInputChange}
  />
</div>

<div className="form-group">
  <label htmlFor="first_brewed">First Brewed:</label>
  <input
    type="text"
    name="first_brewed"
    id="first_brewed"
    value={beerData.first_brewed}
    onChange={handleInputChange}
  />
</div>

<div className="form-group">
  <label htmlFor="brewers_tips">Brewers Tips:</label>
  <input
    type="text"
    name="brewers_tips"
    id="brewers_tips"
    value={beerData.brewers_tips}
    onChange={handleInputChange}
  />
</div>

<div className="form-group">
  <label htmlFor="attenuation_level">Attenuation Level:</label>
  <input
    type="number"
    name="attenuation_level"
    id="attenuation_level"
    value={beerData.attenuation_level}
    onChange={handleInputChange}
  />
</div>

<div className="form-group">
  <label htmlFor="contributed_by">Contributed By:</label>
  <input
    type="text"
    name="contributed_by"
    id="contributed_by"
    value={beerData.contributed_by}
    onChange={handleInputChange}
  />
</div>
        <div className="form-group">
          <button type="submit">Add New</button>
        </div>
      </form>

      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default NewBeer;
