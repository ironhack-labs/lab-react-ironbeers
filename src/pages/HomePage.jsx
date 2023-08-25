import { Link } from "react-router-dom";

import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function HomePage() {
  return (
    <div className="HomePage">
      <Link to="/beers">
        <img src={beersImg} alt="beers-icon" />
        <h3>All Beers</h3>
        <p>
          I'm baby dolore butcher sartorial, yr neutra consectetur bushwick
          tattooed you probably haven't heard of them deserunt activated
          charcoal praxis organic plaid.
        </p>
      </Link>
      <Link to="/random-beer">
        <img src={randomBeerImg} alt="random-beer-icon" />
        <h3>Random Beer</h3>
        <p>
          I'm baby dolore butcher sartorial, yr neutra consectetur bushwick
          tattooed you probably haven't heard of them deserunt activated
          charcoal praxis organic plaid.
        </p>
      </Link>
      <Link to="/new-beer">
        <img src={newBeerImg} alt="new-beer-icon" />
        <h3>New Beer</h3>
        <p>
          I'm baby dolore butcher sartorial, yr neutra consectetur bushwick
          tattooed you probably haven't heard of them deserunt activated
          charcoal praxis organic plaid.
        </p>
      </Link>
    </div>
  );
}
export default HomePage;
