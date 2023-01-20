import { Link } from "react-router-dom";
import "./HomePage.css";

import beerImgOne from "../assets/beers.png"
import beerImgTwo from "../assets/random-beer.png"
import beerImgThree from "../assets/new-beer.png"

function HomePage() {
  return (
    <div className="homePage">
      <h1>Welcome to IronBeers!</h1>

      <img src={beerImgOne} alt="beers" className="image" />
      <Link to="/beers">See all Beers</Link>
      <img src={beerImgTwo} alt="beers" className="image" />
      <Link to="/random-beer">See a random beer</Link>
      <img src={beerImgThree} alt="beers" className="image" />
      <Link to="/new-beer">Add a beer</Link>
    </div>
  );
}

export default HomePage;
