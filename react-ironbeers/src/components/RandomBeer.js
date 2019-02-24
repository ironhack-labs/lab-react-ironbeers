import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenutation_level: "",
      contributed_by: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://ironbeer-api.herokuapp.com/beers/random")
      .then(response => {
        // console.log(response);
        this.setState({ beer: response.data[0] });
      });
  }

  render() {
    return (
      <div>
        <img src={this.state.beer.image_url} width={60} height={150} alt="" />
        <p>{this.state.beer.tagline}</p>
        <p>Created by: {this.state.beer.name}</p>
      </div>
    );
  }
}

export default RandomBeer;
