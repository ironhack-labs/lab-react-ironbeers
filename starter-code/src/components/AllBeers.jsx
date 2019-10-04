import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class AllBeers extends Component {

  transformName(name) {
    const regex= /^\w+\s\w+/
    return name.match(regex)
  }


  render() {
    return (
      <div>

        {this.props.beers.map((beer, idx)=> {
          return (
            <NavLink to={`/single/${beer._id}`} key={idx}>
              <img src={beer.image_url} alt="beer bottle"/>
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <h4>Created by: </h4> <p>{this.transformName(beer.contributed_by)}</p>
            </NavLink>
          )
        })}
      </div>
    )
  }
}
