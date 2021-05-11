import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export default class AllBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log(response.data[0]);
      this.setState({ beers: response.data });
    });
  }
  render() {
    return (
      <div className="columns">
        <div className="column">
          {this.state.beers.map((beer) => {
            return (
              <Link to={`beers/${beer._id}`} key={beer._id}>
                <div className="columns mt-3">
                  <div className="column">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image image_cst">
                          <img src={beer.image_url} alt="" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">{beer.name}</p>
                        <p className="subtitle is-6">{beer.tagline}</p>
                        <p className="is-small">
                          <strong>Created by: </strong>
                          {beer.contributed_by}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
