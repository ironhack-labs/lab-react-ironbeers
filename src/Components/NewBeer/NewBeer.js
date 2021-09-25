import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import FormField from './FormField';
import Navbar from '../Navbar/Navbar';

const NewBeer = () => {
  const [state, setState] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });
  const history = useHistory();

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', state)
      .then((response) => {
          console.log(response)
        history.push('/');
      })
      .catch((err) => console.error(err));
  }
  return (
    <div>
    <Navbar />
      <h1>NewBeer</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Name"
          name="name"
          onChange={handleChange}
          value={state.name}
        />
        <FormField
          label="Tagline"
          name="tagline"
          onChange={handleChange}
          value={state.tagline}
        />
        <FormField
          label="Description "
          name="description"
          onChange={handleChange}
          value={state.description}
        />
        <FormField
        type='date'
          label="First brewed"
          name="first_brewed"
          onChange={handleChange}
          value={state.first_brewed}
        />
        <FormField
          label="Brewers tips"
          name="brewers_tips"
          onChange={handleChange}
          value={state.brewers_tips}
        />
        <FormField
        type='number'
          label="Attenuation Level"
          name="attenuation_level"
          onChange={handleChange}
          value={state.attenuation_level}
        />
        <FormField
          label="Contributed By"
          name="contributed_by"
          onChange={handleChange}
          value={state.contributed_by}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBeer;
