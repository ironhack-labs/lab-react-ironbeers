import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"


function RandomBeerPage() {
    const [randombeer,setRandomBeer]= useState(null)

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((oneRandomBeer)=>{
            setRandomBeer(oneRandomBeer.data)
            console.log(oneRandomBeer.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>

        <Navbar/>

        {randombeer && (
            <div>
            <img src={randombeer.image_url} alt={randombeer.name} className="img-size" />
            <h2>{randombeer.name}</h2>
            <p>{randombeer.tagline}</p>
            <p>First Brewed: {randombeer.first_brewed}</p>
            <p>Beer Attenuation Level:{randombeer.attenuation_level}</p>
            <p className="word-wrap1">{randombeer.description}</p>
            <p>Contributed By: {randombeer.contributed_by}</p>
            </div>
        )}


    </div>
  )
}

export default RandomBeerPage