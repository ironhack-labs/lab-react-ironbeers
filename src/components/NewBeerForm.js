import React from 'react';
import MyNav from './MyNav';

export default function NewBeerForm(props) {
  return (
    <div>
      <MyNav />
      <form onSubmit={props.onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" id="tagline" required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" required />
        </div>
        <div>
          <label htmlFor="first_brewed">First Brewed</label>
          <input type="text" name="first_brewed" id="first_brewed" required />
        </div>
        <div>
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input type="text" name="brewers_tips" id="brewers_tips" required />
        </div>
        <div>
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation_level"
            required
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            id="contributed_by"
            required
          />
        </div>
        <button type="submit" id="formBtn">ADD NEW</button>
      </form>
    </div>
  );
}
