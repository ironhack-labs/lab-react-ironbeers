import React from "react";
import { NavLink } from "react-router-dom";
import beersImage from "../assets/beers.png";
import beerOnTable from "../assets/new-beer.png";
import draftMaster from "../assets/random-beer.png";

//directs to All Beers, Random Beer, New Beer

function Home() {
    return ( 
    
    <div>
    <img className="home-image" src={beersImage} alt="beer-bar" />
    <p className="nav-header"><NavLink to="/all-the-beers">All Beers</NavLink></p>
    <p className="nav-text">This is a lorem ipsum text. Almost, this lorem ipsum is about Ironhack beers and why they are the best.</p>
    
    <img className="home-image" src={beerOnTable} alt="beer-on-table" />
    <p className="nav-header"><NavLink to="/random-beer">Random Beer</NavLink></p>
    <p className="nav-text">This is a lorem ipsum text. Almost, this lorem ipsum is about Ironhack beers and why they are the best.</p>
    
    <img className="home-image" src={draftMaster} alt="draft-beer-master" />
    <p className="nav-header"><NavLink to="/new-beer">New Beer</NavLink></p>
    <p className="nav-text">This is a lorem ipsum text. Almost, this lorem ipsum is about Ironhack beers and why they are the best.</p>
    </div>
    
    );
}

export default Home;