
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from "axios";


function Details(props) {

    const { id } = useParams();

    const beersArr = props.beers

   const beerDetails = beersArr.find((beer) =>{
       return beer._id == id
   })

   console.log(beerDetails);


    return (
        <div>
            
            { beerDetails && (
                <article>
                    <img src={beerDetails.image_url} alt={beerDetails.name} />
                    <h2>{ beerDetails.name }</h2>
                    <h3>{beerDetails.tagline}</h3>
                    <h3>{beerDetails.fist_brewed}</h3>
                    <h3>{beerDetails.attenuation_level}</h3>
                    <p>{beerDetails.description}</p>
                    <h6>Contributed by: {beerDetails.contributed_by}</h6>
            
                </article>
            ) }
       

        </div>
    )
}

export default Details