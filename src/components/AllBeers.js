import React, { Component } from 'react';
import axios from 'axios';

export class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => this.setState({ beers: response.data }));
  }

  handleChange = (event) => {};

  render() {
    const allBeers = this.state.beers.map((beer, index) => (
      <div key={index} className="row border-bottom">
        <div className="col-md-2 text-center mt-4 mb-4">
          <img
            src={beer.image_url}
            alt={beer.name}
            style={{ height: '100px', width: 'auto' }}
          />
        </div>
        <div className="col-auto mt-4 mb-4">
          <h3>{beer.name}</h3>
          <h5 className="text-secondary">{beer.tagline}</h5>
          <p>
            <strong>Created by: </strong>
            {beer.contributed_by}
          </p>
          <a href={'/beers/' + beer._id} className="btn btn-secondary">
            Details
          </a>
        </div>
      </div>
    ));
    return (
      <div className="container mt-4">
        <h1>All beers</h1>
        {allBeers}
      </div>
    );
  }
}

export default AllBeers;
