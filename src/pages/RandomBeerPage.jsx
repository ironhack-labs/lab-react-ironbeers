import Navbar from "../components/Navbar";
import axios from "axios"
import {useEffect, useState} from "react"

function RandomBeersPage() {

    const [randomBeer, setRandomBeer] = useState([])

useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
        let max = response.data.length-1
        const id = Math.floor(Math.random() * max)
        setRandomBeer(id)
    })
    .catch(error => error)
}, [])

    return (
    <>
    <Navbar/>
    <img src={randomBeer.image_url} alt="can't load picture"/>
      <h1>{randomBeer.name}</h1>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </>
    
    )
}

export default RandomBeersPage;
