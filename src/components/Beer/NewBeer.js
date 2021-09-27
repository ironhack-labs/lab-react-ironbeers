import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import FormField from '../FormField';
import Header from '../Header';

function NewBeer() {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', state)
      .then((response) => {
        console.log(response);
        history.push('/');        
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Header />
      <div className="container mt-3">
        <h1 className="d-flex justify-content-center">Add New Beer</h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
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
            label="Description"
            name="description"
            onChange={handleChange}
            value={state.description}
          />
          <FormField
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
            label="Attenuation level"
            name="attenuation_level"
            type="number"
            onChange={handleChange}
            value={state.attenuation_level}
          />
          <FormField
            label="Contributed by"
            name="contributed_by"
            onChange={handleChange}
            value={state.contributed_by}
          />
          <div
            className="mt-4"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '6rem' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
