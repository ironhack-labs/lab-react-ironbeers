import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Headers from './Headers';

function NewBeer() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_Brewed] = useState('');
  const [brewers_tips, setBrewers_tips] = useState('');
  const [attenuation_level, setAttenuation_Level] = useState('');
  const [contributed_by, setContributed_by] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers',
        {
          name,
          tagline,
          description,
          first_brewed,
          brewers_tips,
          attenuation_level: Number(attenuation_level),
          contributed_by,
        }
      );
      console.log(response.data);
      navigate('/beers');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="homebox">
        <Headers />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Tagline:
            <input
              type="text"
              value={tagline}
              onChange={event => setTagline(event.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </label>
          <br />
          <label>
            First Brewed:
            <input
              type="text"
              value={first_brewed}
              onChange={event => setFirst_Brewed(event.target.value)}
            />
          </label>
          <br />
          <label>
            Brewers Tips:
            <input
              type="text"
              value={brewers_tips}
              onChange={event => setBrewers_tips(event.target.value)}
            />
          </label>
          <br />
          <label>
            Attenuation Level:
            <input
              type="number"
              value={attenuation_level}
              onChange={event => setAttenuation_Level(event.target.value)}
            />
          </label>
          <br />
          <label>
            Contributed By:
            <input
              type="text"
              value={contributed_by}
              onChange={event => setContributed_by(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default NewBeer;
