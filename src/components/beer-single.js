import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import './App.css';

const BeerSingle = (props) => {

    const [beerChosen, setBeerChosen] = useState({})
    let beerData = props.match.params.id
    
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerData}`)
        .then(chosenBeer => {setBeerChosen(chosenBeer.data)})
        .catch(error =>  console.log(`${error}`))
    }, [])

    return (
        <div>
            <Header /> 
            <div>
                <figure>
                    <img src={beerChosen.image_url} alt={beerChosen.name} />
                </figure>
                <div>
                    <h2>{beerChosen.name}</h2>
                    <p><i>{beerChosen.tagline}</i> {beerChosen.attenuation_level}</p>
                    <p>{beerChosen.description}</p>
                    <p>{beerChosen.first_brewed}</p>
                </div>
            </div>
        </div>
    )
}

export default BeerSingle 