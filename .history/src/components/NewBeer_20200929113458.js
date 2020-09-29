import React, { Fragment } from 'react';
import Nav from './Nav';
import axios from 'axios';

function NewBeer(props) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.querySelector('input#name').value;
    const tagline = form.querySelector('input#tagline').value;
    const description = form.querySelector('textarea#description').value;
    const firstBrewed = form.querySelector('input#first-brewed').value;
    const brewersTips = form.querySelector('input#brewers-tips').value;
    const attenuationLevel = form.querySelector('input#attenuation-level')
      .value;
    const contributedBy = form.querySelector('input#contributed-by').value;

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  return (
    <Fragment>
      <Nav />
      <section className="page">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" id="tagline" />

          <label htmlFor="description">Description</label>
          <textarea type="text" rows={10} name="description" id="description" />

          <label htmlFor="first-brewed">First Brewed</label>
          <input type="date" name="first_brewed" id="first-brewed" />

          <label htmlFor="brewers-tips">Brewers Tips</label>
          <input type="text" name="brewers_tips" id="brewers-tips" />

          <label htmlFor="attenuation-level">Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation-level"
          />

          <label htmlFor="contributed-by">Contributed By</label>
          <input type="text" name="contributed_by" id="contributed-by" />

          <button>ADD NEW</button>
        </form>
      </section>
    </Fragment>
  );
}

export default NewBeer;
