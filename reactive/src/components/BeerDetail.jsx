import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(response => {
      const beerId = this.props.match.params.beerId;
      const beer = response.data.filter(beer => {
        return beer._id === beerId;
      })[0];
      this.setState({ beer: beer });
    });
  }
  render() {
    return (
      <div className="Beer">
        <Link to="/">Back</Link>
        <div>
          <img src={this.state.beer.image_url} alt="" />
          <h1>{this.state.beer.name}</h1>
          <span>{this.state.beer.tagline}</span>
          <p>Created by: {this.state.beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default BeerDetail;

//   image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by
