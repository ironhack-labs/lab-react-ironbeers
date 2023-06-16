import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AllBeers() {
  const [allBeers, setAllBeers] = useState();

  useEffect(() => {
    const getBeers = async () => {
      const { data } = await axios(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setAllBeers(data);
      
     
    };
    getBeers();
    
  }, []);
  console.log("beers", allBeers);
  if (!allBeers) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <header>
        <Link to={"/"}>Back to Home</Link>
      </header>
      {allBeers.map((beer) => {
        return (
          <div>
            <img src={beer.image_url} alt={beer.name} className="allBeerDiv" />
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <h4>Created by: {beer.contributed_by}</h4>
            <Link to={`/beer-details/${beer._id}`}>
              <button>View Details</button>
              
            </Link>
            <hr/>

          </div>
      )})}
    </div>
  );
}

export default AllBeers;
