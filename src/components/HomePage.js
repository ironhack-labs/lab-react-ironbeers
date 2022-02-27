import React from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div>
        <img src="./src/assets/beers.png" alt="all beers bar"></img> <br />
        <NavLink to="/beers" end>
          Beers
        </NavLink>
        <p>lorem ipsum</p>
      </div>
      <div>
        <img src="../assets/random-beer.png" alt="all beers bar"></img> <br />
        <NavLink to="/random-beer" end>
          Random Beer
        </NavLink>
        <p>lorem ipsum</p>
      </div>
      <div>
        <img src="./assets/new-beer.png" alt="all beers bar"></img>
        <br />
        <NavLink to="/new-beer" end>
          New Beer
        </NavLink>
        <p>lorem ipsum</p>
      </div>
    </div>
  );
}
