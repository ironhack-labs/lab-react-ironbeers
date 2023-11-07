import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = "https://ih-beers-api2.herokuapp.com/beers/random"

export default function RandomBeersPage(){
    const [beer, setBeer] = useState("");
    const {beerId} = useParams()
    useEffect(()=>{
        async function getBeerApi(){
            const beerRes = await axios.get(apiUrl)
            setBeer(beerRes.data);
            console.log(beerRes.data);
        }
        getBeerApi()
    }, []);

    return (

        <>
            {beer && (
            <div className="single-beer-container">
                <h2>{beer.name}</h2>
                <img src={beer.image_url} />
                <p><i>{beer.tagline}</i></p>
                <p>{beer.description}</p>
                <p>First Brewed: {beer.first_brewed}</p>
                <p>Attenuation Level: {beer.attenuation_level}</p>
                <p>Contributed by {beer.contributed_by}</p>
            </div>
            )}
        </>

    )
}