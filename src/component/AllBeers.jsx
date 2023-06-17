import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeers() {
  const [everyBeer, setEveryBeer] = useState([]);
  const fetchBeers = async () => {
    const { data } = await axios("https://ih-beers-api2.herokuapp.com/beers");
    setEveryBeer(data);
  };
  useEffect(() => {
    fetchBeers();
  }, []);
  

  return (
    <div>
      {everyBeer.map((oneBeer) => {
        return (
          <div className="">
            <Link className="beer-link" to={`/beerDetail/${oneBeer._id}`}>
            <img  src={oneBeer.image_url} alt="beer bottle"  />
            <div className="side-text" style={{ height: "200px"}}>
              <h2>{oneBeer.name}</h2>
              <h3>{oneBeer.tagline}</h3>
              <h5>Created by: {oneBeer.contributed_by}</h5>
              
            </div>
            </Link>
          </div>
        );
       

      })}
    </div>
  );
}

export default AllBeers;
