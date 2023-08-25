import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <img src="../src/assets/beers.png" alt="" />
      <Link to="/beers">All Beers</Link>
      <img src="../src/assets/random-beer.png" alt="" />
      <Link to="/random-beer">Random Beer</Link>
      <img src="../src/assets/new-beer.png" alt="" />
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
}

export default HomePage;
