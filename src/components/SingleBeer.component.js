import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';

export default class SingleBeer extends Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({
          beer: response.data,
        });
      });
  }
  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="card ">
            <div className="card-image">
              <figure className="image image_single">
                <img src={this.state.beer.image_url} alt="" />
              </figure>
            </div>

            <div className="card-content has-text-centered">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{this.state.beer.name}</p>
                  <p className="subtitle is-6">{this.state.beer.tagline}</p>
                  <p className="subtitle is-6">
                    {this.state.beer.first_brewed}
                  </p>
                  <p className="subtitle is-6">
                    {this.state.beer.attentual_level}
                  </p>
                  <p className="subtitle is-6">
                    {this.state.beer.contributed_by}
                  </p>
                </div>
              </div>

              <div className="content">{this.state.beer.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
