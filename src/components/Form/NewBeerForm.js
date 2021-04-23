import React from 'react';

function NewBeerForm(props) {
  return (
    <form className="container my-2">
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          aria-describedby="name"
          onChange={props.handleChange}
          value={props.state.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="taglineInput" className="form-label">
          Tagline
        </label>
        <input
          type="text"
          className="form-control"
          id="tagline"
          name="tagline"
          onChange={props.handleChange}
          value={props.state.tagline}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descripitionInput" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          onChange={props.handleChange}
          value={props.state.description}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="firstBrewedInput" className="form-label">
          First Brewed
        </label>
        <input
          type="text"
          className="form-control"
          id="first-brewed"
          name="first_brewed"
          onChange={props.handleChange}
          value={props.state.first_brewed}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="BrewedTipsId" className="form-label">
          Brewed Tips
        </label>
        <input
          type="text"
          className="form-control"
          id="brewedTips"
          name="brewers_tips"
          onChange={props.handleChange}
          value={props.state.brewers_tips}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="attenuationLevelInput" className="form-label">
          Attenuation Level
        </label>
        <input
          type="number"
          className="form-control"
          id="attenuationLevel"
          name="attenuation_level"
          onChange={props.handleChange}
          value={props.state.attenuation_level}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contributedByInput" className="form-label">
          Contributed By
        </label>
        <input
          type="text"
          className="form-control"
          id="contributedBy"
          name="contributed_by"
          onChange={props.handleChange}
          value={props.state.contributed_by}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={props.handleSubmit}
      >
        ADD NEW
      </button>
    </form>
  );
}

export default NewBeerForm;
