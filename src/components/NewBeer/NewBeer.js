import React from 'react'
import { newBeer } from '../../services/BeerService'
import './NewBeer.css' 

// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text

export const NewBeer = () => {

  // onSubmit() => {
  //   newBeer()
  //   .then( () => {

  //   })
  // }

  // () => onSubmit()

  return (
    <div className='NewBeer'>
      <div className='container'>
      <h1 className='mb-4 mt-5'>New Beer</h1>
        <form className='NewBeer-form d-flex flex-column mt-3' onSubmit=''>
          <input type='text' name='name' placeholder='Name'></input>
          <input type='text' name='tagline' placeholder='Tagline'></input>
          <textarea placeholder='description' name='description'></textarea>
          <input type='text' name='first_brewed' placeholder='Frist Browed'></input>
          <input type='text' name='brewers_tips' placeholder='Browed type'></input>
          <input type='number' name='attenuation_level' placeholder='Atenuation Level'></input>
          <input type='text' name='contributed_by' placeholder='Contributed by'></input>
          <button className='btn btn-success mt-3'>Submit</button>
        </form>
      </div>
    </div>
  )
}
