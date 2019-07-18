import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/beers">All beers</Link>
        </li>
      </ul>
    </nav>
  );
};

// /beers
// /random-beer
// /new-beer

export default Home;
