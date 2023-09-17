import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

function BeerDetailsPage() {
    const {beerId} = useParams()

    const [beerDetails, setBeerDetails] = useState(null)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/beers/${beerId}`)
        .then(response => {
            console.log(response.data)
            setBeerDetails(response.data)
        })
        .catch((e) => {
            console.log("error getting beer details from ApiLevel...", e)
        })
    }, [])

    const renderList = () => {
        if (beerDetails === null) {
            return (
                <PacmanLoader
                color="rgba(54, 97, 214, 1)"
                size={100}
                />
            )
        }
        return (
            <>
                <img src={beerDetails.image_url} alt={beerDetails.name} />
                <h2>{beerDetails.name}</h2>
                <h4>{beerDetails.tagline}</h4>
                <p>First Brewed: {beerDetails.first_brewed}</p>
                <p>Attenuation Level: {beerDetails.attenuation_level}</p>
                <p>Description: {beerDetails.description}</p>
                <p>Created by: {beerDetails.contributed_by}</p>
            </>
        )
    }
    
    return (
        <>
            {renderList()}
        </>
    )

}

export default BeerDetailsPage;
