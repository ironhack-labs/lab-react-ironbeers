import React, { Component } from 'react'
import { Link } from "react-router-dom";
import EachBeer from "./EachBeer/EachBeer";


export default class Beers extends Component {
  constructor(props) {
    super();

    this.state = {
      beers: props.beers
    };
  }
  render() {
    return (
      <div>
        <h1>All Beers</h1>
        <ul className="list">
          {this.props.beers.map((beer) => {return <li key={beer._id}><Link to={`/${beer._id}`}><EachBeer data={beer}></EachBeer></Link></li>})}
        </ul>
      </div>
    )
}
}

