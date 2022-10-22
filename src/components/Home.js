import { NavLink } from "react-router-dom";
import BeersImage from "../assets/beers.png"
import RandomBeerImage from "../assets/random-beer.png"
import NewBeerImage from "../assets/new-beer.png"

export default function Home(){
    return(
        <div className="Home">
        <h1>This is the home</h1>

        <img src={BeersImage} alt="beers" className="homepageImage"/>
        <NavLink to="/beers" className="homepageLink">All Beers</NavLink>
        <p className="homepageText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

        <img src={RandomBeerImage} alt="randombeers" className="homepageImage"/>
        <NavLink to="/random-beer" className="homepageLink">Random Beer</NavLink>
        <p className="homepageText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>


        <img src={NewBeerImage} alt="newbeers" className="homepageImage"/>
        <NavLink to="/new-beer" className="homepageLink">Create a New Bear</NavLink>
        <p className="homepageText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

    </div>
    )
    
}