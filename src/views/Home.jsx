import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <p><Link to={`/beers/`}>Check out our beers</Link></p>
        <p><Link to={`/beers/random-beer`}>See a random beer</Link></p>
        <p><Link to={`/beers/new-beer`}>Find a new beer</Link></p>
    </div>
  );
};

export default Home;
