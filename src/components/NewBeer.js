import React from 'react';

const NewBeer = () => {
  return (
    <div>
      <form
        action="https://ih-beers-api2.herokuapp.com/beers/new"
        className="new-beer-form"
        method="POST"
      >
        <div className="beer-form-holder">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Tagline:
            <input type="text" name="tagline" />
          </label>
          <label>
            Description:
            <textarea type="text" name="description"></textarea>
          </label>
          <label>
            First Brewed:
            <input type="text" name="first_brewed" />
          </label>
          <label>
            Brewers Tips:
            <input type="text" name="brewers_tips" />
          </label>
          <label>
            Attenuation Level:
            <input type="number" name="attenuation_level" />
          </label>
          <label>
            Contributed By:
            <input type="text" name="contributed_by" />
          </label>
        </div>
        <button>Add New Beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
