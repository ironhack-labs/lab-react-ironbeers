import React from 'react';

export default function NewBeer(props) {
  return (
    <>
      <form onSubmit={props.onAdd}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            className="form-control"
            id="tagline"
            name="tagline"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="first-brewed">First Brewed</label>
          <input
            type="text"
            className="form-control"
            id="first-brewed"
            name="first_brewed"
          />
        </div>
        <div className="form-group">
          <label htmlFor="brewers-tip">Brewers Tips</label>
          <input
            type="text"
            className="form-control"
            id="brewers-tip"
            name="brewers_tips"
          />
        </div>
        <div className="form-group">
          <label htmlFor="attenuation-level">Attenuation Level</label>
          <input
            type="number"
            className="form-control"
            id="attenuation-level"
            name="attenuation_level"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contributed-by">Contributed By</label>
          <input
            type="text"
            className="form-control"
            id="contributed-by"
            name="contributed_by"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Add New
        </button>
      </form>
    </>
  );
}
