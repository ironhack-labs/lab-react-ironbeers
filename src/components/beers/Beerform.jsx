import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newBeer } from '../../services/BeerService';




const INITIAL_VALUES = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  }

const Beerform = () => {

    const navigate = useNavigate()
    const [values, setValues] = useState(INITIAL_VALUES)


    const onSubmit = (event) => {
        event.preventDefault()
    
        newBeer(values)
            .then(()=>{
            navigate(`/beers`)
            })
    
      }


    const onChange = (event) => {
        const { value, name, type } = event.target
        console.log(event.target)
        setValues({
          ...values,
          [name]: type === 'number' ? Number(value) : value
        })
      }



    return (
        <div className='form'>
        <form onSubmit={onSubmit}>
          <div className='mb-3'>
            <label>Name</label>
            <br/>
            <input type='text' id='name' name='name' value={values.name} onChange={onChange} className={'form-control'}></input>
          </div>
          <div className='mb-3'>
            <label>Tagline</label>
            <br/>
            <input type='text' id='tagline' name='tagline' value={values.tagline} onChange={onChange} className={'form-control'}></input>
          </div>
          <div className='mb-3'>
            <label>Description</label>
            <br/>
            <textarea type='text' id='description' name='description' value={values.description} onChange={onChange} className={'form-control'}></textarea>
          </div>
          <div className='mb-3'>
            <label>First brewed</label>
            <br/>
            <input type='text' id='first_brewed' name='first_brewed' value={values.first_brewed} onChange={onChange} className={'form-control'}></input>
          </div>
          <div className='mb-3'>
            <label>Brewers tips</label>
            <br/>
            <input type='text' id='brewers_tips' name='brewers_tips' value={values.brewers_tips} onChange={onChange} className={'form-control'}></input>

          </div>
          <div className='mb-3'>
            <label>Attenuation level</label>
            <br/>
            <input type='number' id='attenuation_level' name='attenuation_level' value={values.attenuation_level} onChange={onChange} className={'form-control'}></input>

          </div>
          <div className='mb-3'>
            <label>Contributed by</label>
            <br/>
            <input type='text' id='contributed_by' name='contributed_by' value={values.contributed_by} onChange={onChange} className={'form-control'}></input>
          </div>
          <button type='submit' className='btn btn-primary'>Create</button>
        </form>
      </div>
    );
};

export default Beerform;