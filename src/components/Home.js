import '../App.css'

import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import beerRandom from '../assets/random-beer.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <h1 className='mt-4'>🍻 Welcome to IronBeers! 🍻</h1>
            <div className='container-cards'>
                <Link to={'/beers'}>
                    <div className="card">
                        <img src={beers} alt="Beers" />
                        <div className="card-body">
                            <h4 className='card-title'>ALL BEERS</h4>
                            <p>See a list of all our beers!</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/new-beer'}>
                    <div className="card">
                        <img src={newBeer} alt="Beers" />
                        <div className="card-body">
                            <h4 className='card-title'>ADD A BEER 🍺</h4>
                            <p>Add a new beer to our database!</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/random-beer'}>
                    <div className="card">
                        <img src={beerRandom} alt="Beers" />
                        <div className="card-body">
                            <h4 className='card-title'>RANDOM BEER</h4>
                            <p>If you can't pick... Let us choose!</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
};

export default Home;