import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

export default function Home() {
  return (
    <div className="home-container container">
      <Link to={"/beers"} className="home-link">
        <img src={beers} alt="beers"></img>
        <h3>All Beers</h3>
      </Link>
      <Link to={"/random-beer"} className="home-link">
        <img src={randomBeer} alt="random beer"></img>
        <h3>Random Beer</h3>
      </Link>
      <Link to={"/new-beer"} className="home-link">
        <img src={newBeer} alt="new beer"></img>
        <h3>New Beer</h3>
      </Link>
    </div>
  );
}
