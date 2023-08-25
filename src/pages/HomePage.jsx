import { Link } from 'react-router-dom';
import beersIcon from '../assets/beers.png';
import homeIcon from '../assets/home-icon.png';
import newBeerIcon from '../assets/new-beer.png';
import randomBeerIcon from '../assets/random-beer.png';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Beer World!</h1>
        <img src={homeIcon} alt="Home Icon" className="home-icon" />
      </div>
      <div className="links-container">
        <Link to="/beers" className="link">
          <img src={beersIcon} alt="Beers Icon" className="link-icon" />
          All Beers
        </Link>
        <Link to="/random-beer" className="link">
          <img src={randomBeerIcon} alt="Random Beer Icon" className="link-icon" />
          Random Beer
        </Link>
        <Link to="/new-beer" className="link">
          <img src={newBeerIcon} alt="New Beer Icon" className="link-icon" />
          New Beer
        </Link>
      </div>
    </div>
  );
};
export default HomePage;

























