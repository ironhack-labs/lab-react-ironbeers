import React from 'react';
import { getBeers, searchBeers } from '../services/api-client';
import Card from './layaout/Card';
import MediaList from './layaout/MediaList';
import Spiner from './layaout/Spiner';
import FontAwesome from 'react-fontawesome';
import { getSearchParam } from '../utils/utils';

class Beers extends React.Component {
  state = {
    beers: [],
    list: false,
  };

  componentDidMount() {
    this.props.location.search
      ? searchBeers(getSearchParam(this.props.location.search)).then(
          (response) => {
            this.setState({
              beers: response.data,
            });
          }
        )
      : getBeers().then((response) => {
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
        {!this.props.location.search ? (
          <h1 className="my-3">All Beers</h1>
        ) : (
          <h1 className="my-3">Found Beers</h1>
        )}
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
            {beers?.length !== 0 ? (
              beers.map((beer, index) => (
                <Card key={`${index}-${beer._id}`} beer={beer} />
              ))
            ) : (
              <Spiner />
            )}
          </div>
        ) : (
          <ul className="list-unstyled">
            {beers?.length !== 0 ? (
              beers.map((beer, index) => (
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
