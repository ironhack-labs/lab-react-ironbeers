import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
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

  onChange = (value) => {
    if (value.length === 0) {
      return;
    }
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="Beers">
        <Navbar />
        <Search onChange={this.onChange} />
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
