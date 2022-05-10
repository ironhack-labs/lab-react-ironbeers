import { Link } from 'react-router-dom'
import React  from 'react'

function HomePage () {

  return (
    <>
      <Link to='/beers'>
      <div className='section'>
        <img src="/images/beers.png" alt="All beer img" />
        <div className='section-verbage'> 
          <h2>All Beers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin. Libero enim sed faucibus turpis in eu.</p>
        </div>
      </div>
      </Link>

      <Link to='/random-beer'>
      <div className='section'>
        <img src="/images/random-beer.png" alt="All beer img" />
        <div className='section-verbage'> 
          <h2>Random Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin. Libero enim sed faucibus turpis in eu.</p>
        </div>
      </div>
      </Link>

      <Link to='/new-beer'>
      <div className='section'>
        <img src="/images/new-beer.png" alt="All beer img" />
        <div className='section-verbage'> 
          <h2>New Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin. Libero enim sed faucibus turpis in eu.</p>
        </div>
      </div>
      </Link>
    </>
  )
}

export default HomePage;