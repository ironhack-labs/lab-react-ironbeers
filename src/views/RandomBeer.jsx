import React, { Component } from 'react';
// import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import apiHandler from '../api/apiHandler';
import Header from './../components/Header';

export class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    apiHandler
      .getRandomBeer()
      .then((res) => {
        console.log(res);
        this.setState({ beer: res.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.beerId !== prevProps.match.params.beerId)
      apiHandler
        .getRandomBeer()
        .then((apiRes) => {
          this.setState({ beer: apiRes.data });
        })
        .catch((apiError) => console.log(apiError));
  }

  render() {
    if (this.state.beer === null) return <div>Loading...</div>;
    return (
      <div className="blue-background">
        <div>
          <Header />
        </div>
        <div className="random-container">
          <div className="img-container">
            <img
              className="img-randombeer"
              src={this.state.beer.image_url}
              alt="beer again"
            />
          </div>
          <div className="infos-container">
            <h1>All you ever wanted to know about a beer...</h1>
            <h2>{this.state.beer.name}</h2>
            <p className="tagline">
              <span>PUNCHLINE :</span> {this.state.beer.tagline}
            </p>
            <p>
              <span>FIRST BREW : </span> {this.state.beer.first_brewed}
            </p>
            <p>
              <span>ATTENUATION LEVEL :</span>{' '}
              {this.state.beer.attenuation_level}
            </p>
            <p className="desc">
              <span>DESCRIPTION :</span> {this.state.beer.description}
            </p>
            <p>
              <span>CONTRIBUTOR :</span> {this.state.beer.contributed_by}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
