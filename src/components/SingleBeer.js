import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Header from "./Header"

export default function SingleBeer(){

const {beerId} = useParams()

const [beerDetails, setBeerDetails] = useState({})

useEffect(()=> {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/"+beerId)
    .then((responseFromAPI)=>{setBeerDetails(responseFromAPI.data)})
    .catch((err)=>{console.log(err)}
    ,[]);
    
})

    return(
        <div>
            <Header/>
            <h1>Details of one beer</h1>
            <img src={beerDetails.image_url} alt="beer"/>
            <p>{beerDetails.name}</p>
            <p>{beerDetails.tagline}</p>
            <p>{beerDetails.first_brewed}</p>
            <p>{beerDetails.attenuation_level}</p>
            <p>{beerDetails.description}</p>
            <p>{beerDetails.contributed_by}</p>
        </div>
    )
}