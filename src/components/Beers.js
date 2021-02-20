import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log(response);
      this.setState({ beers: response.data });
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>All Beers</h1>
          {this.state.beers.map((beer, index) => {
            return (
              <div key={index}>
                <Link className="beerItem" to={`/beers/${beer._id}`}>
                  <img src={beer.image_url} alt={beer.name} />
                  <div className="beerItemRight">
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>
                      <strong>Created by: </strong>
                      {beer.contributed_by}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Beers;
