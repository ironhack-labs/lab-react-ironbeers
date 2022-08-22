import { Link } from 'react-router-dom';
import allBeersImg from '../assets/beers.png';
import randomBeerImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';

function HomePage() {
  return (
    <div>
      <div className="card">
        <Link to="/beers">
          <img src={allBeersImg} alt="all beers" />
        </Link>
        <h3>All Beers</h3>
        <p>Check all the beers we have</p>
      </div>
      <div className="card">
        <Link to="random-beer">
          <img src={randomBeerImg} alt="" />
        </Link>
        <h3>Random Beer</h3>
        <p>Get surprised with one random beer</p>
      </div>
      <div className="card">
        <Link to="/new-beer">
          <img src={newBeerImg} alt="" />
        </Link>
        <h3>New Beer</h3>
        <p>Add you own beers to our list</p>
      </div>
    </div>
  );
}

export default HomePage;
