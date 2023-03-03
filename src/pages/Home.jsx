import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='beerList'>
    <Link className='home' to={'/beers'}>
        <img className='homeBeers' src='https://londonbeercompetition.com/en/blog/images/w/2280/LondonBeerCompetition-08172020090443000000-5f3a482bbddd2.jpg' alt='all beers'></img>
        <h3>All Beers List</h3>
        
    </Link>
    <p>Lorem the ipsiums out of you</p>
    <Link className='home' to={'/random-beers'}>
        <img className='homeBeers' src='https://vinepair.com/wp-content/uploads/2015/08/craft-beer-definition-social.jpg' alt='random beers'></img>
        <h3>Get a random beer</h3>
       
    </Link>
    <p>Lorem the ipsiums out of you</p>
    <Link className='home' to={'/new-beer'}>
        <img className='homeBeers' src='https://gowhere.com.br/wp-content/uploads/2021/12/DHC_3113.jpg' alt='add new beer'></img>
        <h3>Add a new beer</h3>
        
    </Link>
    <p>Lorem the ipsiums out of you</p>
    </div>
  )
}

export default Home