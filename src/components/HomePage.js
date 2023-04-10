import './HomePage.css';
import { Link } from "react-router-dom";
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function HomePage() {
  return (
    <div className="HomePage">
      <img src={beers}></img>
      <Link to="/beers" className='home-link'>- Beers -</Link>
      <img src={newBeer}></img>
      <Link to="/random-beer" className='home-link'>- Random Beer -</Link>
      <img src={randomBeer}></img>
      <Link to="/new-beer" className='home-link'>- New Beer -</Link>
    </div>
  );
}

export default HomePage;
