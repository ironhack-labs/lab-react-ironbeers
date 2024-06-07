import { Link } from "react-router-dom";
import beersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Beer App</h1>
      <div>
        <Link to="/beers">
          <div>
            <img src={beersImage} alt="All Beers" style={{ width: "50%" }} />
            <h2>All Beers</h2>
            <p>Check out all the beers we have!</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/random-beer">
          <div>
            <img src={randomBeerImage} alt="Random Beer" style={{ width: "50%" }} />
            <h2>Random Beer</h2>
            <p>Get a random beer recommendation!</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/new-beer">
          <div>
            <img src={newBeerImage} alt="New Beer" style={{ width: "50%" }} />
            <h2>New Beer</h2>
            <p>Add a new beer to our collection!</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;