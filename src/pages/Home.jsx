import { Link } from 'react-router-dom';

import './Home.css';
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

const Home = () => {
  return (
    <>
      <Link to="/beers">
        <div className="card">
          <img src={beers} alt="" />
          <h2>All Beers</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ut dolores eos consectetur ipsam esse asperiores culpa ad eligendi.</p>
        </div>
      </Link>

      <Link to="/random-beer">
        <div className="card">
          <img src={randomBeer} alt="" />
          <h2>Random Beer</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ut dolores eos consectetur ipsam esse asperiores culpa ad eligendi.</p>
        </div>
      </Link>

      <Link to="/new-beer">
        <div className="card">
          <img src={newBeer} alt="" />
          <h2>New</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ut dolores eos consectetur ipsam esse asperiores culpa ad eligendi.</p>
        </div>
      </Link>
    </>
  )
}

export default Home