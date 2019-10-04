import React, { Component } from "react";
import axios from "axios";

class beerdetails extends Component {
  state = {
    beers: {}
  };
  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then(response => {
      this.setState({ beers: response.data[this.props.match.params.id - 1] });
    });
  }

  render() {
      
    return (
      <div className="ml-auto mr-auto mt-4 text-center">
        <div className="mx-auto text-center">
          <img
            className="mx-auto"
            width="64px"
            alt={this.state.beers.name}
            src={this.state.beers.image_url}
          />
        </div>
        <div className="container  detail-row">
          <div className="row">
            <div className="col-8 text-left">
              <h2>{this.state.beers.name}</h2>
              <p>{this.state.beers.tagline}</p>
            </div>
            <div className="col-4 mt-2">

              <p>{this.state.beers.attenuation_level}</p>
              <p>{this.state.beers.first_brewed}</p>
            </div>
            <div>
                <p className="text-left">{this.state.beers.description}</p>
                <small>{this.state.beers.contributed_by}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default beerdetails;
