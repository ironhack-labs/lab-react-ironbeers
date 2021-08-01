import React, { Component } from "react";
import Axios from "axios";

class BeerDetail extends Component {
  state = {
    beer1: {},
    ready: false
  };
  componentDidMount() {
    Axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
    ).then(singleBeer => {
      this.setState({
        beer1: singleBeer,
        ready: true
      });
    });
  }
  render() {
    console.log(this.state.beer1);
    return (
      <div>
        {this.state.ready ? (
          <li>
            <img src={this.state.beer1.data.image_url} alt= "beer"/>
            <br />
            {this.state.beer1.data.name}
            <br />
            {this.state.beer1.data.tagline}
            <br />
            {this.state.beer1.data.first_brewed}
            <br />
            {this.state.beer1.data.attenuation_level}
            <br />
            {this.state.beer1.data.description}
            <br />
            {this.state.beer1.data.contributed_by}
            <br />
          </li>
        ) : (
          "Loading"
        )}
      </div>
    );
  }
}

export default BeerDetail;
