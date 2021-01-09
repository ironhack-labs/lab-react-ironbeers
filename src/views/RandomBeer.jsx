import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Randombeer extends React.Component {
  state = {
    beers: [],
  };
  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((responseFromApi) => {
        this.setState({
          beers: responseFromApi.data,
        });
        // const ranBeer = responseFromApi.data;
        // const random = Math.floor(Math.random() * ranBeer.length);
        // console.log(random);
      });
  }
  render() {
    return (
      <div>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
        </nav>
        <h1>Random beer</h1>
        <div key={this.state.beers._id}>
          <img
            style={{ width: 130, height: 300 }}
            src={this.state.beers.image_url}
            alt={this.state.beers.name}
          />
          <p>{this.state.beers.name}</p>
          <p>{this.state.beers.tagline}</p>
        </div>
      </div>
    );
  }
}

export default Randombeer;
