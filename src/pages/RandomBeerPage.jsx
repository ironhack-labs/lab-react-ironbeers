import Navbar from "../components/Navbar";
import axios from "axios"
import {useEffect, useState} from "react"

function RandomBeersPage() {

    const [randomBeer, setRandomBeer] = useState({})

useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
        console.log(response)
        let max = response.data.length-1
        const id = Math.floor(Math.random() * max)
        setRandomBeer(response.data[id])
    })
    .catch(error => error)
}, [])

    return (
    <div className="beerCard">
    <img src={randomBeer.image_url} width="100vw" height="auto" alt="can't load picture"/>
      <div className="beerInfo">
      <h1>{randomBeer.name}</h1>
      <p>"{randomBeer.tagline}"</p>
      <p className="description">{randomBeer.description}</p>
      <p>First brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation level: {randomBeer.attenuation_level}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
      <p>Tips: {randomBeer.brewers_tips}</p>
      </div>
    </div>
    
    )
}

export default RandomBeersPage;
