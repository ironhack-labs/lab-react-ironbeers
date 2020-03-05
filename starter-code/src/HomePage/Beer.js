import React, { Component } from "react";
import axios from "axios";

class Beer extends Component {
  state = {
    beer: {}
  };

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          beer: response.data
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="single-beer-container">
          <div>
            <img
              className="beer-image-detail"
              src={this.state.beer.image_url}
              alt=""
            />
          </div>
          <div className="beer-info-detail">
            <div className="headline-container">
              <h4>{this.state.beer.name}</h4>
              <h4>{this.state.beer.attenuation_level}</h4>
            </div>

            <div className="subheadline-container">
              <h5>{this.state.beer.tagline}</h5>
              <h5>{this.state.beer.first_brewed}</h5>
            </div>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Beer;
