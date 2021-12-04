import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from "react"

function BeerDetail() {

    let {beerId} = useParams()
    let [beerDetail, setBeer] = useState(null)

    useEffect(() => {
        
        const getData = async () => {
           let response  = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
           setBeer(response.data)
        //    console.log(response.data)  
           
       }
       console.log(beerDetail)
       getData()
       
   }, [beerId])


   if(!beerDetail){
       return <h1>loading...4</h1>
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

export default BeerDetail
