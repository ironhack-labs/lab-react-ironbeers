import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

const validations = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Name is required";
    }
    return message;
  },
  tagline: (value) => {
    let message;
    if (!value) {
      message = "Tagline is required";
    }
    return message;
  },
  description: (value) => {
    let message;
    if (value.lenght < 3) {
      message = "The description is too short";
    }
    return message;
  },
  first_brewed: "",
  brewers_tips: "",
  attenuation_level: "",
  contributed_by: (value) => {
    let message;
    if (!value) {
      message = "Username contributor is required";
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
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
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

function BeerForm({ onBeerCreated }) {
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
      axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", {
          ...beer,
        })
        .then((res) => {
          setState(initialState)
          return redirect("/")
        })
        .catch((error) => console.error(error));
    }
  };

  const { beer, errors, touch } = state;
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-3">
        <span>Name</span>
        <div className="input-group mb-3">
          <input
            className={`form-control rounded-4 ${
              errors.name && touch.name ? "is-invalid" : ""
            }`}
            type="text"
            name="name"
            value={beer.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touch.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>

        <span>Tagline</span>
        <div className="input-group mb-3">
          <input
            className={`form-control rounded-4 ${
              errors.tagline && touch.tagline ? "is-invalid" : ""
            }`}
            type="text"
            name="tagline"
            value={beer.tagline}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.tagline && touch.tagline && (
            <div className="invalid-feedback">{errors.tagline}</div>
          )}
        </div>

        <span>Description</span>
        <div className="input-group">
          <textarea
            name="description"
            value={beer.description}
            className="form-control rounded-4"
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.description && touch.description && (
            <div className="invalid-feedback">{errors.description}</div>
          )}
        </div>

        <span>First Brewed</span>
        <div className="input-group mb-3">
          <input
            className={`form-control rounded-4 ${
              errors.first_brewed && touch.first_brewed ? "is-invalid" : ""
            }`}
            type="text"
            name="first_brewed"
            value={beer.first_brewed}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.first_brewed && touch.first_brewed && (
            <div className="invalid-feedback">{errors.first_brewed}</div>
          )}
        </div>

        <span>Brewed Tips</span>
        <div className="input-group mb-3">
          <input
            className={`form-control rounded-4 ${
              errors.brewers_tips && touch.brewers_tips ? "is-invalid" : ""
            }`}
            type="text"
            name="brewers_tips"
            value={beer.brewers_tips}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.brewers_tips && touch.brewers_tips && (
            <div className="invalid-feedback">{errors.brewers_tips}</div>
          )}
        </div>

        <span>Attenuation_level</span>
        <div className="input-group mb-3">
          <input
            className={`form-control rounded-4 ${
              errors.attenuation_level && touch.attenuation_level
                ? "is-invalid"
                : ""
            }`}
            type="number"
            name="attenuation_level"
            value={beer.attenuation_level}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.attenuation_level && touch.attenuation_level && (
            <div className="invalid-feedback">{errors.attenuation_level}</div>
          )}
        </div>

        <span>Contributed By</span>
        <div className="input-group mb-3">
          <input
            className={`form-control rounded-4 ${
              errors.contributed_by && touch.contributed_by ? "is-invalid" : ""
            }`}
            type="text"
            name="contributed_by"
            value={beer.contributed_by}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.contributed_by && touch.contributed_by && (
            <div className="invalid-feedback">{errors.contributed_by}</div>
          )}
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Add Beer
          </button>
        </div>
      </div>
    </form>
  );
}

export default BeerForm;
