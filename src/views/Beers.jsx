import React from 'react';
import axios from 'axios';
import Head from './Header';
import {Link} from "react-router-dom"

class Beers extends React.Component {
  state = {
    beers: null,
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
    if (this.state.beers === null) {
      return <h1>LOADING FOOL</h1>;
    }

    return (
      <div className="App">
        <h1>Beers 4Ever</h1>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img
                className="beerImg"
                src={beer.image_url}
                alt="{beer.image_url}"
              ></img>
              <p>Name:{beer.name}</p>
              <p>tagline:{beer.tagline}</p>
              <p>Contributor:{beer.contributed_by}</p>
              <Link to={"/beers/${beer._id}"}>More Info</Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Beers;
