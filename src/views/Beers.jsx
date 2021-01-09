import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Beers extends React.Component {
  state = {
    beers: [],
  };
  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((reponseFromApi) => {
        console.log(reponseFromApi.data);
        this.setState({
          beers: reponseFromApi.data,
        });
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
        <h2>Beers</h2>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img
                style={{ width: 130, height: 300 }}
                src={beer.image_url}
                alt={beer.name}
              />
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
