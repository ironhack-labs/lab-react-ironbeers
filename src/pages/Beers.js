import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";     // <== IMPORT useEffect
import axios from "axios";                       // <== IMPORT axios
import { Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

function BeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {                                // <== ADD THE EFFECT
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data)
      });
    
  }, [] );  // <- [] means: Run the effect only once, after initial render

  
  return (
    <div>
     <Navbar />

      <h3>List of Beers</h3>

      {beers.map((beer) => (
        <div>
        <Link to={"/beers/" + beer.id}>
          <img src={beer.image_url} alt="" />
        </Link>
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </div>
      ))}

    
      
    </div>
  );
}

export default BeersPage;
