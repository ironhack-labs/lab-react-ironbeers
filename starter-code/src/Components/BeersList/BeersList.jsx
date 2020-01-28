import React, { Component } from 'react';
import NavBar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';
import BeerLine from '../BeerLine/BeerLine';
import './BeersList.css';

export default class BeersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.props.searchBeers(value);
  }

  render() {
    const { beersList } = this.props;
    return (
      <div className="beers-list">
        <NavBar />
        <input
          className="search-field"
          type="text"
          placeholder="filter beers by name (please, type very slowly lol)"
          onChange={this.handleChange}
          value={this.props.queryString}
        />
        {beersList.map((beer, i) => {
          return (
            <Link
              key={i}
              onClick={() => this.props.getSingleBeer(beer._id)}
              to={`/beers/${beer._id}`}
            >
              <BeerLine beer={beer} />
            </Link>
          );
        })}
      </div>
    );
  }
}
