import { Routes, Route, Link, NavLink } from "react-router-dom";
import beers from "../assets/beers.png"
import newbeer from "../assets/new-beer.png"
import randombeer from "../assets/random-beer.png"
import "../Homepage.css"



export default function Homepage() {
    return (
        <div className="homepage">
            <img src={beers} alt="beer" />
            <NavLink to="/beers">Beers</NavLink>
            <img src={randombeer} alt="beer2" />
            <NavLink to="/random-beer" > Random Beer</NavLink>
            <img src={newbeer} alt="beer3" />
            <NavLink to="/new-beer" > Create Beer</NavLink>
        </div>
    )
}