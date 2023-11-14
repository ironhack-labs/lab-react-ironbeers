import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com"


function BeerDetailsPage (props) {
const [beer, SetBeer] = useState(null)
const {beerId} = useParams()

const getBeers = () =>{
    axios.get(`${API_URL}/beers/${beerId}`)
    .then((reponse)=>

     SetBeer(reponse.data))
    
    .catch((error) => console.log(error))
} 

useEffect(() => {
    getBeers();
}, []);

    return(
        <div>
            {beer && (
                <>
                <img src={beer.image_url}/>
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <h3>{beer.first_brewed}</h3>
                <h4>{beer.attenuation_level}</h4>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
                </>
            )}





        </div>
    )
}

export default BeerDetailsPage;
