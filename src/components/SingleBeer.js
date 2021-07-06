import React from 'react';
import Header from './Header';
import { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';

function SingleBeer(props) {
  let [beer, setBeer] = useState([]);
  console.log(props);

  useEffect(() => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${props.match.params.dynamicId}`
      )
      .then((res) => {
        setBeer(res.data);
        console.log(res.data);
      });
  }, []);

  const ShowBeer = () => {
    return (
      <div>
        <img src={beer.image_url} style={{ height: '30vh', paddingTop: '3em' }} />
        <div>
          <div className="beerName">
            <div style={{fontSize:'30px', textAlign:'left'}}>{beer.name}</div>
            <div style={{fontSize:'25px', color:'gray'}}>{beer.attenuation_level}</div>
          </div>
          <div className="beerName">
            <div style={{color:'gray'}}>{beer.tagline}</div>
            <div style={{fontWeight:'bolder'}}>{beer.first_brewed}</div>
          </div>
          <div>{beer.description}</div>
          <div style={{padding: '10px 0', textAlign:'left', color:'gray'}}>{beer.contributed_by}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      {/* <h1>SINGLE BEER WORKING</h1> */}
      <ShowBeer />
    </div>
  );
}

export default SingleBeer;
