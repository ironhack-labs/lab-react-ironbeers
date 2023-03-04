import { Link } from "react-router-dom";

import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Home() {
  return (
    <div id="home">
      <img src={beers} alt="A bar with different beer taps." />
      <Link to="/beers">
        <h2>Beers</h2>
      </Link>
      <img src={newBeer} alt="A close-up of some beer taps." />
      <Link to="/random-beer">
        <h2>Random Beer</h2>
      </Link>
      <img src={randomBeer} alt="A beer bottle and a glass next to it." />
      <Link to="/new-beer">
        <h2>New Beer</h2>
      </Link>
    </div>
  );
}

export default Home;
