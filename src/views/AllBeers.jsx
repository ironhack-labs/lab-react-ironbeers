import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class AllBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseFromApi) => {
        console.log(responseFromApi);
        this.setState({
          beers: responseFromApi.data,
        });
      });
  }

render() {
  return (
    <div>
      <h2>All Beers</h2>
      {this.state.beers.map((beer) => {
        return (
          <div>
            <img style={{
              width: 100,
              height: 200
            }} src={beer.image_url} alt={beer.name} />
            <NavLink exact to="/beers/:beerId">
        {beer.name}
      </NavLink>
            <h3>{beer.tagline}</h3>
            <h3>{`Created by: ${beer.contributed_by}`}</h3>
          </div>
        )
      })}
    </div>
  )
}

}
