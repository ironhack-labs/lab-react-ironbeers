import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetails() {

    let {id} = useParams();
    const [beerDetails, setBeerDetails] = useState(null);

    useEffect( () => {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers/' + id)
        .then((response) => {
          setBeerDetails(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }, []);

    return (
        <>
            {beerDetails === null 
            ? <p>Loading</p>
            : <>
            <h1>This are the details of {beerDetails.name}</h1>
            <img src={beerDetails.image_url}/> 
            <h1>Name: {beerDetails.name}</h1>
            <p>Tagline: {beerDetails.tagline}</p>
            <p>First brewed: {beerDetails.first_brewed}</p>
            <p>Attenuation level: {beerDetails.attenuation_level}</p>
            <p>Description: {beerDetails.description}</p>
            <p>Contributed by: {beerDetails.contributed_by}</p>
            </>
            }
        </>
    )
}

export default BeerDetails