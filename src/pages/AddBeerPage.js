import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiURL = 'https://ih-beers-api2.herokuapp.com';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(1);
  const [contributer, setContributer] = useState('');

  const handleName = (event) => setName(event.target.value);

  const handleTagline = (event) => setTagline(event.target.value);

  const handleDescription = (event) => setDescription(event.target.value);

  const handleFirstBrewed = (event) => setFirstBrewed(event.target.value);

  const handleBrewersTips = (event) => setBrewersTips(event.target.value);

  const handleAttenuationLevel = (event) =>
    setAttenuationLevel(event.target.value);

  const handleContributer = (event) => setContributer(event.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const newBeer = {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributer,
      };
      console.log('newbeer', newBeer);
      const response = await axios.post(`${apiURL}/beers/new`, newBeer);

      console.log('response', response);
      setName('');
      setTagline('');
      setDescription('');
      setFirstBrewed('');
      setBrewersTips('');
      setAttenuationLevel(1);
      setContributer('');

      navigate('/beers');
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <div>
      <Header />
      <h2>Add a New Beer</h2>
      <form className="add-beer" onSubmit={handleSubmit}>
        <p>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleName} />
        </p>
        <p>
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={handleTagline}
          />
        </p>
        <p>
          <label> Description: </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
          />
        </p>

        <p>
          <label>First Brewed: </label>
          <input
            type="text"
            name="first_brewed"
            value={firstBrewed}
            onChange={handleFirstBrewed}
          />
        </p>

        <p>
          <label> Brewers Tips: </label>
          <input
            type="text"
            name="brewers_tips"
            value={brewersTips}
            onChange={handleBrewersTips}
          />
        </p>

        <p>
          <label>Attenuation Level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={attenuationLevel}
            onChange={handleAttenuationLevel}
          />
        </p>

        <p>
          <label>Contributed by:</label>
          <input
            type="text"
            name="contributed_by"
            value={contributer}
            onChange={handleContributer}
          />
        </p>
        <button>Add new</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
