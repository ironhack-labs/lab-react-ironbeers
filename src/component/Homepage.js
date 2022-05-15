import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { NavLink } from "react-router-dom";



function Homepage (){


    return (
        <div>
            <h1>Welcome the the awesome collection of Iron Beers</h1>
            <div >
            <img src={beers} alt="beers"/> <br/>
            <NavLink to={'/Beers'}>All Beers</NavLink>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <br/>
            <img src={randomBeer} alt="Random Beer"/> <br/>
            <NavLink to={'/RandomBeer'}>Random Beer</NavLink>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <br/>
            <img src={newBeer} alt="New Beer"/> <br/>
            <NavLink to={'/NewBeer'}>New Beer</NavLink>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
          
        </div>
    )
}

export default Homepage;
