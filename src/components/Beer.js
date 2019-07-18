import React, { Component } from "react";
import NavBar from "./NavBar";

export default class Beer extends Component {
  render() {
    return (
      <section>
          <NavBar />
        <h1>Random Beer</h1>

        <div>
          <img
            src={this.props.beer.image_url}
            alt="{this.props.beer.name}"
            width="50"
          />
          <h1>{this.props.beer.name}</h1>
          <h5>{this.props.beer.tagline}</h5>
          <h2>{this.props.beer.description}</h2>
        </div>
      </section>
    );
  }
}
