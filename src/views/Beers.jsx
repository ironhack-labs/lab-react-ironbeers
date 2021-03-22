import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';
import BeerDetails from './../components/BeerDetails';

class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ beers: response.data });

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
        </header>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <Route
                exact
                path={`/beers/${beer._id}`}
                component={BeerDetails}
              />
              <NavLink exact to={`/beers/${beer._id}`} component={BeerDetails}>
                <img src={beer.image_url} alt="beer" />
              </NavLink>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
