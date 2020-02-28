import React from "react";
import { Link } from "react-router-dom";
import './Beers.css'
import Nav from '../Nav/Nav.js';


export default class Beers extends React.Component {


  render() {
    return (
      <div className="Beers">
        <div>
          <Link to={"/Beers/" + this.props._id}><img src={this.props.image_url} alt=""></img></Link>
          <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.tagline}</p>
            <p>Description: {this.props.description}</p>
            <p>Created by: {this.props.name}</p>
          </div>
        </div>
      </div>
    )
  }
}


