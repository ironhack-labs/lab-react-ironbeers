import React, { useState } from 'react';
import { createBeer } from '../../services/BeersService';

const INITIAL_VALUES = {
  name: '',
  tagline: '',
  description: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: '',
  contributed_by: ''
}

const ERROR_MSG = 'Please complete this field'

const formSchema = {
  name: (value) => {
    if(!value) {
      return ERROR_MSG
    }
  },
  tagline: (value) => {
    if(!value) {
      return ERROR_MSG
    }
  },
  description: (value) => {
    if(!value) {
      return ERROR_MSG
    }
  },
  first_brewed: (value) => {
    if(!value) {
      return ERROR_MSG
    }
  },
  brewers_tips: (value) => {
    if(!value) {
      return ERROR_MSG
    }
  },
  attenuation_level: (value) => {
    if(!value) {
      return ERROR_MSG
    } else if(value <= 0) {
      return 'Please enter a valid level'
    }
  },
  contributed_by: (value) => {
    if(!value) {
      return ERROR_MSG
    }
  },
}

const NewBeerForm = () => {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})

  const onChange = (event) => {
    const { value, name, type } = event.target
    setValues({
      ...values,
      [name]: type === 'number' ? Number(value) : value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const newErrorsObj = {}

    Object.keys(formSchema).forEach(key => {
      const value = values[key]
      const validator = formSchema[key]
      const error = validator(value)

      if(error) {
        newErrorsObj[key] = error
      }
    })

    if(!newErrorsObj.keys) {
      createBeer(values)
    } else {
      setErrors(newErrorsObj)
    }

  }

  return (
    <div className='NewBeerForm m-5'>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label>Name</label>
          <br/>
          <input type='text' id='name' name='name' value={values.name} onChange={onChange} className={errors.name ? 'is-invalid form-control' : 'form-control'}></input>
          <div className='invalid-feedback'>
            {errors.name}
          </div>
        </div>
        <div className='mb-3'>
          <label>Tagline</label>
          <br/>
          <input type='text' id='tagline' name='tagline' value={values.tagline} onChange={onChange} className={errors.tagline ? 'is-invalid form-control' : 'form-control'}></input>
          <div className='invalid-feedback'>
            {errors.tagline}
          </div>
        </div>
        <div className='mb-3'>
          <label>Description</label>
          <br/>
          <textarea type='text' id='description' name='description' value={values.description} onChange={onChange} className={errors.description ? 'is-invalid form-control' : 'form-control'}></textarea>
          <div className='invalid-feedback'>
            {errors.description}
          </div>
        </div>
        <div className='mb-3'>
          <label>First brewed</label>
          <br/>
          <input type='text' id='first_brewed' name='first_brewed' value={values.first_brewed} onChange={onChange} className={errors.first_brewed ? 'is-invalid form-control' : 'form-control'}></input>
          <div className='invalid-feedback'>
            {errors.first_brewed}
          </div>
        </div>
        <div className='mb-3'>
          <label>Brewers tips</label>
          <br/>
          <input type='text' id='brewers_tips' name='brewers_tips' value={values.brewers_tips} onChange={onChange} className={errors.brewers_tips ? 'is-invalid form-control' : 'form-control'}></input>
          <div className='invalid-feedback'>
            {errors.brewers_tips}
          </div>
        </div>
        <div className='mb-3'>
          <label>Attenuation level</label>
          <br/>
          <input type='number' id='attenuation_level' name='attenuation_level' value={values.attenuation_level} onChange={onChange} className={errors.attenuation_level ? 'is-invalid form-control' : 'form-control'}></input>
          <div className='invalid-feedback'>
            {errors.attenuation_level}
          </div>
        </div>
        <div className='mb-3'>
          <label>Contributed by</label>
          <br/>
          <input type='text' id='contributed_by' name='contributed_by' value={values.contributed_by} onChange={onChange} className={errors.contributed_by ? 'is-invalid form-control' : 'form-control'}></input>
          <div className='invalid-feedback'>
            {errors.contributed_by}
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>Create</button>
      </form>
    </div>
  );
};

export default NewBeerForm;