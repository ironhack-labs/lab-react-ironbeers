import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Link to={`/beers`}>
          <img src='/images/beers.png' alt="beers"/>
          <h1>All Beers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus erat quis ultrices accumsan. In egestas orci non turpis dignissim pretium. Nulla facilisi. Suspendisse ullamcorper justo eu quam imperdiet hendrerit. Vestibulum ullamcorper nibh nec dictum ultricies. Suspendisse tincidunt efficitur malesuada. Nullam nulla enim, venenatis et lorem maximus, commodo pretium nisl. Ut sed volutpat leo.</p>
        </Link>
        <Link to={`/random-beer`}>
          <img src='/images/random-beer.png' alt="random-beer"/>
          <h1>Random Beer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus erat quis ultrices accumsan. In egestas orci non turpis dignissim pretium. Nulla facilisi. Suspendisse ullamcorper justo eu quam imperdiet hendrerit. Vestibulum ullamcorper nibh nec dictum ultricies. Suspendisse tincidunt efficitur malesuada. Nullam nulla enim, venenatis et lorem maximus, commodo pretium nisl. Ut sed volutpat leo.</p>
        </Link>
        <Link to={`/new-beer`}>
          <img src='/images/new-beer.png' alt="new-beer"/>
          <h1>New Beer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus erat quis ultrices accumsan. In egestas orci non turpis dignissim pretium. Nulla facilisi. Suspendisse ullamcorper justo eu quam imperdiet hendrerit. Vestibulum ullamcorper nibh nec dictum ultricies. Suspendisse tincidunt efficitur malesuada. Nullam nulla enim, venenatis et lorem maximus, commodo pretium nisl. Ut sed volutpat leo.</p>
        </Link>
      </div>
    );
  }
}
