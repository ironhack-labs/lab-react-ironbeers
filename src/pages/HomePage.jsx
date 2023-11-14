import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import randombeer from "../assets/random-beer.png"
import newbeer from "../assets/new-beer.png"

function HomePage() {
return (
    <div className="board">
        
        <div className="item">
        <img className="homePageImg" src={beers} alt="beersImg"></img>
        <div className="item"><Link to="/beers">All Beers</Link></div>
        <img className="homePageImg" src={randombeer} alt="randomBeerImg"></img>
        <div className="item"><Link to="/random-beer">Random Beer</Link></div>
        <img className="homePageImg" src={newbeer} alt="newBeerImg"></img>
        <div><Link to="/new-beer">New Beer</Link></div>
        </div>
    </div>
)
}

export default HomePage;
