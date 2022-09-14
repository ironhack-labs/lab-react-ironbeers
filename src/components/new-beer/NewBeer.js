import { Link, useNavigate } from 'react-router-dom';
import './NewBeer.css';

import { v4 as uuid } from 'uuid';

import HomeBanner from '../../assets/header.png';
import { useState } from 'react';
import axios from 'axios';

const validations = {
  name: value => {
    let message = undefined;
    message = !value && 'The name is required';
    return message;
  },
  tagline: value => {
    let message = undefined;
    message = !value && 'The tagline is required';
    return message;
  },
  description: value => {
    let message = undefined;
    message = value.length < 50 && `The description need at least ${50 - value.length} more.`;
    return message;
  },
  first_brewed: value => {
    let message = undefined;
    message = !value && 'The first brewed is required';
    return message;
  },
  brewers_tips: value => {
    let message = undefined;
    message = !value && 'The brewer tips are required';
    return message;
  },
  attenuation_level: value => {
    let message = undefined;
    message = !value && 'The attenuation level is required';
    return message;
  },
  contributed_by: value => {
    let message = undefined;
    message = !value && 'The contributed by is required';
    return message;
  }
}


const initialValue = {
  beer: {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  },
  errors: {
    name: validations.name(''),
    tagline: validations.tagline(''),
    description: validations.description(''),
    first_brewed: validations.first_brewed(''),
    brewers_tips: validations.brewers_tips(''),
    attenuation_level: validations.attenuation_level(''),
    contributed_by: validations.contributed_by('')
  },
  touch: {
    name: false,
    tagline: false,
    description: false,
    first_brewed: false,
    brewers_tips: false,
    attenuation_level: false,
    contributed_by: false
  }
}


function NewBeer() {

  const navigate = useNavigate();

  const [state, setState] = useState(initialValue);

  const { beer, errors, touch} = state;

  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      beer: {
        ...state.beer,
        [name]: value
      },
      errors: {
        ...state.errors,
        [name]: validations[name] && validations[name](value)
      }
    })
  }

  const handleBlur = event => {
    const { name } = event.target;
    setState({
      ...state,
      touch: {
        ...state.touch,
        [name]: true
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new',{...beer, id: uuid()})
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  }

  return (
    <div className="new-beer">
      <Link to={'/'}>
        <img className="new-beer__header" src={HomeBanner} alt="Home" />
      </Link>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="fw-bold form-label">Name</label>
          <input name="name" type="text" className={`form-control rounded-pill ${errors.name && touch.name ? 'is-invalid' : ''}`} value={beer.name} 
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touch.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold form-label">Tagline</label>
          <input name="tagline" type="text" className={`form-control rounded-pill ${errors.tagline && touch.tagline ? 'is-invalid' : ''}`} value={beer.tagline} 
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.tagline && touch.tagline && (
            <div className="invalid-feedback">{errors.tagline}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold form-label">Description</label>
          <textarea name="description" className={`form-control rounded-4 ${errors.description && touch.description ? 'is-invalid' : ''}`} rows="10" cols="50" value={beer.description} 
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.description && touch.description && (
            <div className="invalid-feedback">{errors.description}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold form-label">First Breweb</label>
          <input name="first_brewed" type="text" className={`form-control rounded-pill ${errors.first_brewed && touch.first_brewed ? 'is-invalid' : ''}`} value={beer.first_brewed} 
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.first_brewed && touch.first_brewed && (
            <div className="invalid-feedback">{errors.first_brewed}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold form-label">Brewers Tips</label>
          <input name="brewers_tips" type="text" className={`form-control rounded-pill ${errors.brewers_tips && touch.brewers_tips ? 'is-invalid' : ''}`} value={beer.brewers_tips} 
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.brewers_tips && touch.brewers_tips && (
            <div className="invalid-feedback">{errors.brewers_tips}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold form-label">Attenuation level</label>
          <input name="attenuation_level" type="text" className={`form-control rounded-pill ${errors.attenuation_level && touch.attenuation_level ? 'is-invalid' : ''}`} value={beer.attenuation_level} 
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.attenuation_level && touch.attenuation_level && (
            <div className="invalid-feedback">{errors.attenuation_level}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold form-label">Contributed by</label>
          <input name="contributed_by" type="text" className={`form-control rounded-pill ${errors.contributed_by && touch.contributed_by ? 'is-invalid' : ''}`} value={beer.contributed_by} 
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.contributed_by && touch.contributed_by && (
            <div className="invalid-feedback">{errors.contributed_by}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary rounded-pill w-100">ADD NEW</button>
      </form>
    </div>
  )
}

export default NewBeer;