
import { Link, useNavigate, useLocation } from "react-router-dom";
import beersImage from "../assets/beers.png";
import newBeerImage from "../assets/new-beer.png";
import randomBeerImage from "../assets/random-beer.png";

function HomePage() {
  return (
    
    <div className="homepage">
      <Link className="link-homepage" to="/beers">
        <img src={beersImage} alt="All beers" />
        <h2>All beers</h2>
        <p>Get all beer information here!</p>
      </Link>

      <Link className="link-homepage" to="/new-beer">
        <img src={newBeerImage} alt="new beer" />
        <h2>New Beer</h2>
        <p>Create a new Beer For You!</p>
      </Link>

      <Link className="link-homepage" to="/random-beer">
        <img src={randomBeerImage} alt="Random beer" />

        <h2>Random Beer</h2>
        <p>Get Random Beer of the Day!</p>
      </Link>
      </div>
    
  );
}

export default HomePage;
