import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { addBeer } from '../../services/BeersService';


function NewBeer() {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });

  const OnNewBeer = (beer) => {
    addBeer(beer)
      .then(beer => console.info(beer))
      .catch((error) => console.error(error))
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(OnNewBeer)} className='m-3'>
        <div><label><b>Name</b></label></div>
        <div className='mb-3'>
          <input className={`form-control rounded rounded-4 m-1 ${errors.name ? 'is-invalid' : ''}`} type="text" {...register('name', {
            required: 'Name is required'
          })} />
          {errors.name && <div className='invalid-feedback'> {errors.name?.message}</div>}
        </div>

        <div><label><b>Tagline</b></label></div>
        <div className='mb-3'>
          <input className={`form-control rounded rounded-4 m-1 ${errors.tagline ? 'is-invalid' : ''}`} type="text" {...register('tagline', {
            required: 'Tagline is required'
          })} />
          {errors.tagline && <div className='invalid-feedback'> {errors.tagline?.message}</div>}
        </div>

        <div><label><b>Description</b></label></div>
        <div className='mb-3'>
          <textarea className={`form-control rounded rounded-4 m-1 ${errors.description ? 'is-invalid' : ''}`} rows={5} type="text" {...register('description', {
            required: 'Description is required'
          })} />
          {errors.description && <div className='invalid-feedback'> {errors.description?.message}</div>}
        </div>

        <div><label><b>First Brewed</b></label></div>
        <div className='mb-3'>
          <input className={`form-control rounded rounded-4 m-1 ${errors.first_brewed ? 'is-invalid' : ''}`} type="text" {...register('first_brewed', {
            required: 'First Brewed is required'
          })} />
          {errors.first_brewed && <div className='invalid-feedback'> {errors.first_brewed?.message}</div>}
        </div>

        <div><label><b>Brewers Tips</b></label></div>
        <div className='mb-3'>
          <input className={`form-control rounded rounded-4 m-1 ${errors.brewers_tips ? 'is-invalid' : ''}`} type="text" {...register('brewers_tips', {
            required: 'Brewed Tips are required'
          })} />
          {errors.brewers_tips && <div className='invalid-feedback'> {errors.brewers_tips?.message}</div>}
        </div>

        <div><label><b>Attenuation Level</b></label></div>
        <div className='mb-3'>
          <input className={`form-control rounded rounded-4 m-1 ${errors.attenuation_level ? 'is-invalid' : ''}`} type="number" {...register('attenuation_level', {
            required: 'Attenuation level is required'
          })} />
          {errors.attenuation_level && <div className='invalid-feedback'> {errors.attenuation_level?.message}</div>}
        </div>

        <div><label><b>Contributed By</b></label></div>
        <div className='mb-3'>
          <input className={`form-control rounded rounded-4 m-1 ${errors.contributed_by ? 'is-invalid' : ''}`} type="text" {...register('contributed_by', {
            required: 'Attenuation level is required'
          })} />
          {errors.contributed_by && <div className='invalid-feedback'> {errors.contributed_by?.message}</div>}
        </div>
        <button className='btn btn-primary rounded rounded-4 mt-3' type="submit">ADD NEW</button>
      </form>
    </div>
  )
}

export default NewBeer