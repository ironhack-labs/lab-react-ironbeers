import React from 'react';
import { getBeers } from '../services/api-client';
import Card from './layaout/Card';
import MediaList from './layaout/MediaList';
import Spiner from './layaout/Spiner';
import FontAwesome from 'react-fontawesome';

class Beers extends React.Component {
  state = {
    beers: [],
    list: false,
  };

  componentDidMount() {
    getBeers().then((response) => {
      this.setState({
        beers: response.data,
      });
    });
  }

  handleClickList = () => {
    this.setState((oldState) => {
      return {
        list: !oldState.list,
      };
    });
  };

  render() {
    const beers = this.state.beers;

    return (
      <div className="container">
        <h1 className="mt-5 mb-2">All Beers</h1>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            onClick={this.handleClickList}
            className="btn btn-outline-secondary"
          >
            {this.state.list ? (
              <FontAwesome name="list" />
            ) : (
              <FontAwesome name="th-large" />
            )}
          </button>
        </div>

        {this.state.list ? (
          <div className="card-columns py-3">
            {beers.lenght !== 0 || beers.lenght !== undefined ? (
              beers?.map((beer, index) => (
                <Card key={`${index}-${beer._id}`} beer={beer} />
              ))
            ) : (
              <Spiner />
            )}
          </div>
        ) : (
          <ul className="list-unstyled">
            {beers.lenght !== 0 || beers.lenght !== undefined ? (
              beers?.map((beer, index) => (
                <MediaList key={`${index}-${beer._id}`} beer={beer} />
              ))
            ) : (
              <Spiner />
            )}
          </ul>
        )}
      </div>
    );
  }
}

export default Beers;
