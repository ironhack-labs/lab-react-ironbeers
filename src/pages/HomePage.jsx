import { Link } from "react-router-dom";
import allBeersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

function HomePage() {
    return (
        <div className="homepage">
        <nav>
            <ul className="homepage-ul">
                <li className="homepage-list">
                <img className="homepage-image" src={allBeersImage}/>
                <Link className="homepage-link" to="/beers">All Beers</Link>
                <p className="homepage-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </li>
            </ul>
        </nav>
        <nav>
            <ul className="homepage-ul">
                <li className="homepage-list">
                <img  className="homepage-image" src={randomBeerImage}/>
                <Link className="homepage-link" to="/random-beer">Random Beer</Link>
                <p className="homepage-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </li>
            </ul>
        </nav>
        <nav>
            <ul className="homepage-ul">
                <li className="homepage-list">
                <img className="homepage-image" src={newBeerImage}/>
                <Link className="homepage-link" to="/new-beer">New Beer</Link>
                <p className="homepage-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </li>
            </ul>
        </nav>
       
        
        </div>
    )
}

export default HomePage;
