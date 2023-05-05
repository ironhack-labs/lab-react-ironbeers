import { NavLink } from "react-router-dom"
import allBeers from "../assets/beers.png"
import random from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"

function Main(){
    return(   
         <div className="main">
            <NavLink to="/beers">
            <div className="beer-btn">
                <img src={allBeers} alt="allBeers" />
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium commodi asperiores facere adipisci molestiae odit beatae, tempore nequ?</p>
            </div>
            </NavLink>
            <NavLink to="/random-beer">
                <img src={random} alt="allBeers" />
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium commodi asperiores facere adipisci molestiae odit beatae, tempore nequ?</p>
            </NavLink>
            <NavLink to="/new-beer">
            <img src={newBeer} alt="allBeers" />
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium commodi asperiores facere adipisci molestiae odit beatae, tempore nequ?</p>
            </NavLink>
        </div>
    )
}

export default Main