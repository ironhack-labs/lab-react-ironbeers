import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/";

function BeerDetailsPage() {

    const [beer, setBeer] = useState("");

    const [beerId] = useParams();

    useEffect(()=>{
        axios.get(`${API_URL}/beers/${beerId}`).then
        ((response)=>{
            const oneBeer = response.data;
            setBeer(oneBeer);
        })
        .catch((error)=>console.log(error));
    }, [])


    return(
        <div>
            {beer &&(
                <div>
                    <img src={beer.image_url}/>
                    <p>{beer.name}</p>
                    <p>{beer.tagline}</p>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            )}
        </div>
    )
}

export default BeerDetailsPage;
