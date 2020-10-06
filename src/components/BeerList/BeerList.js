import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BeerList.css';

import { getAllBeers, filterBeers } from '../../services/BeerServices';

class BeerList extends Component {
  state = {
    beers: [],
    query: '',
  };

  componentDidMount = () => {
    this.fetchData();
  };

  componentDidUpdate = () => {
    filterBeers(this.state.query).then((response) => {
      this.setState({
        beers: response,
      });
    })
    .catch(err => console.log('Error retrieving filtered beers: ', err))
  };

  fetchData = () => {
    getAllBeers().then((response) => {
      console.log(response);
      this.setState({
        beers: response,
      });
    })
    .catch(err => console.log('Error retrieving all beers: ', err))

  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="header">
        </div>
        <div>
          <input
            className="search-bar"
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </div>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <Link to={'/beers/' + beer._id} className="beer-card">
                <img src={beer.image_url} alt={beer._id} />
                <div className="beer-tag">
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <p>
                    <strong>Created by: </strong>
                    {beer.contributed_by}
                  </p>
                </div>
              </Link>
              <hr style={{ height: '0.1px', margin: '0 20px' }} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default BeerList;