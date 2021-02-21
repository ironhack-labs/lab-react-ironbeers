import React from 'react';
import Header from '../../Header/Header';
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

export default function NewBeer() {
  const [formState, setFormState] = React.useState(initialState);

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { ...formState };

    try {
      const res = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        data
      );

      setFormState(initialState);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Header />
      <form
        className="form"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formState.name}
          onChange={handleChange}
        />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          required
          value={formState.tagline}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          required
          value={formState.description}
          onChange={handleChange}
        />
        <label htmlFor="first_brewed">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          required
          value={formState.first_brewed}
          onChange={handleChange}
        />
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          required
          value={formState.brewers_tips}
          onChange={handleChange}
        />
        <label htmlFor="attenuation_level">Attenuation Level </label>
        <input
          type="number"
          min="0"
          name="attenuation_level"
          id="attenuation_level"
          required
          value={formState.attenuation_level}
          onChange={handleChange}
        />
        <label htmlFor="contributed_by">Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          required
          value={formState.contributed_by}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
