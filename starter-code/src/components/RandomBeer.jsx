import React from "react";
import Navigation from "./Navigation";
import axios from "axios";

export default class RandomBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      randomBeer: {}
    };
  }

  componentDidMount(){
      axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(randomBeer => {
        this.setState({
            ...this.state,
            randomBeer : randomBeer.data
        })
      })
  }

  render() {
    return (
      <div>
        <Navigation></Navigation>
        <div className="beer-detail section">
          <div className="container">
            <img src={this.state.randomBeer.image_url} alt={this.state.randomBeer.name} />

            <div
              className="is-flex"
              style={{ justifyContent: "space-between" }}
            >
              <h1 className="title is-3">{this.state.randomBeer.name}</h1>
              <span className="title is-3 has-text-grey-light">
                {this.state.randomBeer.attenuation_level}
              </span>
            </div>

            <div
              className="is-flex"
              style={{ justifyContent: "space-between" }}
            >
              <h2 className="subtitle has-text-grey has-text-weight-semibold">
                {this.state.randomBeer.tagline}
              </h2>
              <span>{this.state.randomBeer.first_brewed}</span>
            </div>
            <div className="has-text-left">
              <p className="is-size-5" style={{ marginBottom: "24px" }}>
                {" "}
                {this.state.randomBeer.description}
              </p>
              <p className="subtitle has-text-grey has-text-weight-semibold is-size-7 is-uppercase">
                Created by: {this.state.randomBeer.contributed_by}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
