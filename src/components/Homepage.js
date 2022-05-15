import { NavLink } from "react-router-dom";
import allBeers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"
import "./Homepage.css"


function Beers(){

   
    
    return(
<>
    
    <NavLink to="/beers" className="homepage-link">
    <img src={allBeers} alt="All Beers"/>
    <div className="link-text">
    <h2>Show all Beers</h2>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
    </div>
    
    </NavLink>

    <NavLink to="/random" className="homepage-link">
    <img src={randomBeer} alt="Random Beer"/>
    <div className="link-text">
    <h2>Show random Beer</h2>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
    </div>
    
    </NavLink>

    <NavLink to="/create" className="homepage-link">
    <img src={newBeer} alt="Create Beer"/>
    <div className="link-text">
    <h2>Create new Beer</h2>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
    </div>
   
    </NavLink>
</>
)

}


export default Beers;