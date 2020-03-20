import React, { useState } from "react";

export const FromCreate = ({ setSubmit }) => {
  const [state, setState] = useState({});

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };

  return (
    <form
      className="create-form"
      onSubmit={e => {
        e.preventDefault();
        setSubmit({ ...state });
      }}
    >
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={state.name || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          className="form-control"
          value={state.tagline || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          className="form-control"
          rows="3"
          value={state.description || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          className="form-control"
          value={state.first_brewed || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Brewers Tip</label>
        <input
          type="text"
          name="brewers_tips"
          className="form-control"
          value={state.brewers_tips || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          className="form-control"
          value={state.attenuation_level || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          className="form-control"
          value={state.contributed_by || ""}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        Add Beer
      </button>
    </form>
  );
};
