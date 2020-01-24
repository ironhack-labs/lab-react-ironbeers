import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Beers extends Component{

  changeState = (event) => {
    this.props.search(event.target.value);
    console.log(event.target.value);
  }

  render(){
    return(
      <div>
        <h1>All Beers</h1>
        <input placeholder="Search" onChange={ this.changeState }></input>
        <ul>{
          this.props.beer && this.props.beer.map( (beer, index) => {
            return <Link to={`/onebeer/${ beer._id }`} key={ index }>
              { beer.name }
            </Link>
          } )
        }</ul>
      </div>
    );
  }
}

export default Beers;