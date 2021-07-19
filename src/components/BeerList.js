import React, { useState, useEffect } from 'react';
import header from '../assets/header.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BeerList(props) {


  //Showing a loading screen...
   const {beers} = props
  if (!beers) {
    return <p>Beers are loooaaaa-ding...</p>;
  }

  return (
    <div>
    <Link to ="/">
   <img src={header} alt="beerlist"/>
   </Link>
      {beers.map((beer, i) => {
        return (
          <Link to={`/beers/${beer._id}`}>
            <div key={i}>
              <img src={beer.image_url}></img>
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default BeerList;
