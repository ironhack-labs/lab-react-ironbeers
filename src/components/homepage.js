import { Link } from 'react-router-dom';
import beerheader from '../assets/beers.png';
import randomheader from '../assets/random-beer.png';
import addheader from '../assets/new-beer.png';

function HomePage() {
	return (
		<nav>
			<div>
				<Link to="/beers">
					<img src={beerheader} alt="beers" /> <br />
					<h1>All Beers</h1>
				</Link>
			</div>

			<div>
				<Link to="/random">
					<img src={randomheader} alt="beers" /> <br />
					<h1>Random Beer</h1>
				</Link>
			</div>

			<div>
				<Link to="/add">
					<img src={addheader} alt="beers" /> <br />
					<h1>New Beer</h1>
				</Link>
			</div>
		</nav>
	);
}

export default HomePage;
