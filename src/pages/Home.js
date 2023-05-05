import './Home.css';
import { Link } from 'react-router-dom';
import imgBeers from '../assets/beers.png';
import imgRandomBeer from '../assets/random-beer.png';
import imgNewBeer from '../assets/new-beer.png';

function Home() {
	return (
		<div className='home'>
			<Link to="/beers">
				<img src={imgBeers} alt="beers" />
				<div>
					<h3>All Beers</h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum expedita vitae mollitia officiis nostrum deserunt asperiores qui voluptatibus inventore quas aperiam, ipsam sunt et temporibus! Doloremque a asperiores nihil repellat.</p>
				</div>
			</Link>
			<Link to="/random">
				<img src={imgRandomBeer} alt="beers" />
				<div>
					<h3>Random Beer</h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum expedita vitae mollitia officiis nostrum deserunt asperiores qui voluptatibus inventore quas aperiam, ipsam sunt et temporibus! Doloremque a asperiores nihil repellat.</p>
				</div>
			</Link>
			<Link to="/new">
				<img src={imgNewBeer} alt="beers" />
				<div>
					<h3>New Beer</h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum expedita vitae mollitia officiis nostrum deserunt asperiores qui voluptatibus inventore quas aperiam, ipsam sunt et temporibus! Doloremque a asperiores nihil repellat.</p>
				</div>
			</Link>
		</div>
	);
}

export default Home;
