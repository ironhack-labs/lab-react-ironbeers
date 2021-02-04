
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbar from './Navbar'


export class BeerDetails extends Component {
  render() {
    const id = this.props.match.params.beerId;
    
    const beers = this.props.beers;
    
    const beer = beers.find(beer => beer._id === id) || {}
    
    return (
    <div>
      <Navbar />
        <div className='container'>
            <div className='beerDetailImg'>
            <img src={beer.image_url} alt={beer.name} width="10%" />
            <div className='beerDetail'>
                <h1>{beer.name}</h1>
                <h1 style={{ color: 'gray' }}>{beer.attenuation_level}</h1>
            </div>
            <div className='beerDetail'>
                <h3 style={{ color: 'gray' }}>{beer.tagline}</h3>
                <h3>
                <strong>{beer.first_brewed}</strong>
                </h3>
            </div>
            <p>{beer.description}</p>
            <p style={{ color: 'gray' }}>{beer.contributed_by}</p>
            </div>
            <Link to='/beers'>Back</Link>
        </div>
    </div>
    );
  }
}

export default BeerDetails;