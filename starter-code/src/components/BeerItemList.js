import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class BeerItemList extends Component {
  render() {
    const { beer } = this.props
    return (
      <div className="beerListContainer">
        <img src={beer.image_url} alt=""/>
          <div className="beerListInfo">
            <Link to={`/beers/${beer._id}`}>
              <p className="title">{beer.name}</p>
            </Link>
            <p className="subtitle">{beer.tagline}</p>
            <p className="createdBy"><strong>Created By: </strong>{beer.contributed_by}</p>
          </div>
      </div>
    )
  }
}
