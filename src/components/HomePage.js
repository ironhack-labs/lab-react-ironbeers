import { Link } from "react-router-dom";
import newBeer from '../assets/new-beer.png'
import randomBeer from "../assets/random-beer.png";
import beersList from '../assets/beers.png';

function HomePage (){
    console.log("this is working")



    return(
    <div className="HomeContainer">
        <div>
        <img src={beersList} alt="beersList" />
        <Link to="/beers"> Beers List </Link>

        <br />
        <img src={randomBeer} alt="randomBeer" />
        <Link to="/random-beer"> Random Beer </Link>

        <br />
        <img src={newBeer} alt="newBeer" />
        <Link to="/new-beer"> Create a Beer </Link>
        </div>
    </div>
)}

export default HomePage;