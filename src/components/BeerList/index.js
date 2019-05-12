import React, { Component } from 'react';
import axios from 'axios';

import Card from './Card';

class BeerList extends Component {
  state = {
    beers: [],
    filter: '',
    filteredBeers: []
  };

  componentDidMount() {
    const endpoint = 'https://ih-beer-api.herokuapp.com/beers';

    axios.get(endpoint).then(res => {
      const { data: beers } = res;

      this.setState({ beers });
    });
  }

  handleSearch = event => {
    const { target: input } = event;
    const { name, value } = input;
    const endpoint = `https://ih-beer-api.herokuapp.com/beers/search?q=${value}`;

    this.setState({
      [name]: value
    });

    axios.get(endpoint).then(res => {
      const { data: filteredBeers } = res;

      this.setState({ filteredBeers });
    });
  };

  render() {
    const { beers, filter, filteredBeers } = this.state;
    let beersList;

    if (filter === '' && filteredBeers.length === 0) {
      beersList = beers.map(beer => <Card key={beer._id} {...beer} />);
    } else {
      beersList = filteredBeers.map(beer => <Card key={beer._id} {...beer} />);
    }

    return (
      <section>
        <article>
          <div className="field">
            <label className="label">Search:</label>
            <div className="control">
              <input
                type="search"
                name="filter"
                placeholder="Filter your beers"
                className="input"
                value={filter}
                onChange={this.handleSearch}
              />
            </div>
          </div>
        </article>
        <article>
          <ul>{beersList}</ul>
        </article>
      </section>
    );
  }
}

export default BeerList;
