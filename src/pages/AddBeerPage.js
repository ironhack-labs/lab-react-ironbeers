import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function AddBeerPage() {
  //useStates for the form

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(1);
  const [contributedBy, setContributedBy] = useState('');

  //errorMessage state
  const [errorMessage, setErrorMessage] = useState(undefined);

  //Form handles

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      //prevent the page from reloading on the submit form
      e.preventDefault();

      const newBeer = {
        name: name,
        tagline: tagline,
        description: description,
        firstBrewed: firstBrewed,
        brewersTips: brewersTips,
        attenuationLevel: attenuationLevel,
        contributedBy: contributedBy,
      };

      //use the post method to show the new added content on the page
      await axios.post(`${apiURL}/new`, newBeer);

      //Clear the input after the submission
      setName('');
      setTagline('');
      setDescription('');
      setFirstBrewed('');
      setBrewersTips('');
      setAttenuationLevel('1');
      setContributedBy('');

      //Redirect the user after submission to the homepage
      navigate('/');
    } catch (error) {
      setErrorMessage('Something went wrong while adding a new beer.');
      setTimeout(() => setErrorMessage(undefined), 3000);
    }
  };

  return (
    <div>
      <Header />
      <h2>Add a beer</h2>

      {/* FORM  */}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label>description</label>
        <input
          type="textarea"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <label>First Brewed</label>
        <input
          type="text"
          name="firstBrewed"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        />

        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewersTips"
          value={brewersTips}
          onChange={handleBrewersTips}
        />

        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={handleAttenuationLevel}
        />

        <label>Contributed by:</label>
        <input
          type="text"
          name="contributedBy"
          value={contributedBy}
          onChange={handleContributedBy}
        />

        <button type="submit">Add New Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
