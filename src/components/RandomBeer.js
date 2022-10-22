import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"


export default function RandomBeer(){

const [randomBeer, setRandomBeer] = useState({})

useEffect(()=>{
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((responseFromAPI)=>{setRandomBeer(responseFromAPI.data)})
    .catch((err)=>{console.log(err)})
}, [])


    return(
        <div>
            <Header/>
            <h1>Some Random Beer:</h1>
            <img src={randomBeer.image_url} alt="beer"/>
            <p>{randomBeer.name}</p>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
        </div>
    )
}