import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import "./Home.css"
import Beers from "../beerspage/Beers"

const Home = () => {
  return (
    <div className="links-container">
      <Link to="/beers">
        All Beers
      </Link>
      <Link to="/random-beer">
        Random Beer
      </Link>
      <Link to="/new-beer">
        New Beer
      </Link>
    </div>
  );
};

export default Home;