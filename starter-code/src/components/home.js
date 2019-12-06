import React from "react";
import { Link } from "react-router-dom";


const Home = () => {

    return (
      <div>
        <h2>IronBeers</h2>
        <ul>
          <li>
            <Link to="/beers">beers</Link>
          </li>
          <li>
            <Link to="/new-beer">new-beer</Link>
          </li>
          <li>
            <Link to="/random-beer">random-beer</Link>
          </li>
        </ul>
      </div>
    );
  }

export default Home;