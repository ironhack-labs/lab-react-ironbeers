import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Homebutton from './Homebutton'
import { useState, useEffect } from "react"
import axios from "axios"

function Beerdetails() {
    const [oneBeer, setOneBeer] = useState(null);
    const { id } = useParams;
    //console.log(id)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((response) => {
                setOneBeer(response.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Homebutton></Homebutton>
            {/* <p>{oneBeer.name}</p> */}
        </div>
    )
}

export default Beerdetails

// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by