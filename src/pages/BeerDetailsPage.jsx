import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetailsPage() {
    const [beer, setBeer] = useState({});
    const { beerId } = useParams();

    const getTheBeer = () => {
        axios.get(`${API_URL}/${beerId}`)
            .then((response) => {
                setBeer(response.data);
            })
            .catch((error) => {
                console.log("Error getting beer from the API...");
                console.log(error);
            })
    };

    useEffect(() => {
        getTheBeer();
    }, [beerId]);

    return (
        <div className="BeerDetail">
             <div className="BeerCard">
                <img className="beerImg" alt="`${beer.name}`" src={beer.image_url} />
                    <div className="beerDetails">
                    <h1>{beer.name}</h1>
                    <p>{beer.tagline}</p>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            </div>
        </div>
    );
}

export default BeerDetailsPage;
