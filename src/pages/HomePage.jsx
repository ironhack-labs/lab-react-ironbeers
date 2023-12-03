import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to IronBeers!</h1>
      <p>Explore the world of handcrafted beers.</p>
      <nav>
        <ul>
          <li>
            <Link to="/beers">All Beers</Link>
          </li>
          <li>
            <Link to="/random-beer">Random Beer</Link>
          </li>
          <li>
            <Link to="/new-beer">New Beer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
