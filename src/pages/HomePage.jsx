import { Link } from "react-router-dom";
import allBeersImg from "../assets/beers.png"
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"

function HomePage() {
    return (
      <div className="homepage-box">
        <Link to="/beers">
            <img src={allBeersImg} alt="all beers banner"/>
            <h1>All Beers</h1>
        </Link>
        <Link to="/random-beer">
            <img src={randomBeerImg} alt="random beer banner"/>
            <h1>Random Beer</h1>
        </Link>
        <Link to="/new-beer">
            <img src={newBeerImg} alt="new beer banner"/>
            <h1>New Beer</h1>
        </Link>
     
      </div>
    );
  }
  
  export default HomePage;