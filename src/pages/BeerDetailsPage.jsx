import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {

    const [details, setDetails] = useState([])
    const { beerId } = useParams()
    console.log(beerId)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                setDetails(response.data)
                console.log(response.data)
            })
    }, [beerId])

    // console.log(details)

    return (
        <div>
            <img src={details.image_url} alt="beers" />
            <h2>{details.name}</h2>
            <h3>{details.tagline}</h3>
            <p>{details.first_brewed}</p>
            <p>{details.attenuation_level}</p>
            <p>{details.description}</p>
            <p>{details.contributed_by}</p>
        </div>

    )
}

export default BeerDetailsPage;