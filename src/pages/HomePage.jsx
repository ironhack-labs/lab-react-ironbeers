import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="beer-links">
      <Link to={"/beers"}>All Beers</Link>
      <Link to={"/random-beer"}>Random Beers</Link>
      <Link to={"/new-beer"}>New Beer</Link>
    </div>
  );
}

export default HomePage;
