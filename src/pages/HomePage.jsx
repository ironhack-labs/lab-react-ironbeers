import { Link } from "react-router-dom";        
import allBeersImg from '../assets/beers.png';
import randomBeerImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';

function HomePage() {
    return (
        <div className="home-page">
        <h1>Welcome to IronBeers</h1>
        <div className="home-links">
          <div className="home-link">
            <Link to="/beers">
              <img src={allBeersImg} alt="All Beers" />
              <h2>All Beers</h2>
            </Link>
          </div>
          <div className="home-link">
            <Link to="/random-beer">
              <img src={randomBeerImg} alt="Random Beer" />
              <h2>Random Beer</h2>
            </Link>
          </div>
          <div className="home-link">
            <Link to="/new-beer">
              <img src={newBeerImg} alt="New Beer" />
              <h2>New Beer</h2>
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default HomePage;
