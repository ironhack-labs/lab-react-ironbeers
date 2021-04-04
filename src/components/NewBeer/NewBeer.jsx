import React from 'react';
import './NewBeer.css'
import NavBar from '../NavBar/NavBar'

const NewBeer = () => {
    return (
        <div className='NewBeer'>
          <NavBar /> 
          <form className='d-flex flex-column my-5 align-items-center mx-5'>
            <label className='d-flex flex-column align-items-start'>
              <b>Name:</b>
              <input type="text" name="name" className='input__style' />
            </label>
            <label className='d-flex flex-column align-items-start'>
            <b>Tagline:</b>
              <input type="text" name="name" className='input__style'/>
            </label>
            <label className='d-flex flex-column align-items-start'>
            <b>Description:</b>
              <textarea type="text" name="name" className='input__style textarea__style'/>
            </label>
            <label className='d-flex flex-column align-items-start'>
              <b>First Brewed:</b>
              <input type="text" name="name" className='input__style'/>
            </label>
            <label className='d-flex flex-column align-items-start'>
              <b>Brewers Tips:</b>
              <input type="text" name="name" className='input__style'/>
            </label>
            <label className='d-flex flex-column align-items-start'>
              <b>Attenuation Level:</b>
              <input type="number" name="name" className='input__style'/>
            </label>
            <label className='d-flex flex-column align-items-start'>
              <b>Contributed by:</b>
              <input type="text" name="name" className='input__style'/>
            </label>
            <input type="submit" value="Submit" className=' submit__style'/>
        </form>
        </div>
    );
};

export default NewBeer;