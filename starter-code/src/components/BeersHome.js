import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../components/BeerHome.css'

class BeersHome extends Component {
    render() {
        return (
            <div className='home-links-container'>
                
                <Link style={{textDecoration:'none'}} to ='/beers'> <h2 className='title-home'>Beers List </h2><img className='images-home' src='/images/beers.png' alt=''/></Link>
                <Link style={{textDecoration:'none'}} to={'/random'}><h2 className='title-home'> Check your Random Beer</h2><img className='images-home' src='/images/random-beer.png' alt=''/></Link>
                <Link style={{textDecoration:'none'}} to= {'/new-beers'}><h2 className='title-home'>Check our New Beers</h2><img className='images-home' src='/images/new-beer.png' alt=''/></Link>
            </div>
        )
    }
}

export default BeersHome