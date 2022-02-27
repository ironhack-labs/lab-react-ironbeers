import React from 'react';
import { useState } from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListBeers(props) {




  return (
    <div>
    <h3>This is the beer list</h3>
    {props.data.map((element) => {
      return (
        <div key={element._id} className="beerList">
         <p> {element.name}</p>  <br />
         <p> {element.tagline}</p>  <br/>
         <p> {element.contributed_by}</p>
         <img width='60px' src={element.image_url}/>
          <Link to={`/beers/${element._id}`}>More details</Link>
        </div>
      );
    })}
    </div>
  )
}



