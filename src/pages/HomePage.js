import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {

  const beersPath = "../assets/beers.png"
  const randomBeerPath = "../assets/random-beer.png"
  const newBeerPath = "../assets/beers.png"

  return (
    <div className='text-start'>
      
      <Link to='/beers' className='text-dark text-decoration-none'>
        <img src={beersPath} alt="Beers" />
        <div className='px-3 pb-3'>
          <h1>All Beers</h1>
          <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Urna porttitor rhoncus dolor purus non enim praesent.</p>
        </div>
      </Link>
      <Link to='/random-beer' className='text-dark text-decoration-none'>
        <img src={randomBeerPath} alt="Random Beers" />
        <div className='px-3 pb-3'>
          <h1>Random Beers</h1>
          <p className='text-secondary'>Habitant morbi tristique senectus et netus et malesuada. Eget est lorem ipsum dolor sit amet. Accumsan lacus vel facilisis volutpat est velit egestas. At quis risus sed vulputate odio ut enim blandit.</p>
        </div>
      </Link>
      <Link to='/new-beer' className='text-dark text-decoration-none'>
        <img src={newBeerPath} alt="New Beer" />
        <div className='px-3 pb-3'>
          <h1>New Beer</h1>
          <p className='text-secondary'>Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Convallis a cras semper auctor neque vitae tempus quam. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique.</p>
        </div>
      </Link>

    </div>
  )
}

export default HomePage