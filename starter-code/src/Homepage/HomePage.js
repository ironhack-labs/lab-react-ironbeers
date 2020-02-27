import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <Link to="/beers">
            <img src="../images/beers.png" alt="AllBeers" />
            <h2>All Beers</h2>
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            voluptate harum, quam necessitatibus laudantium asperiores commodi,
            vel sapiente fuga in quo accusantium qui saepe obcaecati nisi ut
            consectetur ipsam quasi.
          </p>
        </li>
        <li>
          <Link to="/random-beer">
            <img src="../images/random-beer.png" alt="random-beer" />
            <h2>Random Beer</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              odit quis consequatur tenetur, quo a quisquam numquam? Eos nostrum
              vitae maiores, debitis earum quidem quaerat libero atque? Tenetur,
              nulla vitae!
            </p>
          </Link>
        </li>
        <li>
          <Link to="/new-beer">
            <img src="../images/new-beer.png" alt="" />
            <h2>New Beer</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              laborum error eveniet aperiam suscipit ducimus quod saepe
              voluptate consectetur culpa. Alias rerum exercitationem eaque
              totam quibusdam eligendi cumque quia minima.
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomePage;
