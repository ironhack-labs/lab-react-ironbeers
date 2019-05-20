import React from 'react'
import {  NavLink } from 'react-router-dom';



class Home extends React.Component{
 
  render(){
    return(
<div className = 'home-page-text'>
<div className = 'home-link'>
<NavLink to='/beers'>
      <img src = './img/beers.png' alt='beers'></img>
      <br></br>
      <h3>All Beers</h3>
      <p className='text-secondary'>Lorem ipsum</p>
</NavLink>
</div>

<div className = 'home-link'>
<NavLink to='/randombeer'>
      <img src = './img/random-beer.png' alt='random beer'></img>
      <br></br>
      <h3>Random Beer</h3>
      <p className='text-secondary'>Lorem ipsum</p>
</NavLink>
</div>

<div className = 'home-link'>
<NavLink to='/newbeer'>
      <img src = './img/new-beer.png' alt='random beer'></img>
      <br></br>
      <h3>New Beer</h3>
      <p className='text-secondary'>Lorem ipsum</p>
</NavLink>
</div>
</div>

    )
  }
}
export default Home