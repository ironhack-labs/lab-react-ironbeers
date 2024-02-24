import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

function BeerDetailsPage() {

    const { beerId } = useParams();
    const [fetching, setFetching] = useState(true);
    const [beerDetails, setBeerDetails] = useState()


    
    useEffect(() => {
        // Get the beer by id from the server
        axios.get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
        .then((response) => {
            console.log(response)
            setBeerDetails(response.data);
            setFetching(false)
        })
    
    }, [beerId]);


    if (fetching) {
        return <p>Loading...</p>
    }



    return (
        <>
        <div>
            <img src={beerDetails.image_url} />
            <h3>{beerDetails.name}</h3>
            <p>{beerDetails.tagline}</p>
            <p>{beerDetails.first_brewed}</p>
            <p>Attenuation level: {beerDetails.attenuation_level}</p>
            <p>Description: {beerDetails.description}</p>
            <p>Created by: {beerDetails.contributed_by}</p>
        </div>
        </>
    )
}
export default BeerDetailsPage;
