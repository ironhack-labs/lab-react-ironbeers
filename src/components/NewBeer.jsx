import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const NewBeer = () => {
  return (
    <>
      <div className="home-header">
        <Link to={'/'}>
          <h1>
            <FontAwesomeIcon icon={faHome} className="icon-color" />
          </h1>
        </Link>
      </div>
      <div className="form">
        <form
          action="https://ih-beers-api2.herokuapp.com/beers/new"
          method="POST"
        >
          <input name="name" type="text" placeholder="Name" />
          <input name="tagline" type="text" placeholder="Tagline" />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
          ></textarea>
          <input name="first_brewed" type="text" placeholder="First Brewed" />
          <input name="brewers_tips" type="text" placeholder="Brewers Tips" />
          <input
            name="attenuation_level"
            type="number"
            placeholder="Attenuation Level"
          />
          <input
            name="contributed_by"
            type="text"
            placeholder="Contributed by"
          />{' '}
          <br />
          <button type="submit">Add this beer</button>
        </form>
      </div>
    </>
  );
};
