import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {getAllBeers} from '../services/calls'


const Beers = () => {
  const [Beers, setBeers] = useState([])

  useEffect(() =>{
    allTheBeers()
  })

  const allTheBeers = async() => {
    const allBeers = await getAllBeers()
    setBeers(allBeers)
  }

  return (
    <>
      <Header />
      <h1>All Beers </h1>
      {Beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url}  width="125px" alt="" />
          <div>
            <h3> {beer.name} </h3>
            <p> {beer.tagline} </p>
            <p> {beer.brewers_tip} </p>
            <Link to={`/beers/${beer._id}`} > Details</Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Beers;
