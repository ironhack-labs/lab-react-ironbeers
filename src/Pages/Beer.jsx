import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Beer = (props) => {
    const [beers,SetBeer]= useState([])

    useEffect(() => {
      axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
          console.log(response);
          SetBeer(response.data);
        })
        .catch((e) => console.log(e));
    }, []);

  return (
    <div>
      <h1>HOOHOH</h1>
      <Link to="/"><i class="fas fa-home"></i>Home</Link>
      <ul>
      {beers.map((beer)=>{
        return(
          <div>
          <li>
          <img style={{width:"80px"}}src={beer.image_url}/>
            <h2>{beer.name}</h2> <h3>{beer.tagline}</h3> Created by:{beer.name}
          </li>
          <Link to={beer._id}>More info</Link>
          </div>
          )
      })}
</ul>
    </div>
  );
};

export default Beer;
