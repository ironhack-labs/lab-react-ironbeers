import React, { Component } from 'react';
import './Beers.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beers: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const beers = this.state.beers;
    if (!beers) return <h1>Loading ...</h1>;

    return (
      <>
        {beers.map((beer) => {
          return (
            <Link key={beer._id} to={`/beers/${beer._id}`}>
              <div className="listing">
                <div className="img-box">
                  <img src={beer.image_url} alt="" />
                </div>
                <div className="detail">
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <p>
                    <strong>Created by: </strong>
                    {typeof beer.contributed_by === 'string'
                      ? beer.contributed_by.split('<')[0].trim()
                      : null}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </>
    );
  }
}
