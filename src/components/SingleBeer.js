import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Header from "./Header"
import '../App.css'

export default function SingleBeer() {

    const { beerId } = useParams()

    const [beerDetails, setBeerDetails] = useState({})

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
            .then((responseFromAPI) => { setBeerDetails(responseFromAPI.data) })
            .catch((err) => { console.log(err) }
                , []);

    })

    return (
        <div >
            <div className="headerinFull">
                <Header />
            </div>
            <div className="SingleBeer">

                <img src={beerDetails.image_url} alt="beer" />
                <div className="singlebeerText">
                    <div className="singleBeerInfo1">
                        <h2>{beerDetails.name}</h2>
                        <p>{beerDetails.attenuation_level}</p>
                    </div>
                    <div className="singleBeerInfo2">
                        <h3>{beerDetails.tagline}</h3>
                        <p>{beerDetails.first_brewed}</p>
                    </div>
                    <p>{beerDetails.description}</p>
                    <p>{beerDetails.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}