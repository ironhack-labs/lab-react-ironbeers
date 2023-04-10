import axios from "axios";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BeerDetails(){
    
    const [beer, setBeer] = useState(null);

    const {beerId} = useParams();


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_APIURL}/${beerId}`)
            .then((response) => {
                setBeer(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [beerId])

    const renderBeer = () => {
        return (
            <>
                <img src={beer.image_url} alt={beer.name} />
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>First Brewed: {beer.first_brewed}</p>
                <p>Attenuation Level: {beer.attenuation_level}</p>
                <p>Description: {beer.description}</p>
                <p>Created by: {beer.contributed_by}</p>
            </>
        );
    };

    return(
        <>
            <Header/>

            {beer ? renderBeer() : <h1>Loading...</h1>}

            <Link to={"/beers"}>Go Back</Link>
        </>
    );
}