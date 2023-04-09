import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/beers.png";
import { NavLink } from "react-router-dom";

function Homepage() {
  <div>
    <NavLink to="/beers"> All Beers </NavLink>
    <NavLink to="/random-beer"> Random Beer</NavLink>
    <NavLink to="/new-beer">New Beer</NavLink>
  </div>;
}

export default Homepage

