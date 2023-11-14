import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com"

function BeerDetailsPage() {
    const {beerId} = useParams();

    const[beerDetails, setBeerDetails] = useState(null);

    useEffect(() => {
        getBeerDetails();
    },[]);

    const getBeerDetails = () => {
        axios.get(`${API_URL}/beers/${beerId}`)
            .then(response => {
                setBeerDetails(response.data)
            })
            .catch(error => console.log("error to get beer details : ", error));
    }

    return(
        <div>
            <h1>Beer Details</h1>
            {beerDetails === null ? (
            <h2>Loading...</h2>
          ) : (
            <div className="BeerDetailsPage-beer">
                <img src={beerDetails.image_url} />
                <h2>{beerDetails.name}</h2>
                <h3>{beerDetails.tagline}</h3>
                <p>First brewed : {beerDetails.first_brewed}</p>
                <p>Attenuation level : {beerDetails.attenuation_level}</p>
                <p>{beerDetails.description}</p>
                <p><i>Contributed by {beerDetails.contributed_by}</i></p> 
            </div>
            
          )
        }
        </div>
        
        
    );
}

export default BeerDetailsPage;
