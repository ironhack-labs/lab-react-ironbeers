import React from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({
        beers: response.data,
      });
    });
  }

  render() {
    const beers = this.state.beers.map((beer) => {
      return (
        <Link
          to={`/beers/${beer._id}`}
          style={{ textDecoration: 'none', color: '#000' }}
        >
          <div className="container-fluid">
            <div className="row-12">
              <div className="card mt-3">
                <div className="d-flex">
                  <div className="col-4 m-2 text-center">
                    <img
                      src={beer.image_url}
                      alt="beer"
                      style={{ height: '150px' }}
                    />
                  </div>
                  <div className="card-body col-8">
                    <h4 className="card-title">{beer.name}</h4>
                    <h5 className="card-text" style={{ color: '#999' }}>
                      {beer.tagline}
                    </h5>
                    <small className="card-text">
                      <b>Created by: </b>
                      {beer.name}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    });

    return (
      <div>
        <Header />
        {this.state.beers.length ? beers : 'Loading...'}
      </div>
    );
  }
}

export default AllBeers;
