import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios'

function RandomBeer(props) {

    let [beerDetail, setBeer] = useState(null)

    useEffect(() => {
        
        const getData = async () => {
           let response  = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
           setBeer(response.data)
        //    console.log(response.data)  
           
       }
       getData()
       
   }, [])

   if(!beerDetail){
    return <h1>loading...</h1>
}

    
    return (
        <div>
        <img src={beerDetail.image_url} alt="img" height="500px"></img>
        <h1>{beerDetail.name}</h1>
        <h2>{beerDetail.first_brewed}</h2>
        <h3>{beerDetail.tagline}</h3>
        <h3>{beerDetail.attenuation_level}</h3>
        <p>{beerDetail.description}</p>
        <h6>{beerDetail.contributed_by}</h6>
        </div>
    )
}

export default RandomBeer
