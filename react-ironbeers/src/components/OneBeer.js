import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class OneBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: []
    };
  }

  id = this.props.match.params.beerId;

  componentDidMount() {
    axios
      .get("https://ironbeer-api.herokuapp.com/beers/single/" + this.id)
      .then(response => {
        console.log(response);
        this.setState({ beer: response.data });
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

export default OneBeer;
