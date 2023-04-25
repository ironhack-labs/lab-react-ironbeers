import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

function Homepage() {
  return (
    <div>
        <div className='container'>
            <img src={beers} alt="beers" />
            <Link to="/beers" className='title'>All Beers</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        <div  className='container'>
            <img src={randomBeer} alt="random-beer" />
            <Link to="/random-beer" className='title'>Random Beer</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        <div  className='container'>
            <img src={newBeer} alt="new-beer" />
            <Link to="/new-beer" className='title'>New Beer</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
    </div>
  )
}

export default Homepage