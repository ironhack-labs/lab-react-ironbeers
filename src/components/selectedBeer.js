import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"




const SelectedBeer = () =>{

    const[beerToShow, setBeerToShow] = useState({})
    
    const {id} = useParams()
    
 

    useEffect(
        
        ()=>{
           axios
           .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
           .then(response => setBeerToShow(response.data))
       },
       []
   )

   
    return(
        <div className="beerDetails">
            



            <img src={beerToShow.image_url} alt=""/>
            <h2> Name: {beerToShow.name}</h2>
            <p>Tagline: {beerToShow.tagline}</p>
            <h2>Production started in: {beerToShow.first_brewed}</h2>
            <h2>Attenuation level: {beerToShow.attenuation_level}</h2>
            <p> Description: {beerToShow.description}</p>
            <p>Contributed by: {beerToShow.contributed_by}</p>


        </div>
    )
}

export default SelectedBeer