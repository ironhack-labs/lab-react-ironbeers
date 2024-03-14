import RandomBeer from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";
import Allbeer from "../assets/beers.png";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className="containerHome">
			<div className="titleHome"></div>
			<div className="containerCard>">
				<Link to="/beers">
					<div className="card">
						<img src={Allbeer} alt="allbeer" />
						<h2 className="titleCard">All Beer</h2>
						<p className="textCard">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							fugit fuga consequatur assumenda id! Soluta voluptatum fugit
							officiis porro voluptates reiciendis deleniti aut laudantium sunt
							nihil, doloribus, incidunt facilis recusandae?
						</p>
					</div>
				</Link>
				<Link to="/random-beer">
					<div className="card">
						<img src={RandomBeer} alt="randombeer" />
						<h2 className="titleCard">Random Beer</h2>
						<p className="textCard">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							fugit fuga consequatur assumenda id! Soluta voluptatum fugit
							officiis porro voluptates reiciendis deleniti aut laudantium sunt
							nihil, doloribus, incidunt facilis recusandae?
						</p>
					</div>
				</Link>
				<Link to="/new-beer">
					<div className="card">
						<img src={NewBeer} alt="NewBeer " />
						<h2 className="titleCard">New Beer</h2>
						<p className="textCard">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							fugit fuga consequatur assumenda id! Soluta voluptatum fugit
							officiis porro voluptates reiciendis deleniti aut laudantium sunt
							nihil, doloribus, incidunt facilis recusandae?
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default HomePage;
