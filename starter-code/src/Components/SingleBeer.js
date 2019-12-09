import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

export class SingleBeer extends Component {
  state = {
    beer: {}
  };

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(res => {
      // console.log(res.data);
      let id = this.props.match.params.id;

      this.setState({
        beer: res.data[id]
      });
    });
  }
  render() {
    return (
      <div>
        <Link to="/">
          <img
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt="Homelink"
          />
        </Link>
        <div>
          <img
            src={this.state.beer.image_url}
            alt="beerimage"
            className="beerImg"
          />
          <h1>{this.state.beer.name}</h1>
          <h3 style={{ color: "grey" }}>{this.state.beer.tagline}</h3>
          <p>{this.state.beer.first_brewed}</p>
          <p>{this.state.beer.attenuation_level}</p>
          <p>{this.state.beer.description}</p>
          <p>{this.state.beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
