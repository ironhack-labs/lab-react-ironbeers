import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './NewBeer.css';
import axios from 'axios';

const NewBeer = () => {
  const initialValue = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewed_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };
  const [newBeer, setBeer] = useState(initialValue);
  const [status, setStatus] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', { ...newBeer })
      .then((res) => {
        if (res.status === 200) setStatus('You added a new Beer');
        else setStatus('Something goes wrong');
        setBeer({ ...initialValue });
      });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setBeer((state) => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <main>
      <Navbar />
      {status ? (
        <p>{status}</p>
      ) : (
        <section>
          <form action="" className="form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input is-rounded"
              value={newBeer.name}
              onChange={handleChange}
            />
            <label htmlFor="tagline" className="label">
              Tagline
            </label>
            <input
              type="text"
              name="tagline"
              id="tagline"
              className="input is-rounded"
              value={newBeer.tagline}
              onChange={handleChange}
            />
            <label htmlFor="description" className="label">
              Description
            </label>
            <input
              type="textarea"
              name="description"
              id="description"
              className="textarea is-rounded"
              value={newBeer.description}
              onChange={handleChange}
            />
            <label htmlFor="first_brewed" className="label">
              First brewed
            </label>
            <input
              type="text"
              name="first_brewed"
              id="first_brewed"
              className="input is-rounded"
              value={newBeer.first_brewed}
              onChange={handleChange}
            />
            <label htmlFor="brewer_tips" className="label">
              Brewer tips
            </label>
            <input
              type="text"
              name="brewed_tips"
              id="brewed_tips"
              className="input is-rounded"
              value={newBeer.brewed_tips}
              onChange={handleChange}
            />
            <label htmlFor="attenuation_level" className="label">
              Attenuation Level
            </label>
            <input
              type="number"
              name="attenuation_level"
              id="attenuation_level"
              className="input is-rounded"
              value={newBeer.attenuation_level}
              onChange={handleChange}
            />
            <label htmlFor="contributed_by" className="label">
              Contributed by
            </label>
            <input
              type="text"
              name="contributed_by"
              id="contributed_by"
              className="input is-rounded"
              value={newBeer.contributed_by}
              onChange={handleChange}
            />
            <button type="submit" className="button">
              Create new beer
            </button>
          </form>
        </section>
      )}
    </main>
  );
};

export default NewBeer;
