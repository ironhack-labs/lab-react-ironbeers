import React from 'react';

export default function NewBeer() {
  return (
    <div>
      <h1>New Beer</h1>
      <form
        method="POST"
        action="https://ih-beers-api2.herokuapp.com/beers/new"
      >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="tagline">Tagline</label>
        <input type="text" name="tagline" id="tagline" />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" />
        <label htmlFor="first_brewed">First Brewed</label>
        <input type="text" name="first_brewed" id="first_brewed" />
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input type="text" name="brewers_tips" id="brewers_tips" />
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input type="number" name="attenuation_level" id="attenuation_level" />
        <label htmlFor="contributed_by">Contributed by</label>
        <input type="text" name="contributed_by" id="contributed_by" />
        <button type="submit">Add a beer</button>
      </form>
    </div>
  );
}
