import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function BeerDetailsPage() {

    const [beerDetails, setBeerDetails] = useState(null)

    const beerId = useParams();

    const API_URL = "https://ih-beers-api2.herokuapp.com"

    useEffect(() => {
        axios.get(API_URL + "/beers/" + beerId.beerId)
            .then((response) => {
                setBeerDetails(response.data)
            })
            .catch((e) => {
                console.log("An error occurred:")
                console.log(e)
            })
    }, [])

    return (
        <>
            {beerDetails === null
                ? <h1>Loading beer details...</h1>
                : <div className="beer-details-div">
                    <img src={beerDetails.image_url} />
                    <div className="beer-details-top">
                        <div className="beer-details-left">
                            <h1>{beerDetails.name}</h1>
                            <h2>{beerDetails.tagline}</h2>
                        </div>
                        <div className="beer-details-right">
                            <h1>{beerDetails.attenuation_level}</h1>
                            <h2>{beerDetails.first_brewed}</h2>
                        </div>
                    </div>
                    <div className="beer-details-bottom">
                        <p>{beerDetails.description}</p>
                        <p>{beerDetails.contributed_by}</p>
                    </div>
                </div>}
                <Link to="/beers">Go back</Link>
        </>
    )
}

export default BeerDetailsPage;
