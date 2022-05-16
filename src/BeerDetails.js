import axios from "axios";
import react from "react";
import { useState, useEffect } from 'react'

function BeerDetails() {

    const [ beer, setBeer] = useState([]);


        useEffect( () => {
            axios.get('https://ih-beers-api2.herokuapp.com/beers')
                .then( response => {
                    console.log(response.data)
                })
                .catch( e => console.log('error on get route beers', e))
        },[])

    return(
        <div>


    {beer.map( (element) => {
            return(
                <div>
                    <img src={element.image_url} />
                    <h2>{element.name}</h2>
                    <h3>{element.tagline}</h3>
                    <h3>{element.first_brewed}</h3>
                    <h3>{element.attenuation_level}</h3>
                    <h3>{element.description}</h3>
                    <h3>{element.contributed_by}</h3>
                </div>
            )
        })}
            

        </div>
    )
}

export default BeerDetails;