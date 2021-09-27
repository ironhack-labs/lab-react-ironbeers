import React from 'react';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
const NewBeer = (props) => {
  const [newBeer, setNewBeer] = useState({});
  const [redirect, setRedirect] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((res) => {
        if (res.status === 200) {
          setRedirect(true);
        }
      });
  };

  const onChangeHandler = (event) => {
    if (event.target.name === 'name') {
      const nameValue = event.target.value;
      setNewBeer((prevState) => ({ ...prevState, name: nameValue }));
    }
    if (event.target.name === 'tagline') {
      const tagline = event.target.value;
      setNewBeer((prevState) => ({ ...prevState, tagline }));
    }
    if (event.target.name === 'description') {
      const description = event.target.value;
      setNewBeer((prevState) => ({ ...prevState, description }));
    }
    if (event.target.name === 'attenuation_level') {
      const attenuation = event.target.value;
      setNewBeer((prevState) => ({
        ...prevState,
        attenuation_level: attenuation,
      }));
    }
    if (event.target.name === 'first_brewed') {
      const first_brewed = event.target.value;
      setNewBeer((prevState) => ({ ...prevState, first_brewed }));
    }
    if (event.target.name === 'contributed_by') {
      const contributed_by = event.target.value;
      setNewBeer((prevState) => ({ ...prevState, contributed_by }));
    }

  };
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name of the beer: </label>
          <input onChange={onChangeHandler} type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="tagline">Tagline: </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="tagline"
            name="tagline"
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="description"
            name="description"
          />
        </div>
        <div>
          <label htmlFor="attenuation">Attenuation-Level</label>
          <input
            onChange={onChangeHandler}
            type="number"
            id="attenuation"
            name="attenuation_level"
          />
        </div>
        <div>
          <label htmlFor="first_brewed">first Brewed:</label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="first_brewed"
            name="first_brewed"
          />
        </div>
        <div>
          <label htmlFor="contributed">Contributed By:</label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="contributed"
            name="contributed_by"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NewBeer;
