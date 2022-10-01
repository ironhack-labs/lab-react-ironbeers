import React from 'react';
import { useState, useEffect } from 'react';
// import { Form } from 'react-router-dom';
import { fetchNewBeer } from '../../services/services';

const INITIAL_STATE = {
  name: '',
  tagline: '',
  desception: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: Number(),
  contributed_by: '',
}

const BeerNewForm = () => {

  const [beerData, setBeerData] = useState({...INITIAL_STATE});

  const handleOnChange = (event) => {
    console.log(event)
    const { value, name } = event.target // dog - specie
    setBeerData({ ...beerData, [name]: value }) // meter entre corchetes una variable para hacer el key dinamico
  }

  const onSubmit = (event) => {
    event.preventDefault() // Para evitar el comportamiento por defecto de un form, que seria hacer peticion get y nos refrescaria la pagina
    fetchNewBeer(beerData);
    event.target.reset()
  }

  return (
    <div className="container">  
      <div className='row justify-content-center'>
        <div className="col-6">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input value={beerData.name} onChange={(event) => handleOnChange(event)} type="text" className="form-control" id="name" name="name" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="tagline" className="form-label">Tagline</label>
              <input value={beerData.tagline} onChange={(event) => handleOnChange(event)} type="text" className="form-control" id="tagline" name="tagline" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea value={beerData.description} onChange={(event) => handleOnChange(event)} type="text" className="form-control" id="description" name="description" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="first_brewed" className="form-label">First Brewed</label>
              <input value={beerData.first_brewed} onChange={(event) => handleOnChange(event)} type="text" className="form-control" id="first_brewed" name="first_brewed" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="brewers_tips" className="form-label">Brewers tips</label>
              <input value={beerData.brewers_tips} onChange={(event) => handleOnChange(event)} type="text" className="form-control" id="brewers_tips" name="brewers_tips" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="attenuation_level" className="form-label">Attenuation Level</label>
              <input value={beerData.attenuation_level} onChange={(event) => handleOnChange(event)} type="number" className="form-control" id="attenuation_level" name="attenuation_level" placeholder="" />
            </div>
            <div className="mb-3">
              <label htmlFor="contributed_by" className="form-label">Contributed by</label>
              <input value={beerData.contributed_by} onChange={(event) => handleOnChange(event)} type="text" className="form-control" id="contributed_by" name="contributed_by" placeholder="" />
            </div>
            <button className='btn btn-success'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BeerNewForm;
