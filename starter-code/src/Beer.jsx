import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: [],
      id: this.props.match.params.id
    };
    this.getBeers = this.getBeers.bind(this);
  }
  getBeers() {
    Axios.get(`https://ih-beers-api.herokuapp.com/beers/${this.state.id}`)
      .then(result => {
        this.setState({ beer: result.data });
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.getBeers();
  }
  // first_brewed
  // attenuation_level
  // description
  // contributed_by

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br />
        {typeof this.state.beer.name !== "undefined" ? (
          <div>
            <img src={this.state.beer.image_url} />
            <h2>{this.state.beer.name}</h2>
            <h3>{this.state.beer.tagline}</h3>
            <h3>{this.state.beer.first_brewed}</h3>
            <h3>{this.state.beer.attenuation_level}</h3>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
            <hr />
          </div>
        ) : null}
      </div>
    );
  }
}
