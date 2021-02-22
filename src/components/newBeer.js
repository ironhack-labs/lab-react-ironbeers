import React from 'react';
import Navbar from '../components/Navbar';
import { newBeer } from '../service/service';
import axios from 'axios';

function NewBeer() {
  const [formState, setFormState] = React.useState({});

  //   async function getData() {
  //     const data = await newBeer();
  //     setState(data);
  //   }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormState((formState) => ({
      ...formState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    newBeer(formState);
  };

  const {
    name,
    tagline,
    description,
    first_brewed,
    brewer_tips,
    attenuation_level,
    contributed_by,
  } = formState;

  return (
    <div>
      <Navbar />
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="input"
          onChange={handleChange}
          value={name}
        ></input>
        <label htmlFor="tagline">tagline</label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          className="input"
          onChange={handleChange}
          value={tagline}
        ></input>
        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          id="description"
          className="input"
          onChange={handleChange}
          value={description}
        ></input>
        <label htmlFor="first_brewed">first brewed</label>
        <input
          type="text"
          name="first_brewed"
          id="first-brewed"
          className="input"
          onChange={handleChange}
          value={first_brewed}
        ></input>
        <label htmlFor="brewer_tips">brewer tips</label>
        <input
          type="text"
          name="brewer_tips"
          id="brewer-tips"
          className="input"
          onChange={handleChange}
          value={brewer_tips}
        ></input>
        <label htmlFor="attenuation_level">attenuation level</label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation-level"
          className="input"
          onChange={handleChange}
          value={attenuation_level}
        ></input>
        <label htmlFor="contributed_by">contributed by</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed-by"
          className="input"
          onChange={handleChange}
          value={contributed_by}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
