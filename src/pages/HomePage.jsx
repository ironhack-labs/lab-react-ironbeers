import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function HomePage() {
  return (
    <div className="home-page">
      <Link to="/beers">
        <img src={beersImg} alt="All Beers" />
        <h2>All Beers</h2>
      </Link>
      
      <Link to="/random-beer">
        <img src={randomBeerImg} alt="Random Beer" />
        <h2>Random Beer</h2>
      </Link>
      
      <Link to="/new-beer">
        <img src={newBeerImg} alt="New Beer" />
        <h2>New Beer</h2>
      </Link>
    </div>
  );
}

export default HomePage;
