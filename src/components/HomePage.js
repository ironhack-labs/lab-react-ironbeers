import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function HomePage() {
  return (
    <nav>
      <Link to="/beers">
        <img src={beers} alt="beers" />
        <p>Beer</p>
      </Link>
      <Link to="/random-beer">
        <img src={randomBeer} alt="random beers" />
        <p>Random Beer</p>
      </Link>
      <Link to="/new-beer">
        <img src={newBeer} alt="new beer" />

        <p>New Beer</p>
      </Link>
    </nav>
  );
}

export default HomePage;
