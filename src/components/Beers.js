import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import { Link } from 'react-router-dom';

import Navbar from './Navbar';

const Beers = (props) => {
  let [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((data) => {
      setBeers(data);
    });
  }, []);

  // console.log(props.test)
  // console.log(beers.data);

  let allBeers;
  if (beers.data) {
    allBeers = beers.data.map((beer) => (
      <Link to={`/beers/${beer._id}`} key={beer._id} className="beersCard">
        <div>
          <img src={beer.image_url} alt="" />
        </div>
        <div className="beersDetails">
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
        </div>
      </Link>
    ));
  } else {
    allBeers = null;
  }

  //   <p>
  //   <b>Created by:</b>{' '}
  //   {beer.contributed_by.replace(/ *\<[^)]*\> */g, '')}
  //    </p>

  return (
    <>
      <Navbar />
      {beers ? allBeers : null}
    </>
  );
};

export default Beers;
