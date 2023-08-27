
import { Link } from 'react-router-dom';


import beersIcon from '../assets/beers.png';
import homeIcon from '../assets/home-icon.png';
import newBeerIcon from '../assets/new-beer.png';
import randomBeerIcon from '../assets/random-beer.png';

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Welcome to Beer World!</h1>
        <img src={homeIcon}/>
      </div>
      <div>
        <Link to="/beers">
          <img src={beersIcon}/>
          All Beers
        </Link>
        <Link to="/random-beer">
          <img src={randomBeerIcon}/>
          Random Beer
        </Link>
        <Link to="/new-beer">
          <img src={newBeerIcon}/>
          New Beer
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
