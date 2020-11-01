import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function AllBeers() {
  const [beers, setBeers] = useState();

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      console.log('from app', res.data);
      setBeers(res.data);
    });
  },[]);

if(!beers) return null
  return (
    <>
    

      {beers.map((beer ,index) => {
        return (
          <Link to={`/beersDetail/${beer._id}`}>
            <div style={{ border: '2px solid black' }}>
              <img
                alt=""
                style={{ width: '35px' }}
                src={beer.image_url}
               
              ></img>
              <strong key={index}>{beer.name}</strong>
              <br />
              {beer.tagline}
            </div>
          </Link>
        );
      })}
    </>
  );
}
