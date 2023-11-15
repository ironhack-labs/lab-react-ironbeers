import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {

    const [randomBeerDetails, setRandomBeerDetails] = useState(null)

    const API_URL = "https://ih-beers-api2.herokuapp.com"

    useEffect(() => {
        axios.get(API_URL + "/beers/random")
            .then((response) => {
                setRandomBeerDetails(response.data)
            })
            .catch((e) => {
                console.log("An error occurred:")
                console.log(e)
            })
    }, [])

    return (
        <>
            {randomBeerDetails === null
                ? <h1>Loading beer details...</h1>
                : <div className="beer-details-div">
                    <img src={randomBeerDetails.image_url} />
                    <div className="beer-details-top">
                        <div className="beer-details-left">
                            <h1>{randomBeerDetails.name}</h1>
                            <h2>{randomBeerDetails.tagline}</h2>
                        </div>
                        <div className="beer-details-right">
                            <h1>{randomBeerDetails.attenuation_level}</h1>
                            <h2>{randomBeerDetails.first_brewed}</h2>
                        </div>
                    </div>
                    <div className="beer-details-bottom">
                        <p>{randomBeerDetails.description}</p>
                        <p>{randomBeerDetails.contributed_by}</p>
                    </div>
                </div>}
        </>
    )
}

export default RandomBeersPage;
