import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com"

function RandomBeersPage() {

    const[beerDetails, setBeerDetails] = useState(null);

    useEffect(() => {
        getRandomBeerDetails();
    },[]);

    const getRandomBeerDetails = () => {
        axios.get(`${API_URL}/beers/random`)
            .then(response => {
                setBeerDetails(response.data)
            })
            .catch(error => console.log("error to get random beer details : ", error));
    }

    return(
        <div>
            <h1>Random Beer</h1>
            {beerDetails === null ? (
            <h2>Loading...</h2>
          ) : (
            <div className="RandomBeerPage-beer">
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


export default RandomBeersPage;
