import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Beer extends Component {
  render() {
    console.log(this.props.beer)
    return (
      <Link to={`/beer/${this.props.beer.id}`} >
        <div className="beer">
          <img src={this.props.beer.image_url} alt="" className="beer-image"/>
          <div className="">
            <h5 className="">{this.props.beer.name}</h5>
            <p className="">{this.props.beer.tagline}</p>
            <sub>{this.props.beer.contributed_by}</sub>
          </div>
        </div>
      </Link>
    )
  }
}



// image
// name
// tagline
// contributed_by
// Also, add the link to check the details of each beer. The link should navigate to /beers/:beerId.