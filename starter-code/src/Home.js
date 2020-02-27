import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/beers">All beers</Link>
        </li>
        <li>
          <Link to="/random-beer">Random beer</Link>
        </li>
        <li>
          <Link to="/new-beer">New beer</Link>
        </li>
      </ul>
    );
  }
}

export default Home;
