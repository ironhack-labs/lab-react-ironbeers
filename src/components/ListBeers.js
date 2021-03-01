import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        console.log('log from axios response:', res);
        this.setState({
          beers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <header>
          <Link to={'/'}>Back to Home</Link>
        </header>
        {this.state.beers.map((beer) => {
          return (
            <div className="beer-container" key={beer._id}>
              <img className="beer-img" src={beer.image_url} alt="beer" />
              <div>
                <h2>
                  <Link to={`/beers/${beer._id}`}>{beer.name} </Link>
                </h2>
                <h3>{beer.tagline}</h3>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListBeers;
