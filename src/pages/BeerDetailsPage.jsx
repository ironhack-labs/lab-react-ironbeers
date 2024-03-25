import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {

    const [beerInfo, setBeerInfo] = useState("");
    const {beerId} = useParams();


    useEffect(()=>{
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response)=>{
                setBeerInfo(response.data);
            })
    }, [beerId]);

    return(
        <div>
            <img src={beerInfo.image_url}></img>
            <h3>{beerInfo.name}</h3>
            <p>{beerInfo.tagline}</p>
            <p>{beerInfo.first_brewed}</p>
            <p>{beerInfo.description}</p>
            <p>{beerInfo.attenuation_level}</p>
            <p>{beerInfo.contributed_by}</p>
        </div>
    )
}


export default BeerDetailsPage;	
