import { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink, useParams, useSearchParams } from "react-router-dom";
import BeersPage from "./Beers";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/beers"}>
        <div className="card">
          <img src="./src/assets/beers.png" alt="beers image" />
          <h3>All Beers</h3>
        </div>
      </Link>
      <Link to={"random-beer"}>
        <div className="card">
          <img src="./src/assets/beers.png" alt="beers image" />
          <h3>Random Beer</h3>
        </div>
      </Link>
      <Link to={"new-beer"}>
        <div className="card">
          <img src="./src/assets/beers.png" alt="beers image" />
          <h3>New Beer</h3>
        </div>
      </Link>
    </div>
  );
}

export default Home;
