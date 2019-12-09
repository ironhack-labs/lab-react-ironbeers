import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './beers.css';

//We are importing all beers in here

class BeersList extends Component {
  state = {
    beerslist: []
  };
  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => {
        this.setState({
          beerslist: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.beerslist &&
          this.state.beerslist.map(beer => {
            return (
              <div class="beer-box" key={beer._id} style={{ display: 'flex' }}>
                <div class="beer-img" style={{ height: '200px' }}>
                  <img
                    src={beer.image_url}
                    alt={beer.name}
                    style={{
                      height: '89%'
                    }}
                  />
                </div>
                <div class="beer-info">
                  <Link to={`/beer/${beer._id}`}>
                    <h3>{beer.name}</h3>
                  </Link>
                  <h4>{beer.tagline}</h4>
                  <p>
                    <strong>Created by:</strong>
                    {beer.contributed_by}
                  </p>
                </div>
              </div>
            );
          })}
        {!this.state.beer && <h1> Loading...</h1>}
      </div>
    );
  }
}
export default BeersList;
