import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


function BeerDetailsPage() {

    const [beerDetails, setBeerDetails] = useState();

    const { beerId } = useParams();
    useEffect(() => {
        const getBeerDetails = async () => {
            let result = await axios.get("https://ih-beers-api2.herokuapp.com/beers/" + beerId);
            setBeerDetails(result.data)
        }
        getBeerDetails();
    }, [])

    return (
        <div>
            {beerDetails
                ? <>
                    <img src={beerDetails.image_url} alt="" className="beer-preview" />
                    <p>{beerDetails.name}</p>
                    <p>{beerDetails.tagline}</p>
                    <p>{beerDetails.first_brewed}</p>
                    <p>{beerDetails.attenuation_level}</p>
                    <p>{beerDetails.description}</p>
                    <p>{beerDetails.contributed_by}</p>
                </>
                : "Loading...."}
        </div>
    )
}

export default BeerDetailsPage;
