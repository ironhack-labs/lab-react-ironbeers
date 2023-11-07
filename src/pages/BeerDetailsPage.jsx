import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL= "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetailsPage() {
    const {beerId} = useParams()

    const[beer, setBeer] = useState()


    useEffect(() => {
        axios
          .get(`${API_URL}/${beerId}`)
          .then((response) => {
            const oneBeer = response.data
            setBeer(response.data)
          })
          .catch((error) => console.log(error));
      }, []);

    return (
        <div>
            {beer && (
            <div>
                <img src={beer.image_url} alt="" />
                <h1>{beer.name}</h1>
                <p>{beer.description}</p>
                <p>{beer.tagline}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.contributed_by}</p>
            </div>
        )}
        </div>
    )
}

export default BeerDetailsPage;
