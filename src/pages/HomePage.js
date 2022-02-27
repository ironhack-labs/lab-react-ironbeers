import { Link } from "react-router-dom";
import allBeersImage from "../assets/beers.png";
import newBeerImage from "../assets/new-beer.png";
import randomBeerImage from "../assets/random-beer.png";


function HomePage() {
    return (
      <div>
      <Link to="/beers">
      <img src={allBeersImage} alt="" className="page-img" />
      </Link>
      <h2>All Beers</h2>
      <Link to="/random-beer">
      <img src={randomBeerImage} alt="" className="page-img" />
      </Link>
      <h2>Random Beer</h2>
      <Link to="/new-beer">
      <img src={newBeerImage}  alt="" className="page-img" />
      </Link>
      <h2>New Beer</h2>
      </div>
    );
  }
  
  export default HomePage;
  