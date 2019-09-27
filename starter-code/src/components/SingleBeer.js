import React, { Component } from "react";
import axios from "axios";

export default class SingleBeer extends Component {
  state = {
    singleBeer: []
  };

  getSingleBeer = () => {
    axios
      .get(
        `https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.beerId}`
      )
      .then(response => {
        const singleBeer = response.data;
        // console.log(singleBeer);
        this.setState({
          singleBeer: singleBeer
        });
      });
  };

  componentDidMount() {
    this.getSingleBeer();
  }

  render() {
    return (
      <div>
        <div className="singBeer-div">
          <img
            className="beer-img"
            src={this.state.singleBeer.image_url}
            alt={this.state.singleBeer.name}
          />
          <div>
            <h1>{this.state.singleBeer.name}</h1>
            <h2>{this.state.singleBeer.tagline}</h2>
            <p>{this.state.singleBeer.first_brewed}</p>
            <p>{this.state.singleBeer.attenuation_level}</p>
            <p>{this.state.singleBeer.description}</p>
            <p>{this.state.singleBeer.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}
