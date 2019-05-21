import React from "react";
import NavBar from "../common/NavBar";

const BeerForm = ({
  name,
  tagline,
  description,
  first_brewed,
  brewers_tips,
  attenuation_level,
  contributed_by,
  handleSubmit,
  handleChange
}) => (
  <div>
    <NavBar />
    <div className="uk-container uk-container-xsmall">
      <form onSubmit={handleSubmit} className="uk-padding-small">
        <fieldset className="uk-fieldset">
          <legend className="uk-legend uk-text-bold uk-text-center uk-uk-padding-large">Beer Data</legend>
          <div >
            <label>Name</label>
            <input
              className="uk-input uk-border-pill"
              onChange={handleChange}
              type="text"
              value={name}
              name="name"
              required
            />
          </div>
          <div >
            <label>Tagline</label>
            <input
              className="uk-input uk-border-pill"
              onChange={handleChange}
              type="text"
              value={tagline}
              name="tagline"
              required
            />
          </div>
          <div >
            <label>Description</label>
            <textarea
              className="uk-textarea"
              onChange={handleChange}
              type="text"
              name="description"
              value={description}
              rows="5"
              required
            />
          </div>
          <div >
            <label>First brewed</label>
            <input
              className="uk-input uk-border-pill"
              onChange={handleChange}
              type="text"
              value={first_brewed}
              name="first_brewed"
              required
            />
          </div>
          <div >
            <label>Brewer tips</label>
            <input
              className="uk-input uk-border-pill"
              onChange={handleChange}
              type="text"
              value={brewers_tips}
              name="brewers_tips"
              required
            />
          </div>
          <div >
            <label>Attenuation level</label>
            <input
              className="uk-input uk-border-pill"
              onChange={handleChange}
              type="number"
              value={attenuation_level}
              name="attenuation_level"
              required
            />
          </div>
          <div >
            <label>contributed_by</label>
            <input
              className="uk-input uk-border-pill"
              onChange={handleChange}
              type="text"
              value={contributed_by}
              name="contributed_by"
              required
            />
          </div>
          <button className="uk-button uk-button-primary uk-border-pill uk-width-expand">Add Beer</button>
        </fieldset>
      </form>
    </div>
  </div>
);

export default BeerForm;
