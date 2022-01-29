import { useState } from 'react';
import classes from './NewBeer.module.css';
import axios from 'axios';

const baseUrl = 'https://ih-beers-api2.herokuapp.com';
const api = axios.create({ baseURL: baseUrl });

const NewBeer = () => {
  const [inputState, setInputState] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });
  const inputChangeHandler = ({ target }) => {
    setInputState((inputState) => {
      return { ...inputState, [target.name]: target.value };
    });
  };

  const formSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const response = await api.post('/beers/new', { ...inputState });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(inputState);
  return (
    <div className={classes.container}>
      <form className={classes.inputForm} onSubmit={formSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={inputState.name}
          onChange={inputChangeHandler}
        />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          id="tagline"
          name="tagline"
          value={inputState.tagline}
          onChange={inputChangeHandler}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={inputState.description}
          onChange={inputChangeHandler}
        />
        <label htmlFor="first_brewed">First Brewed</label>
        <input
          type="text"
          id="first_brewed"
          name="first_brewed"
          value={inputState.first_brewed}
          onChange={inputChangeHandler}
        />
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input
          type="text"
          id="brewers_tips"
          name="brewers_tips"
          value={inputState.brewers_tips}
          onChange={inputChangeHandler}
        />
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          type="number"
          id="attenuation_level"
          name="attenuation_level"
          value={inputState.attenuation_level}
          onChange={inputChangeHandler}
        />
        <label htmlFor="contributed_by">Contributed By</label>
        <input
          type="text"
          id="contributed_by"
          name="contributed_by"
          value={inputState.contributed_by}
          onChange={inputChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewBeer;
