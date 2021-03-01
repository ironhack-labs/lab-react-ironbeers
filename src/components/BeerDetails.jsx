import React, {useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

export default function BeerDetails() {

    const { id } = useParams()

    const [beerDetails, setBeerDetails] = useState([])

    const getBeerDetails = async() => {
        console.log(id)
        let resServer = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        resServer = await resServer.data[id]
        
        console.log(resServer)
        setBeerDetails(resServer)
        console.log(resServer)
    }


    useEffect(() => {
        getBeerDetails()
    },[])


    return (
        <div>
           <p>{beerDetails.name}</p>
           <p>{beerDetails.tagline}</p>
           <p>{beerDetails.first_brewed}</p>
           <p>{beerDetails.attenuation_level}</p>
           <p>{beerDetails.description}</p>
           <p>{beerDetails.contributed_by}</p>
        </div>
    )
}
