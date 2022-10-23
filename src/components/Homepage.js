import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <div className="container">
        <img src={beers} alt="All Beers" />
      </div>
      <h2><Link to="/beers">All Beers</Link></h2>
      <p>All beers on the website.</p>

      <div className="container">
        <img src={randomBeer} alt="Random Beer" />
      </div>
      <h2><Link to="/random-beer">Random Beer</Link></h2>
      <p>Random beer on the website.</p>

      <div className="container">
        <img src={newBeer} alt="New Beer" />
      </div>
      <h2><Link to="/create-beer">New Beer</Link></h2>
      <p>New beer on the website.</p>
    </div>
  );
}

export default Homepage;
