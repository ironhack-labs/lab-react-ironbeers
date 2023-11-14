import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddBeerPage from "./AddBeerPage";

function BeerDetailsPage() {
    const [beerDetails, setBeerDetails] = useState(null)
    const { beerId } = useParams()
    
    const getBeerDetails = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => {
            console.log(response.data);  
            setBeerDetails(response.data);
        })
        .catch((error) => {
            console.log(error)
            })
    }

    useEffect(() => {
        getBeerDetails()
    }, [])

    return (
        <div className="BeerDetails">
            {beerDetails && (
            <>
                <img src={beerDetails.image_url} alt="" />
                <h2>{beerDetails.name}</h2>
                <p>{beerDetails.tagline}</p>
                <p>{beerDetails.first_brewed}</p>
                <p>{beerDetails.attenuation_level}</p>
                <p>{beerDetails.description}</p>
                <p>{beerDetails.contributed_by}</p>
            </>
            )}
        
        <AddBeerPage beerId={beerId} callbackToUpdateBeers={getBeerDetails}/>
        </div>
    )

}

export default BeerDetailsPage;
