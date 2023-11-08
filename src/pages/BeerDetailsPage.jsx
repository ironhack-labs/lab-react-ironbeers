import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL= "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetailsPage() {
    const {beerId} = useParams()

    const[beer, setBeer] = useState()


    useEffect(() => {
        axios.get(`${API_URL}/${beerId}`).then((response) => {
            setBeer(response.data)
            console.log(beer)
          })
          .catch((error) => console.log(error));
      }, []);

    return (
        <>
            {beer && (
            <div>
                <img src={beer.image_url} alt="Beer Image" />
                <h1>{beer.name}</h1>
                <p>{beer.description}</p>
                <h3>{beer.tagline}</h3>
                <h4>{beer.attenuation_level}</h4>
                <h2><i>{beer.contributed_by}</i></h2>
            </div>
        )}
        </>
    )
}

export default BeerDetailsPage;