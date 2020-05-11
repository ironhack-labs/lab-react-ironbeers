import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Allbeers extends Component {
  state = {
    allbeers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((beers) => {
      //console.log(beers.data);
      this.setState({ allbeers: beers.data });
    });
  }
  render() {
    return (
      <div>
        {this.state.allbeers.map((beer) => {
          {
            //console.log(beer._id);
          }
          return (
            <div key={beer._id}>
              <Link to={`/beer/${beer._id}`}>
                <img src={beer.image_url}></img>
                <h2>{beer.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
