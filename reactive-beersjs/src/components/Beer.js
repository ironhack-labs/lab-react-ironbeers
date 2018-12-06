import React, { Component } from 'react'
import './Beer.css';
import Header from './Header'
import { Link, Switch, Route } from "react-router-dom";

export default class Beer extends Component {
  render() {
    let singleBeer = this.props.elem
    return (
      <div>
      
      <div className="beercontainer">
        <div className="imagecontainer">
        <img src={singleBeer.image_url} alt=""/>
        </div>
        <div className="infocontainer">
        <h2>{singleBeer.name}</h2>
        <Link className="" to={`/beers/${singleBeer._id}`}><h2>{singleBeer.name}</h2></Link>
        <h3>{singleBeer.tagline}</h3>
        <p>{singleBeer.contributed_by}</p>
        </div>
      </div>
      </div>
    )
  }
}
