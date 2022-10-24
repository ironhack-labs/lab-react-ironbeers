import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function Home() {
    return (
        <div className="Home">
            <div>
                <img src={beers} alt="all-beers" />
                <h2>
                    <Link to="/beers"> All Beers </Link>
                </h2>
                <p>
                    Here you can find all the beers.
                </p>
            </div>
            <div>
                <img src={randomBeer} alt="random-beer" />
                <h2>
                    <Link to="/random-beer"> Random Beer </Link>
                </h2>
                <p>
                    Here You can discover a random beer.
                </p>
            </div>
            <div>
                <img src={newBeer} alt="new-beer" />
                <h2>
                    <Link to="/new-beer"> New Beer </Link>
                </h2>
                <p>
                    Here you can find a new beer.
                </p>
            </div>
        </div>
    );
}

export default Home;