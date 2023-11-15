import { Link } from "react-router-dom";
import Beers from "../assets/beers.png";
import RandomBeer from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";

function HomePage() {
  return (
    <div className="HomePage">
      <Link to="/beers">
        <h3>All Beers 🍻</h3>
        <img src={Beers} />
      </Link>
        <p>
          Here's a list of all the beers in our catalog. Explore the amazing
          taste and Cheers!
        </p>
      <Link to="/random-beer">
        <h3>Random Beer 🍺</h3>
        <img src={RandomBeer} />
      </Link>
        <p>Discover your surprise beer! Cheers to the unexpected!</p>
      <Link to="/new-beer">
        <h3>New Beer 🥴</h3>
        <img src={NewBeer} />
      </Link>
        <p>Brewer's Playground: Add a Brew! Join us and expand the limits of taste - one beer at a time!</p>
    </div>
  );
}

export default HomePage;
