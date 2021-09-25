import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewBeer() {
  const URL = 'https://ih-beers-api2.herokuapp.com/beers/new';

  const [beerName, setbeerName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tips, setBrewers_tips] = useState('');
  const [attenuation_level, setAttenuation_level] = useState('');
  const [contributed_by, setContributed_by] = useState('');

  const history = useHistory();

  const handleNameLineChange = (e) => {
    setbeerName(e.target.value);
  };

  const handleTaglineChange = (e) => {
    setTagline(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSetFirst_brewedChange = (e) => {
    setFirst_brewed(e.target.value);
  };

  const handleSetBrewers_tipsChange = (e) => {
    setBrewers_tips(e.target.value);
  };

  const handleAttenuation_levelChange = (e) => {
    setAttenuation_level(e.target.value);
  };

  const handleContributed_byChange = (e) => {
    setContributed_by(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let objectToSubmit = {
      name: beerName,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    console.log(objectToSubmit);

    axios.post(URL, objectToSubmit).then(() => {
      setbeerName('');
      setTagline('');
      setDescription('');
      setFirst_brewed('');
      setBrewers_tips('');
      setAttenuation_level('');
      setContributed_by('');
      history.push('/');
    });
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Beer</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={beerName}
          onChange={handleNameLineChange}
          placeholder=" Beer name"
        />
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTaglineChange}
          placeholder=" Beer tagline"
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder=" Beer description"
        />
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleSetFirst_brewedChange}
          placeholder=" Beer first brewed"
        />
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={handleSetBrewers_tipsChange}
          placeholder=" Beer brewers tips"
        />
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleAttenuation_levelChange}
          placeholder=" Beer attenuation level"
        />
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleContributed_byChange}
          placeholder=" Beer contributed by"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default NewBeer;
