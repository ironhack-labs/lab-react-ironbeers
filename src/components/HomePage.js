import { useState, useEffect } from "react";     // <== IMPORT useEffect
import Home from '../assets/Home.png';
import {Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import allBeersPic from '../assets/beers.png';
import beerTap from '../assets/random-beer.png';
import oneBeer from '../assets/new-beer.png';
import {Link} from "react-router-dom";

function HomePage(){
    return(
        <div id="home">
            
                <section className="HomeSection">
                    <Link to="/beers">
                        <img src={allBeersPic} alt="Beers" />
                    </Link>
                    <div className="HomeSectionText">
                        <h1>All Beers</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </section>
            
                <section className="HomeSection">
                    <Link to="/random-beer">
                        <img src={beerTap} alt="MoreBeers" />
                    </Link>
                    <div className="HomeSectionText">
                        <h1>Random Beers</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </section>
                <section className="HomeSection">
                    <Link to="/new-beer">
                        <img src={oneBeer} alt="One Beer" />
                    </Link>
                    <div className="HomeSectionText">
                        <h1>New Beer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </section>
        </div>
    )
}

export default HomePage;