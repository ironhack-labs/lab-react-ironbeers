import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios"; 
import { Link } from "react-router-dom"
import OneBeerPage from "./OneBeerPage";

function BeersPage() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log(response.data)
                //console.log(response.name) // geht nicht, undefined. Denke mal, weil ich für name erst loopen muss, das geht nicht so direkt
                //console.log(response.image_url) // geht nicht, undefined
                setBeers(response.data) // ich verstehe es so, dass damit jetzt mein empty array von useState mit den beers von der api gefüllt werden
            })
    }, [])

    return (
        <div>
            <header>
               <Navbar /> 
            </header>
            {beers.map((beer) => (
                <div key={beer._id} >
                    <img src={beer.image_url} alt="one beer" className="beerImage"/> 
                    <Link to="/beers/:beerId" className="beerInfo"> {beer.name} </Link>
                    <p className="beerInfo">{beer.tagline}</p>
                    <p className="beerInfo">{beer.contributed_by}</p>
                </div>
            ))}

        </div>
    )
}

export default BeersPage