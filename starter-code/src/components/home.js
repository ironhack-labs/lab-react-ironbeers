import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class home extends Component {
    render() {
        return (
            <div>
                <Link to ='/allBeers'> <h2 className='title-home'>Beers List </h2><img className='images-home' src='/images/beers.png' alt=''/></Link>
                <Link to={'/randomBeer'}><h2 className='title-home'> Check your Random Beer</h2><img className='images-home' src='/images/random-beer.png' alt=''/></Link>
                <Link to= {'/newBeers'}><h2 className='title-home'>Check our New Beers</h2><img className='images-home' src='/images/new-beer.png' alt=''/></Link>
            </div>
        )
    }
}

export default home;

                
