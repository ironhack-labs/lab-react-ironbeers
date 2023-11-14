import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom"
import "./HomePage.css"
import Navbar from "../components/Navbar";


function HomePage() {
    return(
        <div className="homepage-space">
      <h1>Welcome to Beer World!</h1>
      <p>Explore our beer collection and more.</p>
      <nav>
      <div className="beer-image">
          <NavLink to="/beers">
            <img src="src\assets\beers.png" /></NavLink>
          <h2>All Beers</h2>
          <p className="description-text">Discover our full beer selection.</p>
        </div>
        <div className="beer-image">
          <NavLink to="/random-beer">
            <img src="src\assets\random-beer.png" /></NavLink>
          <h2>Random Beer</h2>
          <p className="description-text">Get surprised with a random beer.</p>
        </div>
        <div className="beer-image">
          <NavLink to="/new-beer">
            <img src="src\assets\new-beer.png" /></NavLink>
          <h2>New Beer</h2>
          <p className="description-text">Explore our latest beer additions.</p>
        </div>
      </nav>
    </div>
    )
}

export default HomePage;
