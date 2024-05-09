import { Link } from "react-router-dom";
import beers from "../../assets/beers.png";
import randomBeer from "../../assets/random-beer.png";
import newBeer from "../../assets/new-beer.png";
import './HomePage.css'

function HomePage() {
  return (
	<div className="cards-container-home">
        <div className="card" style={{ border: '0', boxShadow: 'none' }}>
            <img src={beers} alt="beersImage" />
                <h5 className="card-title">
                    <Link to="/beers" className="homeLink display-1">All Beers</Link>
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum urna mauris. Morbi faucibus dapibus urna, sed tincidunt dolor euismod sed. Mauris tristique malesuada nulla, in imperdiet urna. </p>
        </div>
        <div className="card" style={{ border: '0', boxShadow: 'none' }}>
            <img src={randomBeer} alt="randomBeersImage" />
            <div className="card-body">
                <h5 className="card-title">
                    <Link to="/random-beer" className="homeLink display-1">Random Beer</Link>
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum urna mauris. Morbi faucibus dapibus urna, sed tincidunt dolor euismod sed. Mauris tristique malesuada nulla, in imperdiet urna. </p>

            </div>
        </div>
        <div className="card" style={{ border: '0', boxShadow: 'none' }}>
            <img src={newBeer} alt="beersImage" />
            <div className="card-body">
                <h5 className="card-title">
                    <Link to="/new-beer" className="homeLink display-1">New Beer</Link>
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum urna mauris. Morbi faucibus dapibus urna, sed tincidunt dolor euismod sed. Mauris tristique malesuada nulla, in imperdiet urna. </p>

            </div>
        </div>
	</div>
  )
}

export default HomePage