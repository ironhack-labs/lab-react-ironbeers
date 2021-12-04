import React from 'react';

import Header from '../Header/Header';

const NewBeer = () => {
  return (
    <>
      <Header />

      <form
        className="m-3"
        action="https://ih-beers-api2.herokuapp.com/beers/new"
        method="POST"
      >
        <div class="form-group">
          <label>Name: </label>
          <input type="text" class="form-control" name="name" />
        </div>
        <div class="form-group">
          <label>Tagline: </label>
          <input type="text" class="form-control" name="tagline" />
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea class="form-control" rows="3" name="description"></textarea>
        </div>
        <div class="form-group">
          <label>First brewed: </label>
          <input type="text" class="form-control" name="first_brewed" />
        </div>
        <div class="form-group">
          <label>Brewers tips: </label>
          <input type="text" class="form-control" name="brewers_tips" />
        </div>
        <div class="form-group">
          <label>Attenuation level: </label>
          <input type="number" class="form-control" name="attenuation_level" />
        </div>
        <div class="form-group">
          <label>Contributed by: </label>
          <input type="text" class="form-control" name="contributed_by" />
        </div>

        <button type="submit">ADD NEW</button>
      </form>
    </>
  );
};

export default NewBeer;
