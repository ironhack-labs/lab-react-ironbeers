import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function AllBeers() {
  const [allBeers, setAllBeers] = useState();

  useEffect(() => {
    const getBeers = async () => {
      const { data } = await axios("https://ih-beers-api2.herokuapp.com/beers");
      setAllBeers(data);
    };
    getBeers();
  },[]);
  console.log("beers", allBeers);

  if (!allBeers) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <div>
      <header>
        <Link to={"/"}>Back to Home</Link>
      </header>{" "}

     
        {allBeers.map((oneBeer) =>{
          return (
          <div>
          <img src={oneBeer.image_url} alt="beer" />
          <h1>{oneBeer.name}</h1>
          <p>{oneBeer.tagline}</p>
          <p>{oneBeer.contributed_by}</p>
          <Link to={`/beers/${oneBeer._id}`}>Click for more details </Link>
          </div>
          )
        })}
     

    </div>
    </>
  );
}

export default AllBeers;
