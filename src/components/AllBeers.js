import React from 'react';
import Header from './Header';
import { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';

function AllBeers(props) {
  let [listBeers, setListBeers] = useState([]);

  useEffect( () => {
    let res = axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    console.log(res)
    console.log("THIS SHOULD PRINT")
    setListBeers(res.data)
}, [props])

 const ShowBeers = () => {
    return listBeers.map(eachBeer => {
        return <Link to={`/beers/${eachBeer.name}`} key={eachBeer.name}>{eachBeer.name}</Link >
      }
      )
 }

 const DebugBeer = () => {
     console.log(listBeers)
     return null
 }

  return (
    <div>
      {Header()}
      <h1>ALL BEERS IS WORKING</h1>
      {/* <ShowBeers/> */}
      {/* <DebugBeer /> */}
    </div>
  );
}

export default AllBeers;
