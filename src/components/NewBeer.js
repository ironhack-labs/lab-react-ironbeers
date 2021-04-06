import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Header from './Header';
import axios from 'axios';

const NewBeer = () => {
  const [state, setState] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });
  const [redirect, setRedirect] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', { ...state })
      .then((response) => {
        console.log(response.data.message);
        setRedirect(true);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="NewBeer container">
      <Header />
      {redirect ? (
        <Redirect to="/" />
      ) : (
        <form className="d-flex flex-column my-4  mx-4" onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className="d-flex flex-column align-items-start form-label"
          >
            <b>Name:</b>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={state.name}
              onChange={onChange}
            />
          </label>
          <label
            htmlFor="tagline"
            className="d-flex flex-column align-items-start form-label"
          >
            <b>Tagline:</b>
            <input
              type="text"
              name="tagline"
              id="tagline"
              className="form-control"
              value={state.tagline}
              onChange={onChange}
            />
          </label>
          <label
            htmlFor="description"
            className="d-flex flex-column align-items-start form-label"
          >
            <b>Description:</b>
            <textarea
              type="text"
              name="description"
              id="description"
              className="form-control"
              value={state.description}
              onChange={onChange}
            />
          </label>
          <label
            htmlFor="first_brewed"
            className="d-flex flex-column align-items-start form-label"
          >
            <b>First Brewed:</b>
            <input
              type="text"
              name="first_brewed"
              id="first_brewed"
              className="form-control"
              value={state.first_brewed}
              onChange={onChange}
            />
          </label>
          <label
            htmlFor="brewers_tips"
            className="d-flex flex-column align-items-start form-label"
          >
            <b>Brewers Tips:</b>
            <input
              type="text"
              name="brewers_tips"
              id="brewers_tips"
              className="form-control"
              value={state.brewers_tips}
              onChange={onChange}
            />
          </label>
          <label
            htmlFor="attenuation_level"
            className="d-flex flex-column align-items-start form-label"
          >
            <b>Attenuation Level:</b>
            <input
              type="number"
              min="0"
              name="attenuation_level"
              id="attenuation_level"
              className="form-control"
              value={state.attenuation_level}
              onChange={onChange}
            />
          </label>
          <label
            htmlFor="contributed_by"
            className="d-flex flex-column align-items-start form-label"
          >
            <b>Contributed by:</b>
            <input
              type="text"
              name="contributed_by"
              id="contributed_by"
              className="form-control"
              value={state.contributed_by}
              onChange={onChange}
            />
          </label>
          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="Submit"
              className="btn btn-info col-6"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default NewBeer;
