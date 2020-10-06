import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getAllBeers, searchBeers } from '../services/IronBeersAPI';
import SearchBeer from './SearchBeer';

class ListBeers extends Component {
  state = {
    beers: [],
  };

  fetchBeers = () => {
    getAllBeers()
      .then((beers) => {
        this.setState({ beers });
      })
      .catch((error) => console.log(error));
  };

  searchBeer = (srchKey) => {
    console.log(' search beers of home ', srchKey);
    searchBeers(srchKey)
      .then((srchResp) => {
        this.setState({ beers: srchResp });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    this.fetchBeers();
  };

  render = () => {
    console.log(this.state.beers);

    return (
      <div>
        <h2> List of All Beers </h2>
        <SearchBeer searchBeer={this.searchBeer} />
        <ul>
          {this.state.beers.map(
            ({ _id, image_url, name, tagline, contributed_by }) => (
              <li
                className="list-group"
                style={{ display: 'flex', fleDirection: 'column' }}
                key={_id}
              >
                <div className=" list-group-item each-beer">
                  <img
                    src={image_url}
                    atl=" "
                    style={{ height: '70px', width: '25px' }}
                  />
                  <div>
                    <Link to={`/beers/${_id}`} isrand="false">
                      <h4> {name} </h4>
                    </Link>

                    <strong> {tagline} </strong>
                    <sub> {contributed_by} </sub>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    );
  };
}

export default ListBeers;
