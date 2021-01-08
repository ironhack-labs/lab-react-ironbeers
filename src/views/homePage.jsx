import React from "react";

import { NavLink } from "react-router-dom";

const Home = (props) => {
    console.log(props)
  return (
    <div className="screen" >
      <nav style={{display:"flex", flexDirection: "column"}}>
      <NavLink exact to="/beers" className="link">
        <img src="./images/beers.png"></img>
        <h2>All Beers</h2>
        <p>Discover all our beers.</p>
      </NavLink>
      <NavLink exact to="/random-beer" className="link">
      <img src="./images/random-beer.png"></img>
        <h2>Random Beers</h2>
        <p>Pick a random beer.</p>
      </NavLink>
      <NavLink exact to="/new-beer" className="link">
      <img src="./images/new-beer.png"></img>
        <h2>New Beers</h2>
        <p>Create your own beer.</p>
      </NavLink>
    </nav>
    </div>
  );
};

export default Home;