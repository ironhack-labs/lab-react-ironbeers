import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <img src="src/assets/beers.png" alt="Beers" />
            <Link to="/beers">All Beers</Link>
            <img src="src/assets/random-beer.png" alt="Random Beer" />
            <Link to="/random-beer">Random Beer</Link>
            <img src="src/assets/new-beer.png" alt="New Beer" />
            <Link to="/new-beer">New Beer</Link>
        </div>
    );
}

export default HomePage;
