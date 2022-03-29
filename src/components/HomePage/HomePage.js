import React from "react";
import './HomePage.css'
import beersImage from "../../assets/beers.png"
import newBeersImage from "../../assets/new-beer.png"
import randomBeerImage from "../../assets/random-beer.png"
import { Link } from "react-router-dom";


//He utilizado { Link } de esta manera podemos ir a cualquiera de las paginas.


function HomePage() {

    return (
        <>
        <div className="HomePage">
            <div>
                <img className="img" src={ beersImage } alt=""></img>
                <Link to="/beers"><h3>All Beers</h3></Link>
                <p>Check out all our Beers!</p>
            </div>
            <div>
                <img className="img" src={ newBeersImage } alt=""></img>
                <Link to="/beers/createBeer"><h3>Add Beer</h3></Link>
                <p>Add a new Beer!</p>
            </div>
            <div>
                <img className="img" src={ randomBeerImage } alt=""></img>
                <Link to="/beers/randomBeer"><h3>Random Beer</h3></Link>
                <p>Check out a random Beer!</p>
            </div>

        </div>
        </>
    )
}

export default HomePage