import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import axios from 'axios';
import './Beers.css';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
  state = {
    beers: [],
    search: '',
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/').then((resp) => {
      this.setState({
        beers: resp.data,
      });
    });
  }

  componentDidUpdate() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`
      )
      .then((resp) => {
        this.setState({
          beers: resp.data,
        });
      });
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div>
        <Header />

        <input
          placeholder="search beer"
          id="search"
          onChange={(event) => this.handleChange(event)}
        />

        {this.state.beers.map((beer) => (
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <div className="beerBlock">
              <div className="beerImage">
                <img src={beer.image_url} />
              </div>
              <div className="beerInfo">
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p className="info">Created by: {beer.tagline}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
Beers.propTypes = {};

export default Beers;
