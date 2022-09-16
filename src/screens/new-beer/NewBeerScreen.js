import React from "react";
import HomeButton from "../../components/home-button/HomeButton";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";


const validations = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Beer name is required";
    }
    return message;
  },
  tagline: (value) => {
    let message;
    if (!value) {
      message = "Beer tagline is required";
    }
    return message;
  },
  description: (value) => {
    let message;
    if (!value) {
      message = "Beer tagline is required";
    }
    return message;
  },
  first_brewed: (value) => {
    let message;
    if (!value) {
      message = "Beer first_brewed is required";
    }
    return message;
  },
  brewers_tips: (value) => {
    let message;
    if (!value) {
      message = "Beer first_brewed is required";
    }
    return message;
  },
  attenuation_level: (value) => {
    let message;
    if (!value) {
      message = "Beer attenuation_level is required";
    }
    return message;
  },
  contributed_by: (value) => {
    let message;
    if (!value) {
      message = "Beer contributed_by is required";
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
    contributed_by: ""
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
    title: false,
    date: false,
    poster: false,
  },
};


export default function NewBeerScreen() {
  const navigate = useNavigate()

  const [state, setState] = useState(initialState);
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value)
    
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

  const handleBlur = (e) => {
    const { name } = e.target;

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

const handleSubmit = (e) => {
  e.preventDefault();
  if (isValid()) {
    console.log({...beer})
    axios
    .post('https://ih-beers-api2.herokuapp.com/beers/new', {...beer})
    .then(navigate("/"))
    
  }
}
  
  
  const { beer, touch, errors } = state;

  return (
    <>
      <HomeButton />
      <form onSubmit={handleSubmit}>
        <div className="mb-3 input-group mt-3">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              name="name"
              value={beer.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.name && touch.name ? "is-invalid" : ""}`}
              placeholder="Name of beer"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
        <div className="mb-3 input-group mt-3">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              name="tagline"
              value={beer.tagline}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.tagline && touch.tagline ? "is-invalid" : ""}`}
              placeholder="Tagline"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.tagline}</div>
            )}
          </div>
        <div className="mb-3 input-group mt-3">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              name="description"
              value={beer.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.description && touch.description ? "is-invalid" : ""}`}
              placeholder="description"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.description}</div>
            )}
          </div>
        <div className="mb-3 input-group mt-3">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              name="first_brewed"
              value={beer.first_brewed}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.first_brewed && touch.first_brewed ? "is-invalid" : ""}`}
              placeholder="first_brewed"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.first_brewed}</div>
            )}
          </div>
        <div className="mb-3 input-group mt-3">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              name="brewers_tips"
              value={beer.brewers_tips}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.brewers_tips && touch.brewers_tips ? "is-invalid" : ""}`}
              placeholder="brewers_tips"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.brewers_tips}</div>
            )}
          </div>
        <div className="mb-3 input-group mt-3">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="number"
              name="attenuation_level"
              value={beer.attenuation_level}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.attenuation_level && touch.attenuation_level ? "is-invalid" : ""}`}
              placeholder="attenuation_level"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.attenuation_level}</div>
            )}
          </div>
        <div className="mb-3 input-group mt-3">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              name="contributed_by"
              value={beer.contributed_by}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.contributed_by && touch.contributed_by ? "is-invalid" : ""}`}
              placeholder="contributed_by"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.contributed_by}</div>
            )}
          </div>
          
          <button className="btn btn-success">Submit</button>
        </form>
      </>
  )
}
