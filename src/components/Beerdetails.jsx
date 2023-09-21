import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Homebutton from './Homebutton'
import { useState, useEffect } from "react"
import axios from "axios"

function Beerdetails() {
    const [oneBeer, setOneBeer] = useState(null);
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((response) => {
                setOneBeer(response.data)
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Homebutton></Homebutton>

            {!oneBeer && <h2>...Loading</h2>}

            {oneBeer && (
                <div className='card'>
                    <div>
                        <img src={oneBeer.image_url} alt="beer" width={60} />                 
                        <h2>{oneBeer.name}</h2>
                        <h5 className='color-detail'>{oneBeer.tagline}</h5>
                        <h5>{oneBeer.first_brewed}</h5>
                        <h5>{oneBeer.attenuation_level}</h5>
                        <h5>{oneBeer.description}</h5>
                        <h5>{oneBeer.contributed_by}</h5>
                    </div>
                </div>
            )}
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