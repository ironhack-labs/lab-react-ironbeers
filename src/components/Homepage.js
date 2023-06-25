import imgAllBeers from "../assets/beers.png";
import imgNewBeer from "../assets/new-beer.png";
import imgRandomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>React Ironbeers</h1>

      <img src={imgAllBeers} />
      <Link to={`/beers`}>
        <h2>All Beers</h2>{" "}
      </Link>
      <p>
        Browse our selection of crisp, tasty beers from pale ales to blondinies,
        all the way to full-bodied Lagers. Thirsty AF.
      </p>

      <img src={imgRandomBeer} />

      <Link to={`/random-beer`}>
        <h2>Random Beer</h2>{" "}
      </Link>
      <p>Feeling lucky? Let's find you a random beer.</p>

      <img src={imgNewBeer} />
      <Link to={`/new-beer`}>
        <h2>New Beer</h2>{" "}
      </Link>
      <p>New Beer, new me. Let's go for something new!</p>
    </div>
  );
}

export default Homepage;
