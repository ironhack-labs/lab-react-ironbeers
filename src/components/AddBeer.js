import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';

const initialState = {
  name: '',
  tagline: '',
  description: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: 0,
  contributed_by: '',
};

function AddBeer() {
  const [allValues, setAllValues] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState(false);

  const inputChangeHandler = (event) => {
    let { name, value } = event.target;
    setAllValues({ ...allValues, [name]: value });
    console.log(allValues);
  };

  function addNewBeer(event) {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', allValues)
      .then(() => {
        console.log(`Successfully added beer`)
        setSuccessMessage(true)
      })
      .catch((error) => error);

    setAllValues(initialState);
  }

  return (
    <div>
      <Header />
      <form onSubmit={addNewBeer}>
        <div className="field">
          <label className="label">Name of Beer:</label>
          <div>
            <input
              className="input"
              type="text"
              name="name"
              value={allValues.name}
              onChange={inputChangeHandler}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Tagline:</label>
          <div>
            <input
              className="input"
              type="text"
              name="tagline"
              value={allValues.tagline}
              onChange={inputChangeHandler}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Description:</label>
          <div>
            <input
              className="input"
              type="text"
              name="description"
              value={allValues.description}
              onChange={inputChangeHandler}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">First brewed:</label>
          <div>
            <input
              className="input"
              type="text"
              name="first_brewed"
              value={allValues.first_brewed}
              onChange={inputChangeHandler}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Tips:</label>
          <div>
            <input
              className="input"
              type="text"
              name="brewers_tips"
              value={allValues.brewers_tips}
              onChange={inputChangeHandler}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Attenuation level:</label>
          <div>
            <input
              className="input"
              type="number"
              name="attenuation_level"
              value={allValues.attenuation_level}
              onChange={inputChangeHandler}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Your name:</label>
          <div>
            <input
              className="input"
              type="text"
              name="contributed_by"
              value={allValues.contributed_by}
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      {successMessage ? <p>Successfully added beer</p> : ''}
    </div>
  );
}

export default AddBeer;
