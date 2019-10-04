import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

export default class BeerDetail extends Component {
  constructor() {
    super();
    this.state = {
      beer: {}
    };
  }
  componentDidMount() {
    let id = this.props.match.params.beerId
    let URL = `http://localhost:5000/single/${id}`;
    axios.get(URL).then(response => {
      this.setState({ beer: response.data });
    });
  }
  render() {
    return (
      <div>
        <Header />
        <img className="image-detail" src={this.state.beer.image_url} alt={this.state.beer.name} />
        <h1>{this.state.beer.name}</h1>
        <h4>{this.state.beer.tagline}</h4>
        <p>Contributed by: {this.state.beer.contributed_by}</p>
      </div>
    );
  }
}