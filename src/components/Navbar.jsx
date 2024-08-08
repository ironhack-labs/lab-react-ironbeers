import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div>
           
           <button className='home-bg'> <Link to ={`/`} > <img src='/src/assets/home-icon.png' alt='Home' /></Link></button>

    </div>
  )
}

export default Navbar