import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<div>
			<section className="all-beers">
				<Link to="/beers">
					<img src="src\assets\beers.png" alt="" />
					<h1>All Beers</h1>
					<p>
						all cervezas
					</p>
				</Link>
			</section>
			<section >
				<Link to="random-beer">
					<img src="src\assets\random-beer.png" alt="" />
					<h1>Random Beer</h1>
					<p>
					random cerveza
					</p>
				</Link>
			</section>
			<section >
				<Link to="new-beer">
					<img src="src\assets\new-beer.png" alt="" />
					<h1>New Beer</h1>
					<p>
						new cerveza
					</p>
				</Link>
			</section>
		</div>
	);
}

export default HomePage;