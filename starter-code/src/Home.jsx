import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div>
      <Link to="/beers">Beers</Link>
      <br />
      <Link to="/random-beer">Random Beers</Link>
      <br />
      <Link to="/new-beer">New Beer</Link>
      <br />
    </div>
  );
};
export default Home;
