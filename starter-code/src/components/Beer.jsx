import React, { Component } from "react";
import { load } from "./../services/beers-api";
import NavigationBar from "./NavigationBar";

export default class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: []
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    load(id)
      .then(beer => {
        this.setState({
          beer
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <img
          src={this.state.beer.image_url}
          alt="img"
          width="30px"
          height="auto"
        />
        <ul>
          <li>{this.state.beer.name}</li>
          <li>{this.state.beer.tagline}</li>
          <li>{this.state.beer.first_brewed}</li>
          <li>{this.state.beer.attenuation_level}</li>
          <li>{this.state.beer.description}</li>
          <li>{this.state.beer.contributed_by}</li>
        </ul>
      </div>
    );
  }
}
