import { Link } from "react-router-dom";
import beersImage from "../assets/beers.png";
import newBeerImage from "../assets/new-beer.png";
import randomBeerImage from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="App">
      {/* <h1>Homepage</h1> */}

      <Link className="link-homepage" to="/beers">
        <img src={beersImage} alt="All beers" />
        <h2>All beers</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip.
        </p>
      </Link>

      <Link className="link-homepage" to="/new-beer">
        <img src={newBeerImage} alt="New beer" />
        <h2>New beer</h2>
        <p>
          Cconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </Link>

      <Link className="link-homepage" to="/random-beer">
        <img src={randomBeerImage} alt="Random beer" />
        <h2>New beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;
