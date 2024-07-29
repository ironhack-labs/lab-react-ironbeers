import { Link } from 'react-router-dom';
import allBeersImage from '../assets/all-beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to IronBeers</h1>
      <div className="links">
        <div className="link-item">
          <Link to="/beers">
            <img src={allBeersImage} alt="All Beers" />
            <p>All Beers</p>
          </Link>
        </div>
        <div className="link-item">
          <Link to="/random-beer">
            <img src={randomBeerImage} alt="Random Beer" />
            <p>Random Beer</p>
          </Link>
        </div>
        <div className="link-item">
          <Link to="/new-beer">
            <img src={newBeerImage} alt="New Beer" />
            <p>New Beer</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
