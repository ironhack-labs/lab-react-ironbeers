import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const NewBeer = () => {
  const [beerData, setBeerData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });
  
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

   // setBeerData({...beerData, [e.target.name]: e.target.value}); // this is also work
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', beerData)
        .then(response => {
          console.log(response.data)
          navigate("/beers")
        })
        .catch(e => console.log(e.response.data))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={beerData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          id="tagline"
          name="tagline"
          value={beerData.tagline}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={beerData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="first_brewed">First Brewed:</label>
        <input
          type="text"
          id="first_brewed"
          name="first_brewed"
          value={beerData.first_brewed}
          onChange={handleChange}
          required
        />

        <label htmlFor="brewers_tips">Brewers Tips:</label>
        <input
          type="text"
          id="brewers_tips"
          name="brewers_tips"
          value={beerData.brewers_tips}
          onChange={handleChange}
          required
        />

        <label htmlFor="attenuation_level">Attenuation Level:</label>
        <input
          type="number"
          id="attenuation_level"
          name="attenuation_level"
          value={beerData.attenuation_level}
          onChange={handleChange}
          required
        />

        <label htmlFor="contributed_by">Contributed By:</label>
        <input
          type="text"
          id="contributed_by"
          name="contributed_by"
          value={beerData.contributed_by}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
