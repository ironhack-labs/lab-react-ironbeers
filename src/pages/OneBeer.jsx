import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import beerApi from '../api/beerApi';

class OneBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    beerApi
      .getOne(this.props.match.params.id)
      .then((apiResponse) => {
        this.setState({ beer: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.beer && (
          <div className="one-beer">
            <img
              className="one-beer-img"
              src={this.state.beer.image_url}
              alt=""
            />
            <div className="one-beer-data">
              <div className="first-data">
                <div className="first-data-left">
                  <h3 className="beer-name">{this.state.beer.name}</h3>
                  <p className="tagline">{this.state.beer.tagline}</p>
                </div>
                <div className="first-data-right">
                  <p className="attenuation">
                    {this.state.beer.attenuation_level}
                  </p>
                  <p className="brewed">
                    <b>{this.state.beer.first_brewed}</b>
                  </p>
                </div>
              </div>
              <p className="beer-description">{this.state.beer.description}</p>
              <p className="tagline">{this.state.beer.contributed_by}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default OneBeer;
