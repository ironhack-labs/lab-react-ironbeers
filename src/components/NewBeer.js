import React from 'react'

import Header from './Header'

const NewBeer = (props) => {

  return (
    <div>
      <Header />
      <form className='form'>

        <div className="control">
          <label htmlFor='name'>Name</label>
          <input name='name' type='text' value='' />
        </div>

        <div className="control">
          <label htmlFor='tagline'>Tagline</label>
          <input name='tagline' type='text' value='' />
        </div>

        <div className="control">
          <label htmlFor='description'>Description</label>
          <textarea name='description' type='text' rows='5'></textarea>
        </div>

        <div className="control">
          <label htmlFor='first_brewed'>First Brewed</label>
          <input name='first_brewed' type='text' value='' />
        </div>

        <div className="control">
          <label htmlFor='brewers_tips'>Brewers Tips</label>
          <input name='brewers_tips' type='text' value='' />
        </div>

        <div className="control">
          <label htmlFor='attenuation_level'>Attenuation Level</label>
          <input name='attenuation_level' type='number' value='' />
        </div>

        <div className="control">
          <label htmlFor='contributed_by'>Contributed By</label>
          <input name='contributed_by' type='text' value='' />
        </div>

        <button type='submit'>ADD NEW</button>
      </form>
    </div>
  )
}

export default NewBeer;

// name
// tagline
// description
// first_brewed
// brewers_tips
// attenuation_level
// contributed_by