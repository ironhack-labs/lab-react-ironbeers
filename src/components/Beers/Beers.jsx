import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Beer from '../Beer/Beer';
import { Link } from 'react-router-dom';
import './Beers.css';

export default class Beers extends React.Component {
  state = {
    beers: undefined,
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ beers: response.data });
    });
  }
  render() {
    return (
      <div className="Beers">
        <Navbar />
        {this.state.beers ? (
          this.state.beers.map((beer) => (
            <Link
              key={beer._id}
              className="Beers__link"
              to={`/beers/${beer._id}`}
            >
              <Beer key={beer._id} {...beer} />
            </Link>
          ))
        ) : (
          <div className="Beers__loading">
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    );
  }
}
