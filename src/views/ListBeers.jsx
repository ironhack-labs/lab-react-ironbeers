import React, { Component } from 'react';
import Navmain from '../components/NavMain';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
export default class ListBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseFromApi) => {
        console.log(responseFromApi.data);
        this.setState({
          beers: responseFromApi.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Navmain />
        <h1>ALL BEERS</h1>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id} style={{ border: 'solid 1px black' }}>
              <h3>{beer.name}</h3>
              <p>{beer.description}</p>
              <img
                src={beer.image_url}
                style={{ width: '100px', height: 'auto' }}
              />
              <NavLink exact to={`/beers/${beer._id}`}>
                Details...
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}
