import React from 'react';
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Beers = props => {
  //console.log(props)   
  const allBeers = [...props.beers];
  const cardBeers = allBeers.length > 1 ? allBeers.map((beer, _id) => (
    <div key={beer._id}>
    <img src={beer.image_url} alt=""></img>  
    <p>{beer.name}</p>
    <p>{beer.tagline}</p>
    <p>Created by: {beer.contributed_by}</p>
    <p><Link to={`/beers/${beer._id}`}>
      Know more
    </Link></p>
    </div>
  )) : null 
  return (
    <div>
      <Navbar />
      {cardBeers}
    </div>
  )
}

export default Beers
