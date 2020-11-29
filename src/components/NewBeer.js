import React from 'react';
import './NewBeer.css';
import Nav from './Nav';

function NewBeer() {
  return (
    <div className="NewBeer">
      <Nav />
      <form className='newBeerForm'>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' name='name'></input>
        </div>
        <div>
          <label htmlFor='tagline'>Tagline:</label>
          <input id='tagline' type='text' name='tagline'></input>
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input id='description' type='text' name='description'></input>
        </div>
        <div>
          <label htmlFor='first_brewed'>First Brewed:</label>
          <input id='first_brewed' type='text' name='first_brewed'></input>
        </div>
        <div>
          <label htmlFor='brewers_tips'>Brewers Tips:</label>
          <input id='brewers_tips' type='text' name='brewers_tips'></input>
        </div>
        <div>
          <label htmlFor='attenuation_level'>Attenuation Level:</label>
          <input id='attenuation_level' type='text' name='attenuation_level'></input>
        </div>
        <div>
          <label htmlFor='contributed_by'>Contributed by:</label>
          <input id='contributed_by' type='text' name='contributed_by'></input>
        </div>
        <button type='submit'>ADD NEW</button>
      </form>
    </div>
  );
}

export default NewBeer;