import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(response => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    return (
      <div className="Beer">
      <Link to='/'>Back</Link>
        {this.state.beers.map((beer, idx) => {
           return <div key={idx}>
          <img src={beer.image_url} alt=""></img>
          <Link to ={`/beers/${beer._id}`}><h1>{beer.name}</h1></Link>
          <span>{beer.tagline}</span>
          <p>Created by: {beer.contributed_by}</p>
          </div>
        })}
      </div>
    );
  }
}
export default Beers;

// <div>

//   <Link to='/'>Back</Link>
//     <h2>List all beers</h2>

// </div>

//cada nombre de cerveza es un link que te lleva al detalle de cerveza con el id y usando params.
