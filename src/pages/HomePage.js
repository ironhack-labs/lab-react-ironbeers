import React from 'react'
import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'


const HomePage = () => {

  return (
    <div className='text-start'>
      
      <Link to='/beers' className='text-dark text-decoration-none'>
        <img src={beers} alt="Beers" style={{height: "200px"}} c/>
        <div className='px-3 pt-1 pb-3'>
          <h1>All Beers</h1>
          <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Urna porttitor rhoncus dolor purus non enim praesent.</p>
        </div>
      </Link>
      <Link to='/random-beer' className='text-dark text-decoration-none'>
        <img src={randomBeer} alt="Random Beers" style={{height: "200px"}} />
        <div className='px-3 pt-1 pb-3'>
          <h1>Random Beers</h1>
          <p className='text-secondary'>Habitant morbi tristique senectus et netus et malesuada. Eget est lorem ipsum dolor sit amet. Accumsan lacus vel facilisis volutpat est velit egestas. At quis risus sed vulputate odio ut enim blandit.</p>
        </div>
      </Link>
      <Link to='/new-beer' className='text-dark text-decoration-none'>
        <img src={newBeer} alt="New Beer" style={{height: "200px"}} />
        <div className='px-3 pt-1 pb-3'>
          <h1>New Beer</h1>
          <p className='text-secondary'>Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Convallis a cras semper auctor neque vitae tempus quam. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique.</p>
        </div>
      </Link>

    </div>
  )
}

export default HomePage