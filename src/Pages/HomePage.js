import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";  
import Navbar from "../components/Navbar";
import BeersList from "../assets/beers.png"
import BeersRandom from "../assets/random-beer.png"
import BeersNew from "../assets/new-beer.png"



function HomePage() {

    return (
        
      <div>

        <NavLink to="/BeerList"><a href="" className="BeersList"><img src={BeersList} alt="home gif" className="BeersList" /></a> </NavLink>
        <h1>All Beers</h1>
        <p>If you want to see a list of all the beers we have click the picture above.</p>

        <NavLink to="/RandomBeer"><a href="" className="BeersRandom"><img src={BeersRandom} alt="home gif" className="BeersRandom" /></a> </NavLink>
        <h1>Random Beer</h1>
        <p>If you want to see a random beer please click the picture above.</p>

        <NavLink to="/NewBeer"><a href="" className="BeersNew"><img src={BeersNew} alt="home gif" className="BeersNew" /></a> </NavLink>
        <h1>New Beer</h1>
        <p>If you want to new beer not on the list please click the picture above.</p>

      </div>
    );
  }
   
  export default HomePage;