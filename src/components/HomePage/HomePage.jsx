import beerImg from "./../../assets/beers.png";
import randomBeerImg from "./../../assets/random-beer.png";
import newBeerImg from "./../../assets/new-beer.png";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
	return (
		<div className="container HomePage">
			<div className="row">
				<div className="col-md-6">
					<img src={beerImg} alt="" />
					<Link className="linkTitle" to="/beers">
						<h1>All Beers</h1>
					</Link>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure velit nam tempore nemo ratione officia
						debitis explicabo nulla impedit illo quos nostrum, officiis totam soluta alias. Sapiente, possimus omnis!
					</p>
				</div>
				<div className="col-md-6">
					<img src={randomBeerImg} alt="" />
					<Link className="linkTitle" to="/random-beer">
						<h1>Random Beer</h1>
					</Link>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure velit nam tempore nemo ratione officia
						debitis explicabo nulla impedit illo quos nostrum, officiis totam soluta alias. Sapiente, possimus omnis!
					</p>
				</div>
				<div className="col-md-6">
					<img src={newBeerImg} alt="" />
					<Link className="linkTitle" to="/new-beer">
						<h1>New Beer</h1>
					</Link>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure velit nam tempore nemo ratione officia
						debitis explicabo nulla impedit illo quos nostrum, officiis totam soluta alias. Sapiente, possimus omnis!
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
