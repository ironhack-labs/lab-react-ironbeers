import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Homepage() {
  return (
    <div>
      <Link to={"/beers"}>
        <img src={beers} alt="beers" />
        <h2>All Beers</h2>
      </Link>
      <Link to={"/random-beer"}>
        <img src={randomBeer} alt="random beer" />
        <h2>Random Beer</h2>
      </Link>
      <Link to={"/new-beer"}>
        <img src={newBeer} alt="new beer" />
        <h2>New Beer</h2>
      </Link>
    </div>
  );
}

export default Homepage;
