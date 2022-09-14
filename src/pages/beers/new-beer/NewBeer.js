import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const validations = {
  name: (value) => {
    let message;
    if (!value){
      message = 'Name is required'
    }
    return message
  },
  tagline: (value) => {
    let message;
    if (!value){
      message = 'Tagline is required'
    }
    return message
  },
  description: (value) => {
    let message;
    if (!value){
      message = 'Description is required'
    }
    return message
  },
  first_brewed: (value) => {
    let message;
    if (!value){
      message = 'First brewed is required'
    }
    return message
  },
  brewers_tips: (value) => {
    let message;
    if (!value){
      message = 'Brewers tips is required'
    }
    return message
  },
  attenuation_level: (value) => {
    let message;
    if (!value){
      message = 'Attenuation level is required'
    }
    return message
  },
  contributed_by: (value) => {
    let message;
    if (!value){
      message = 'Contributed by level is required'
    }
    return message
  },
}


const initialState = {
  beer:{
    name: '',
    tagline: '',
    description : '',
    first_brewed : '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  },
  errors:{
    name: validations.name(''),
    tagline: validations.tagline(''),
    description: validations.description(''),
    first_brewed : validations.first_brewed(''),
    brewers_tips :validations.brewers_tips(''),
    attenuation_level:validations.attenuation_level(''),
    contributed_by:validations.contributed_by('')
  },
  touch:{
    name: false
  }
}

function NewBeer() {
const [state, setState] = useState(initialState)
const {beer, errors, touch} = state //estamos sacando task y errors de state para no tener que escribir state.errors... state.task...
const navigate = useNavigate();


const handleChange = (event) => {
  const {name, value} = event.target

  setState((prevState) => ({
    ...prevState,
    beer: {
      ...prevState.beer,
      [name]: value,
    },
    errors:{
      ...prevState.errors,
      [name]: validations[name] && validations[name](value)
    }
  }))
}

const handleBlur = (event) => {
  const {name} = event.target
  setState((prevState) => ({
      ...prevState,
      touch: {
        ...state.touch,
        [name]:true
      }
  }))
}

const isValid = () => !Object.keys(state.errors).some(error => state.errors[error])

const handleSubmit = (event) => {
  event.preventDefault()

  if (isValid()) {
    axios
    .post('https://ih-beers-api2.herokuapp.com/beers/new', beer)
    .then((res)=>{
      console.log(res)
      if(res.status === 200){
        navigate('/beers');
      }
    })
    .catch((error)=> console.log(error))

  }
}

  return (
    <>
      <h1 className='text-center mt-3'>Create a new form</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="name" class="form-label">Name</label>
          <input type="text" class={`form-control ${errors.name && touch.name ? 'is-invalid' : ''}`}
            id="name" 
            name='name' 
            onChange={handleChange}
            value={beer.name}
            onBlur={handleBlur}
          />
          {errors.name && touch.name && (
            <div className='invalid-feedback'>{errors.name}</div>
          )}
        </div>

        <div class="mb-3">
          <label htmlFor="tagline" class="form-label">Tagline</label>
          <input type="text" class={`form-control ${errors.tagline && touch.tagline ? 'is-invalid' : ''}`}
            id="tagline" 
            name='tagline' 
            onChange={handleChange}
            value={beer.tagline}
            onBlur={handleBlur}
          />
          {errors.tagline && touch.tagline && (
            <div className='invalid-feedback'>{errors.tagline}</div>
          )}
        </div>

        <div class="mb-3">
          <label htmlFor="description" class="form-label">Description</label>
          <textarea  type="text" class={`form-control ${errors.description && touch.description ? 'is-invalid' : ''}`}
            id="description" 
            name='description' 
            onChange={handleChange}
            value={beer.description}
            onBlur={handleBlur}
          />
          {errors.description && touch.description && (
            <div className='invalid-feedback'>{errors.description}</div>
          )}
        </div>

        <div class="mb-3">
          <label htmlFor="first_brewed" class="form-label">First Brewed </label>
          <input type="text" class={`form-control ${errors.first_brewed  && touch.first_brewed  ? 'is-invalid' : ''}`}
            id="first_brewed" 
            name='first_brewed' 
            onChange={handleChange}
            value={beer.first_brewed}
            onBlur={handleBlur}
          />
          {errors.first_brewed && touch.first_brewed  && (
            <div className='invalid-feedback'>{errors.first_brewed }</div>
          )}
        </div>

        <div class="mb-3">
          <label htmlFor="brewers_tips" class="form-label">Brewers Tips</label>
          <input type="text" class={`form-control ${errors.brewers_tips && touch.brewers_tips ? 'is-invalid' : ''}`}
            id="brewers_tips" 
            name='brewers_tips' 
            onChange={handleChange}
            value={beer.brewers_tips}
            onBlur={handleBlur}
          />
          {errors.brewers_tips  && touch.brewers_tips && (
            <div className='invalid-feedback'>{errors.brewers_tips}</div>
          )}
        </div>

        <div class="mb-3">
          <label htmlFor="attenuation_level" class="form-label">Attenuation Level</label>
          <input type="number" class={`form-control ${errors.attenuation_level && touch.attenuation_level ? 'is-invalid' : ''}`}
            id="attenuation_level" 
            name='attenuation_level' 
            onChange={handleChange}
            value={beer.attenuation_level}
            onBlur={handleBlur}
          />
          {errors.attenuation_level  && touch.attenuation_level && (
            <div className='invalid-feedback'>{errors.attenuation_level}</div>
          )}
        </div>

        <div class="mb-3">
          <label htmlFor="contributed_by" class="form-label">Contributed By</label>
          <input type="text" class={`form-control ${errors.contributed_by && touch.contributed_by ? 'is-invalid' : ''}`}
            id="contributed_by" 
            name='contributed_by' 
            onChange={handleChange}
            value={beer.contributed_by}
            onBlur={handleBlur}
          />
          {errors.contributed_by  && touch.contributed_by && (
            <div className='invalid-feedback'>{errors.contributed_by}</div>
          )}
        </div>


        <button type="submit" class="btn btn-primary" disabled={!isValid()}>Add New</button>
      </form>
    </>
  )
}

export default NewBeer