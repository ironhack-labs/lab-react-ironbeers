import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beers: response.data,
        });
        console.log('Full beer list imported');
      })
      .catch(() => {
        console.log('Failed to import full beer list');
      });
  }

  render() {
    return this.state.beers.map((beer, index) => {
      console.log(beer);
      return (
        <div class="card" style={{ width: '18rem' }}>
        <Link to={`/beers/${beer._id}`} style={{textDecoration: 'none', color: 'black'}}>
          <img class="card-img-top" src={beer.image_url} alt="Beer Card" style={{height: '10rem', objectFit: 'contain'}}/>
          <div class="card-body">
            <h5 class="card-title">{beer.name}</h5>
            <p class="card-text">
              {beer.tagline} <br/>
              <strong>Created by: </strong> {beer.contributed_by}
            </p>
          </div>
          </Link>
        </div>
      );
    });
  }
}
