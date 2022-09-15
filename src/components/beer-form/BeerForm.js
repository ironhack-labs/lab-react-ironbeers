import React from "react";
import { useState } from "react";

const validations = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Beer's name is required";
    }
    return message;
  },
  tagline: (value) => {
    let message;
    if (!value) {
      message = "Beer's tagline is required";
    }
    return message;
  },
  description: (value) => {
    let message;
    if (!value) {
      message = "Beer's description is required";
    }
    return message;
  },
  first_brewed: (value) => {
    let message;
    if (!value) {
      message = "Beer's first brewed is required";
    }
    return message;
  },
  brewers_tips: (value) => {
    let message;
    if (!value) {
      message = "Beer's brewers tips are required";
    }
    return message;
  },
  attenuation_level: (value) => {
    let message;
    if (!value) {
      message = "Beer's attenuation level is required";
    }
    return message;
  },
  contributed_by: (value) => {
    let message;
    if (!value) {
      message = "Tell us your name to add the beer on database";
    }
    return message;
  },
};

const initialState = {
  beer: {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  },
  errors: {
    name: validations.name(""),
    tagline: validations.tagline(""),
    description: validations.description(""),
    first_brewed: validations.first_brewed(""),
    brewers_tips: validations.brewers_tips(""),
    attenuation_level: validations.attenuation_level(""),
    contributed_by: validations.contributed_by(""),
  },
  touch: {
    name: false,
    tagline: false,
    description: false,
    first_brewed: false,
    brewers_tips: false,
    attenuation_level: false,
    contributed_by: false,
  },
};

function BeerForm({ onCreateBeer }) {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((state) => {
      return {
        ...state,
        beer: {
          ...state.beer,
          [name]: value,
        },
        errors: {
          ...state.errors,
          [name]: validations[name] && validations[name](value),
        },
      };
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setState((state) => {
      return {
        ...state,
        touch: {
          ...state.touch,
          [name]: true,
        },
      };
    });
  };

  const isValid = () =>
    !Object.keys(state.errors).some((error) => state.errors[error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
      const { beer } = state;
      onCreateBeer({ ...beer });
      setState(initialState);
    }
  };

  const { beer, errors, touch } = state;

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label fw-bold">Name</label>
          <input
            type="text"
            name="name"
            value={beer.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${
              errors.name && touch.name ? "is-invalid" : ""
            } `}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-2">
          <label className="form-label fw-bold">Tagline</label>
          <input
            type="text"
            name="tagline"
            value={beer.tagline}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${
              errors.tagline && touch.tagline ? "is-invalid" : ""
            } `}
          />
          {errors.tagline && (
            <div className="invalid-feedback">{errors.tagline}</div>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label fw-bold">Description</label>
          <textarea
            type="text"
            name="description"
            value={beer.description}
            rows={5}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${
              errors.description && touch.description ? "is-invalid" : ""
            } `}
          />
          {errors.description && (
            <div className="invalid-feedback">{errors.description}</div>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label fw-bold">First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={beer.first_brewed}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${
              errors.first_brewed && touch.first_brewed ? "is-invalid" : ""
            } `}
          />
          {errors.first_brewed && (
            <div className="invalid-feedback">{errors.first_brewed}</div>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label fw-bold">Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={beer.brewers_tips}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${
              errors.brewers_tips && touch.brewers_tips ? "is-invalid" : ""
            } `}
          />
          {errors.brewers_tips && (
            <div className="invalid-feedback">{errors.brewers_tips}</div>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label fw-bold">Attenuation Level</label>
          <input
            type="text"
            name="attenuation_level"
            value={beer.attenuation_level}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${
              errors.attenuation_level && touch.attenuation_level
                ? "is-invalid"
                : ""
            } `}
          />
          {errors.attenuation_level && (
            <div className="invalid-feedback">{errors.attenuation_level}</div>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label fw-bold">Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            value={beer.contributed_by}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${
              errors.contributed_by && touch.contributed_by ? "is-invalid" : ""
            } `}
          />
          {errors.contributed_by && (
            <div className="invalid-feedback">{errors.contributed_by}</div>
          )}
        </div>
        <div className="d-grid mt-4">
          <button type="submit" className="btn btn-primary">
            ADD NEW
          </button>
        </div>
      </form>
    </>
  );
}

export default BeerForm;
