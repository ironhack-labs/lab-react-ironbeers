import React, { useState } from 'react';
import './NewBeer.css';

import * as beerService from './../../services/beer-service';

import NavBar from '../../components/NavBar/NavBar';

export default function NewBeer() {
  
  const initialState = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    beerService
      .newBeer(formData)
      .then((res) => {
        console.log(res);
        setFormData(initialState);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <NavBar />
      <h1>Add a new beer</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Beer name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          placeholder="Beer tagline"
          value={formData.tagline}
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          className="input-descr"
          type="text"
          name="description"
          placeholder="Beer description"
          value={formData.description}
          onChange={handleChange}
        />
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          placeholder="Brewed since"
          value={formData.first_brewed}
          onChange={handleChange}
        />
        <label>Brewer's tips</label>
        <input
          type="text"
          name="brewers_tips"
          placeholder="Brewer's Tips"
          value={formData.brewers_tips}
          onChange={handleChange}
        />
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          placeholder="Beer"
          value={formData.attenuation_level}
          onChange={handleChange}
        />
        <label>Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          placeholder="Contributed by"
          value={formData.contributed_by}
          onChange={handleChange}
        />

        <button type="submit">Add new beer</button>
      </form>
    </div>
  );
}
