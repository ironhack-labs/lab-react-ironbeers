import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function HomePage() {
  return (
	<div className="cards-container-home">
		<div className="all-beers-card">
			<img src={beers} alt="beers image" />
			<Link to="/beers">All Beers</Link>
			<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. </p>
		</div>
		<div className="random-beer-card">
			<img src={randomBeer} alt="random-beer image" />
			<Link to="/random-beer">Random Beer</Link>
			<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
		</div>
		<div className="new-beer-card">
			<img src={newBeer} alt="new-beer image" />
			<Link to="/new-beer">New Beer</Link>
			<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
		</div>
	</div>
  )
}

export default HomePage