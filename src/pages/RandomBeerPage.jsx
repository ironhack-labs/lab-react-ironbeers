import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeerPage() {


    const [beer, setBeer]= useState([]);

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then((response)=>{
            setBeer(response.data);

    })
    },[])


    return(
        <section>
        <div className="beer-details-container">
            <h1>{beer.name}</h1>
            <img src={beer.image_url} alt="" />
            <h4>Tagline: {beer.tagline}</h4>
            <h6>First Brewed: {beer.first_brewed}</h6>
            <h6> Attenuation Level : {beer.attenuation_level}</h6>
            <h6>Contributed by: {beer.contributed_by}</h6>
            <p>{beer.description}</p>
        </div>

        </section>
    )
}

export default RandomBeerPage;
