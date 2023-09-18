import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {

    const {beerId} = useParams();

    const [beerDetails, setBeerDetails] = useState([]);

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then( response => {
            setBeerDetails(response.data)
        })
        .catch( e => {
            console.log("error geting beer details from API", e)
        })
    }, [])
    
    
    return(
        <>
            <div>
                <img src={beerDetails.image_url} alt="beer-img"/>
                <h1>{beerDetails.name}</h1>
                <p>{beerDetails.tagline}</p>
                <p>{beerDetails.first_brewed}</p>
                <p>{beerDetails.attenuation_level}</p>
                <p>{beerDetails.description}</p>
                <p>{beerDetails.contributed_by}</p>

            </div>
        </>
    )
}

export default BeerDetailsPage;