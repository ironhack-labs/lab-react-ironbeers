import React from 'react';
import './NewBeer.css'
import NavBar from '../NavBar/NavBar'

const NewBeer = () => {
    return (
        <div className='NewBeer'>
          <NavBar /> 
          <h1>New beer</h1> 
        </div>
    );
};

export default NewBeer;