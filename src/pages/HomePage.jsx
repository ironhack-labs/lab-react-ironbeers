import { Link } from "react-router-dom";
import allBeersImg from "../assets/beers.png"
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"
import "../index.css"

function HomePage() {
    return (
        <>
        <Link className="category" to="/beers">
        <img src={allBeersImg} alt="all beers image"/>
        <div className="link">All Beers</div>
        </Link>
        
        
        
        <Link className="category" to="/random-beer">
        <img src={randomBeerImg} alt="random beer image"/>
        <div className="link">Surprise me</div>
        </Link>


        <Link className="category" to="/new-beer">
        <img src={newBeerImg} alt="new beer image"/>
        <div className="link">Add new beer</div>
        </Link>
        </>
    )
}
export default HomePage;
