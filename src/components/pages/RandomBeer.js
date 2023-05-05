import Header from "../Header"
import { useState, useEffect } from "react"
import axios from "axios";

function RandomBeer(){
    const [randomBeer, setRandomBeer] = useState(null)
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random	`)
        .then(response => {
            setRandomBeer(response.data)
        })
    }, [])

    return(
        <>
        <Header />
        <div className="beerDetail">
        <img src={randomBeer?.image_url} alt="beer" />
        <h1>{randomBeer?.name}</h1>
        <p>{randomBeer?.tagline}</p>
        <p>{randomBeer?.first_brewed}</p>
        <p>{randomBeer?.attenuation_level}</p>
        <p>{randomBeer?.description}</p>
        <p>{randomBeer?.contributed_by}</p>
        </div>
        </>
    )

}

export default RandomBeer