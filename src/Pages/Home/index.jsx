import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div>
			<Link to="/allbeers">
				<div>
					<img src="src/assets/beers.png" alt="" />
					<h1>All Beers</h1>
					<p>Blablabla</p>
				</div>
			</Link>

			<Link to="/allbeers-new">
				<div>
					<img src="src/assets/new-beer.png" alt="" />
					<h1>New Beer</h1>
					<p>Blablabla</p>
				</div>
			</Link>

			<Link to="/randombeer">
				<div>
					<img src="src/assets/random-beer.png" alt="" />
					<h1>Random Beer</h1>
					<p>Blablabla</p>
				</div>
			</Link>
		</div>
	);
}

export default HomePage;
