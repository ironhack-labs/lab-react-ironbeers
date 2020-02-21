import React from "react";
import { Link, Navlink, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/beers"> All Beers</Link>
      <Link to="/beers/random"> Random Beer</Link>
      <Link to="/newBeer"> New Beers</Link>
    </div>
  );
};

export default Home;
