import React from "react";
import {Link} from "react-router-dom";
import "./Landing.css";
import beers from "../images/beers.png";
import randomBeer from "../images/random-beer.png";
import newBeer from "../images/new-beer.png";

export default function Landing(props) {
    return(
        <div className="mainDiv">
            <div>
                <img src={beers} alt=""/>
            </div>
            <Link to="/beers">
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam iure labore quasi officia, quia praesentium rerum quam laudantium iste? Ipsam, quibusdam quos ullam assumenda eius eaque quis illo beatae magni?</p>
            </Link>
            <div>
                <img src={randomBeer} alt=""/>
            </div>
            <Link to="/random-beer">
                <h1>Random Beer</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate blanditiis maxime vel eos saepe. Ipsam necessitatibus mollitia consequuntur magnam quas, laboriosam eos recusandae eum deleniti cupiditate optio maiores voluptas.</p>
            </Link>
            <div>
                <img src={newBeer} alt=""/>
            </div>
            <Link to="/new-beer">
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vero ut quam velit eos vitae ex cum at eligendi quaerat eveniet culpa quisquam incidunt rerum distinctio tempore, omnis deserunt sapiente.</p>
            </Link>
        </div>
    )
}