import React from "react";
import { Link } from "react-router-dom";   
import { useState, useEffect } from "react";     // <== IMPORT useEffect
import axios from "axios"; 
import '../App.css';                  // <== IMPORT axios
import Home from '../components/Navbar'
function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {                                        // <== ADD THE EFFECT
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data)
        setBeers(response.data)
      });
    
  }, [] );       // <--  [] means: Run the effect only once, after initial render

  return (
    <div>
    <Home />
      <h3>List of Beers</h3>

      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} style= {{width: 50 }} alt=" " />
          <Link to={`/singlebeer/${beer._id}`}>{beer.name}</Link>
          <h5>{beer.tagline}</h5>
          <p>{beer.contributed_by}</p>
        </div>
      ))}
      
    </div>
  );
}
export default Beers