
import { NavLink } from "react-router-dom";
import beers from "../assets/beers.png"
import newbeer from "../assets/new-beer.png"
import randombeer from "../assets/random-beer.png"
import BeersList from "./BeersList";
import RandomBeer from "./RandomBeer";



function HomePage() {
    return (
        
        <nav className="NavBar">
            <NavLink to="/beers" element={BeersList}>All Beers</NavLink> <br/>
            <img src={beers} alt="" /> <br/>
            <NavLink to="/random-beer" element={RandomBeer}>Random Beer</NavLink> <br/>
            <img src={newbeer} alt="" /> <br/>
            <NavLink to="/new-beer">New Beer</NavLink> <br/>
            <img src={randombeer} alt="" /> <br/>
        </nav>
            
        
    );
}

export default HomePage;