import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="links-div">
        <Link to={"/beers"}>
          <img src="../src/assets/beers.png" alt="" />
          <h2>All Beers</h2>
        </Link>
        <Link to={"/random-beer"}>
          <img src="../src/assets/random-beer.png" alt="" />
          <h2>Random Beer</h2>
        </Link>
        <Link to={"/new-beer"}>
          <img src="../src/assets/new-beer.png" alt="" />
          <h2>New Beer</h2>
        </Link>
      </div>
    </div>
  );
}
export default HomePage;
