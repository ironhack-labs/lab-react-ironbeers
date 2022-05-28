import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import RandoomBeer from "./RandoomBeer";

function Home() {
  return (
      
    <div className="homepage">
      <h1>Welcome to the home page</h1>
      <div className="homepage-links">
        <Link to="/beers">All beers</Link>
        <p>Lorem ipsum dolor sit </p>
        <br />
        <Link to="/create-beers">New beer</Link>
        <p>Lorem ipsum dolor sit </p>
        <br />
        <Link to="/random-beers">Random beer</Link>
        <p>Lorem ipsum dolor sit </p>
        <br />
      </div>
    </div>
  );
}

export default Home;