import { Link } from "react-router-dom";
import { useEffect } from "react";

function HomePage() {
  return (
    <div className="home-container">
      <Link to="/beers">
        <img src="./src/assets/beers.png" alt="beers" />
        <h2>All Beers</h2>
      </Link>
      <Link to="/random-beer">
        <img src="./src/assets/random-beer.png" alt="random beer" />
        <h2>Random Beer</h2>
      </Link>
      <Link to="/new-beer">
        <img src="./src/assets/new-beer.png" alt="new beer" />
        <h2>New beer</h2>
      </Link>
    </div>
  );
}
export default HomePage;
