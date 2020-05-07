import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className="main__link">
        <img src="/images/beers.png" alt=""/>
        <NavLink to='/beers'>All beers</NavLink>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sit sint at mollitia earum quasi nisi modi! Stop pretending you can read latin...</p>
      </div>
      <div className="main__link">
        <img src="/images/random-beer.png" alt=""/>
        <NavLink to='/random'>Check out a random beer</NavLink>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sit sint at mollitia earum quasi nisi modi! Stop pretending you can read latin...</p>
      </div>
      <div className="main__link">
        <img src="/images/new-beer.png" alt=""/>
        <NavLink to='/new-beer'>Add a new beer</NavLink>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sit sint at mollitia earum quasi nisi modi! Stop pretending you can read latin...</p>
      </div>
    </div>
  )
}

export default Home
