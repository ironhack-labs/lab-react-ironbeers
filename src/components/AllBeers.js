import React from 'react';
import Header from './Header';
import { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';

function AllBeers(props) {
  //console.log(props);
  let [listBeers, setListBeers] = useState([]);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((res) => {
      setListBeers(res.data);
      console.log(res.data);
    });
  }, []);

  const ShowBeers = () => {
    return listBeers.map((beer) => {
      return (
        <Link to={`/beers/${beer._id}`}>
          <div className="AllBeers">
            <img src={beer.image_url} style={{height: '20vh'}}/>
            <div>
              <h3>{beer.name}</h3>
              <h4>{beer.tagline}</h4>
              <h5>{beer.contributed_by}</h5>
            </div>
          </div>
          <hr></hr>
        </Link>
         // <Link to={`/beers/${beer._id}`} key={beer.name}> {beer.name} </Link> 
      );
    });
  };

  return (
    <div>
      <Header />
      <h1>ALL BEERS IS WORKING</h1>
      <ShowBeers />
      {/* <DebugBeer /> */}
    </div>
  );
}

export default AllBeers;
