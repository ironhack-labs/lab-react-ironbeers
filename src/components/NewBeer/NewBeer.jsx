import React from 'react';
import { Link } from 'react-router-dom';

const NewBeer = () => {
  return (
    <div>
      <div className="h1 mb-5 p-5">Add a New Beer</div>

      <form
        className="m-4 h5"
        action="https://ih-beers-api2.herokuapp.com/beers/new"
        method="POST"
      >
        <div className="form-group row">
          <label htmlFor="name" className="col-4 col-form-label ">
            Name
          </label>
          <div className="col-5">
            <input
              id="name"
              name="name"
              type="text"
              className="form-control mb-4"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="tagline" className="col-4 col-form-label">
            Tagline
          </label>
          <div className="col-5">
            <input
              id="tagline"
              name="tagline"
              type="text"
              className="form-control mb-4"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="description" className="col-4 col-form-label">
            Description
          </label>
          <div className="col-5">
            <textarea
              id="description"
              name="description"
              cols="40"
              rows="5"
              className="form-control mb-4"
            ></textarea>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="first_brewed" className="col-4 col-form-label">
            First Brewed
          </label>
          <div className="col-5">
            <input
              id="first_brewed"
              name="first_brewed"
              type="text"
              className="form-control mb-4"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="brewers_tips" className="col-4 col-form-label">
            Brewers Tips
          </label>
          <div className="col-5">
            <input
              id="brewers_tips"
              name="brewers_tips"
              type="text"
              className="form-control mb-4"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="attenuation_level" className="col-4 col-form-label">
            Attenuation Level
          </label>
          <div className="col-5">
            <input
              id="attenuation_level"
              name="attenuation_level"
              type="text"
              className="form-control mb-4"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Contributed By" className="col-4 col-form-label">
            Contributed By
          </label>
          <div className="col-5">
            <input
              id="Contributed By"
              name="Contributed By"
              type="text"
              className="form-control mb-4"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="offset-4 col-5">
            <button type="submit" className="btn btn-block btn-lg btn-success">
              ADD NEW
            </button>
          </div>
        </div>
      </form>
      <div className="m-5">
        <Link className="text-decoration-none m-2" to="/">
          <button className="btn btn-block btn-lg btn-success m-5">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NewBeer;
