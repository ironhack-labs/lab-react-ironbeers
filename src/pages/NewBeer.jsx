import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import './NewBeer.css';

const NewBeer = () => {
  return (
    <div>
      <Header />
      <form
        action="https://ih-beers-api2.herokuapp.com/beers/new"
        method="POST"
      >
        <div className="formInput">
          <label htmlor="name">name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="formInput">
          <label htmlFor="tagline">tagline</label>
          <input type="text" name="tagline" id="tagline" />
        </div>
        <div className="formInput">
          <label htmlFor="description">description</label>
          <textarea name="description" id="description"></textarea>
        </div>
        <div className="formInput">
          <label htmlFor="firstBrewed">first brewed</label>
          <input type="text" name="firstBrewed" id="firstBrewed" />
        </div>
        <div className="formInput">
          <label htmlFor="brewersTips">brewers tips</label>
          <input type="text" name="" id="brewersTips" />
        </div>
        <div className="formInput">
          <label htmlFor="attenuationLevel">attenuation level</label>
          <input type="number" name="attenuationLevel" id="attenuationLevel" />
        </div>
        <div className="formInput">
          <label htmlFor="contributedBy">contributed by</label>
          <input type="text" name="contributedBy" id="contributedBy" />
        </div>
        <div className="formInput">
          <input type="submit" value="ADD NEW"></input>
        </div>
      </form>
    </div>
  );
};

NewBeer.propTypes = {};

export default NewBeer;
