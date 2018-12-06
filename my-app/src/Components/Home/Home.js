import React, { Component } from "react";
import { Link } from 'react-router-dom';




export default class Home extends Component {
  render() {
    return (
      <div>
         <Link to="/Beers"><h1>All Beers</h1></Link>
         <Link to="/RandomBeers"><h1>RandomBeer</h1></Link>
         <Link to="/NewBeer"><h1>NewBeer</h1></Link>

      </div>
    );
  }
}
