import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BeerDetailsPage() {
const [beer, setBeer] = useState()
const {beerID} = useParams()

useEffect(()=> {
    axios 
    .get(`https://ih-beers-api2.herokuapp.com/beers/${beerID}`)
    .then ((response)=> {
        setBeer(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
},[])

    return (
        
        <div>
            <img src={beer.image_url}/>
            {beer.name}
            {beer.tagline}
            {beer.first_brewed}
            {beer.attenuation_level}
            {beer.description}
            {beer.contributed_by}
        </div>
        

    )
}

export default BeerDetailsPage;
