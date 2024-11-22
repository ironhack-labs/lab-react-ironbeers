import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function BeerDetailsPage() {

    const [beerDetails, setBeerDetails] = useState(null);

    const { beerId } = useParams();
    
    const getBeers = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                setBeerDetails(response.data);
            })
            .catch((error) => {
                console.log("Something went wrong with the API...", error)
            })
    };

    useEffect(() => {
        getBeers();
    }, [beerId]);

    if (beerDetails === null) {
        return "Loading...";
    }


    return (
        <div className="BeerDetails">
            {beerDetails && (
                <>
                <h1>{beerDetails.name}</h1>
                <p>{beerDetails.tagline}</p>
                </>
            )}
        </div>
    )

}

export default BeerDetailsPage;
