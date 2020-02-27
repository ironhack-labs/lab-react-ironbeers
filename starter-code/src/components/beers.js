//import React from "react";
import React  from 'react';
import Home from "./Home";
import { Link } from 'react-router-dom';

export default class Beers extends React.Component{
      render() {
    return (
        <div>
        <nav className="navbar">
        <Link to={"/"}> <button>🍻</button></Link>
        </nav>
     
      <div>
        <h1>All Beers</h1>
        {/* <h1>{this.props.movie.year}</h1>
        <h1>{this.props.movie.director}</h1> */}
      </div>
      </div>
    );
  }
}
