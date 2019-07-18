import React, { Component } from "react";
import NavBar from "./NavBar";
import Beer from "./Beer";

export default class AllBeers extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <h1>Allbeers</h1>

        {this.props.beer.map((beer2, idx) => (
          <div>
            <img src={beer2.image_url} alt="{beer2.name}" width="40" />
            <h6>{beer2.name}</h6>
            {/* <h5>{beer2.tagline}</h5> */}
            {/* <h4>{beer2.description}</h4> */}
          </div>
        ))}
      </section>
    );
  }
}
