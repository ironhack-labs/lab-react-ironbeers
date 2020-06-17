import React, { Component } from 'react';
import Header from './Header';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

class AllBeers extends Component {
  state = {
    beers: [],
  };
  componentDidMount() {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log(response.data);
      this.setState({ beers: response.data });
    });
  }
  handleChange = (e) => {
    const filteredBeerInput = e.target.value;
    console.log('Hello from onchange', filteredBeerInput);
    Axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${filteredBeerInput}`
    ).then((response) => {
      console.log(response.data);
      this.setState({ beers: response.data });
    });
  };
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Header />
        <h2 className="display-5 py-3 my-3">All the beers!</h2>
        <div className="input-group py-3 my-3">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="form-control"
          onChange={this.handleChange}
        />
        </div>
        <ul className="list-group">
          {this.state.beers.map((beer, i) => {
            return (
              <li
                key={i}
                className="list-group-item d-flex align-items-center"
                style={{ height: '180px' }}
              >
                <NavLink to={`/beers/${beer._id}`}>
                  <img
                    className="img-fluid p-2 m-1"
                    src={beer.image_url}
                    alt={beer.name}
                    style={{ width: '50px' }}
                  />
                </NavLink>
                <div className="ml-3 pl-3">
                  <h4 className="display-5 font-weight-normal ">
                    <NavLink className="text-dark" to={`/beers/${beer._id}`}>
                      {' '}
                      {beer.name}
                    </NavLink>
                  </h4>
                  <h5 className="font-weight-normal text-muted">
                    {beer.tagline}
                  </h5>
                  <small>
            <span className="font-weight-bold">Created by: </span><span>{beer.contributed_by}</span>
                  </small>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllBeers;
