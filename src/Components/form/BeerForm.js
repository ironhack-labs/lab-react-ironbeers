import React from 'react';

function BeerForm(props) {
  return (
    <form>
      <h1>{props.title}</h1>
      <div className="form-group">
        <label htmlFor="beerFormName">Name</label>
        <input
          type="text"
          className="form-control"
          id="beerFormName"
          name="name"
          onChange={props.handleChange}
          value={props.state.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="beerFormTagline">Tagline</label>
        <input
          type="text"
          className="form-control"
          id="beerFormTagline"
          name="tagline"
          onChange={props.handleChange}
          value={props.state.tagline}
        />
      </div>
      <div className="form-group">
        <label htmlFor="beerFormDescription">Description</label>
        <input
          type="text"
          className="form-control"
          id="beerFormDescription"
          name="description"
          onChange={props.handleChange}
          value={props.state.description}
        />
      </div>
      <div className="form-group">
        <label htmlFor="beerFormFirstBrewed">First Brewed</label>
        <input
          type="text"
          className="form-control"
          id="beerFormFirstBrewed"
          name="first_brewed"
          onChange={props.handleChange}
          value={props.state.first_brewed}
        />
      </div>
      <div className="form-group">
        <label htmlFor="beerFormBrewersTips">Brewer's Tips</label>
        <input
          type="text"
          className="form-control"
          id="beerFormBrewersTips"
          name="brewers_tips"
          onChange={props.handleChange}
          value={props.state.brewers_tips}
        />
      </div>
      <div className="form-group">
        <label htmlFor="beerFormAttenuationLevel">Attenuation Level</label>
        <input
          type="number"
          className="form-control"
          id="beerFormAttenuationLevel"
          name="attenuation_level"
          onChange={props.handleChange}
          value={props.state.attenuation_level}
        />
      </div>
      <div className="form-group">
        <label htmlFor="beerFormContributedBy">Contributed By</label>
        <input
          type="text"
          className="form-control"
          id="beerFormContributedBy"
          name="contributed_by"
          onChange={props.handleChange}
          value={props.state.contributed_by}
        />
      </div>
      <button
        onClick={props.handleSubmit}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}

export default BeerForm;