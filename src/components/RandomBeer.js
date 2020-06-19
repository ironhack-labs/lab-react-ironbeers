import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class RandomBeer extends React.Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        this.setState({
          beer: response.data,
        });
        console.log(' Random beer imported');
      })
      .catch(() => {
        console.log('Failed to import random beer');
      });
  }

  render() {
    const {beer} = this.state;
    return (

        <div class="card" style={{ width: '18rem' }}>
        <Link to={`/beers/${beer._id}`} style={{textDecoration: 'none', color: 'black'}}>
        <img class="card-img-top" src={beer.image_url} alt="Beer Card" style={{height: '10rem', objectFit: 'contain'}}/>
        <div class="card-body">
            <h5 class="card-title">{beer.name}</h5>
            <p class="card-text">
            {beer.tagline}
            <br/>
            <strong>First Brewed: </strong> {beer.first_brewed}
            <br/>
            <strong>Attenuation Level: </strong> {beer.attenuation_level}
            <br/>
            <strong>Description: </strong> {beer.description}
            <br/>
            <strong>Created by: </strong> {beer.contributed_by}
            </p>
        </div>
        </Link>
        </div>
    
    );
  }
}