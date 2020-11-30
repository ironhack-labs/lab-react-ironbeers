import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./header";
import '../App.css';
import Beers from "./beers";

const BeerSingle = (props) => {
    const [beerChosen, setBeerChosen] = useState({})
    let beerData = props.match.params.id
    console.log(beerData)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerData}`)
        .then(chosenBeer => {setBeerChosen(chosenBeer.data)
        console.log(chosenBeer)})
        .catch(error =>  console.log(`${error}`))
    }, [])

    return (
        <div>
            <Header /> 
            <div>
                <div className="card-details">
                    <figure >
                        <img className="card-image-details" src={beerChosen.image_url}/>
                    </figure>
                    <div className="card-content">
                        <h2 className="title is-3">{beerChosen.name}</h2>
                        <p className="title is-4"><i>{beerChosen.tagline}</i> {beerChosen.attenuation_level}</p>
                        <p>{beerChosen.description}</p>
                        <p className="title is-6">{beerChosen.first_brewed}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeerSingle