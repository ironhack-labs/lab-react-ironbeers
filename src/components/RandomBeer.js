import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import '../App.css'


export default function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((responseFromAPI) => { setRandomBeer(responseFromAPI.data) })
            .catch((err) => { console.log(err) })
    }, [])


    return (
        <div>
            <div className="headerinFull">
                <Header />
            </div>
            <div className="SingleBeer">
                <h1>Some Random Beer:</h1>
                <img src={randomBeer.image_url} alt="beer" />
                <div className="singlebeerText">
                    <div className="singleBeerInfo1">
                        <p>{randomBeer.name}</p>
                        <p>{randomBeer.attenuation_level}</p>
                    </div>
                    <div className="singleBeerInfo2">
                        <p>{randomBeer.tagline}</p>
                        <p>{randomBeer.first_brewed}</p>
                    </div>
                    <p>{randomBeer.description}</p>
                    <p>{randomBeer.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}