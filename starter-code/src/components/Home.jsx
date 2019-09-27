import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li key='1'>
          <Link to={"/beers"}>All beers</Link>
        </li>
        <li key='2'>
          <Link to={"/random-beer"}>Random Beer</Link>
        </li>
        <li key='3'>
          <Link to={"/new-beer"}>Submit a new beer</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
