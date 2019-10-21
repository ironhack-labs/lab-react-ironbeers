import React, { Component } from "react";
import { Link } from "react-router-dom";
import Beer from "../images/beers.png";
import Random from "../images/random-beer.png";
import New from "../images/new-beer.png";

class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <div className="one">
                    <img src={Beer} alt="beer"></img>
                    <Link to="/beers">All Beers</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="one">
                    <img src={Random} alt="random"></img>
                    <Link to ="/random-beer">Random Beer</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="one">
                    <img src={New} alt="new"></img>
                    <Link to="/new-beer">New Beer</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        )
    }
}

export default Home;