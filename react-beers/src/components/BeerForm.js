import React from 'react';

export default class BeerForm extends React.Component {

  render() {
    return (
      <form className="has-padding-15" action="https://ironbeer-api.herokuapp.com/beers/new" method="POST">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" name="name" placeholder="Beer name" />
          </div>
        </div>

        <div className="field">
          <label className="label">Tagline</label>
          <div className="control">
            <input className="input" type="text" name="tagline" placeholder="Tagline" />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input className="textarea" type="text" name="description" />
          </div>
        </div>

        <div className="field">
          <label className="label">First Brewed</label>
          <div className="control">
            <input className="input" type="text" name="first_brewed" placeholder="04/2016" />
          </div>
        </div>

        <div className="field">
          <label className="label">Brewers Tips</label>
          <div className="control">
            <input className="input" type="text" name="brewers_tips" placeholder="ferments, temperature..." />
          </div>
        </div>

        <div className="field">
          <label className="label">Attenuation level</label>
          <div className="control">
            <input className="input" type="number" name="attenuation_level" placeholder="82.5" />
          </div>
        </div>

        <div className="field">
          <label className="label">Contributed by</label>
          <div className="control">
            <input className="input" type="text" name="contributed_by" placeholder="Sam Mason <samjbmason>" />
          </div>
        </div>

        <div class="control">
          <button class="button is-link">Submit</button>
        </div>

      </form>   
    );
  }
}

