import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

function BeerDetailsPage() {

    let { beerId } = useParams()
    const [beer, setBeer] = useState(null)


    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                setBeer(response.data)
            })
            .catch(error => {
                console.log("Error", error)
            })
    }, [beerId])

    if (beer === null) {
        return (<div>Beer Details</div>)
    }
    return (
        <div>
            <h1>Beer Details</h1>
            <hr />
            <div>
                <img src={beer.image_url} alt="imageBeer" />
                <h5>{beer.name}</h5>
                <h5>{beer.tagline}</h5>
                <h5>{beer.first_brewed}</h5>
                <h5>{beer.attenuation_level}</h5>
                <h5>{beer.description}</h5>
                <h5>Contributed by: {beer.contributed_by}</h5>
            </div>
        </div>
    )

}

export default BeerDetailsPage;
