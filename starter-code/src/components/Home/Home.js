import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <Link to="/beers">
            <img src="../images/beers.png" alt="all beers" />
          </Link>
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            egestas, turpis sit amet hendrerit aliquet, magna ipsum lobortis
            ante, at interdum sapien felis nec metus. Nullam id mi vitae metus
            gravida auctor eu vitae ipsum.
          </p>
        </div>
        <div>
          <Link to="/random">
            <img src="../images/beers.png" alt="all beers" />
          </Link>
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            egestas, turpis sit amet hendrerit aliquet, magna ipsum lobortis
            ante, at interdum sapien felis nec metus. Nullam id mi vitae metus
            gravida auctor eu vitae ipsum.
          </p>
        </div>
        <div>
          <Link to="/newBeer">
            <img src="../images/beers.png" alt="all beers" />
          </Link>
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            egestas, turpis sit amet hendrerit aliquet, magna ipsum lobortis
            ante, at interdum sapien felis nec metus. Nullam id mi vitae metus
            gravida auctor eu vitae ipsum.
          </p>
        </div>
      </div>
    );
  }
}
