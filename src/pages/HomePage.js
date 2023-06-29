import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/beers">All Beers</Link>
      <br />
      <Link to="/random-beer">Random Beer</Link>
      <br />
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
}

export default HomePage;
