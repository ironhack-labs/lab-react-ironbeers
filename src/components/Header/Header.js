import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <div className='Header'>
      <div className='container'>
        <div className='Header-beers d-flex justify-content-between align-items-center mt-5'>

          <Link to='/allBeers' className='Header-beers-page'>
            <div>
              <h3>All Beers</h3>
            </div> 
          </Link> 

          <Link to='/ramdonBeer' className='Header-beers-page'>
            <div>
              <h3>Ramdon Beer</h3>
            </div>  
          </Link>

          <Link to='/newBeer' className='Header-beers-page'>
            <div>
              <h3>New Beer</h3>
            </div> 
          </Link>

        </div>
      </div>
    </div>
  )
}
