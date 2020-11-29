import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

export default function BeerDetails({match: { params: { id } }, history}) {
    const [beer, setBeers] = useState(null)

    useEffect(() => {
        async function getBeerData(){
            const {data} = await axios.get(`${baseURL}${id}`)
            setBeers(data)
        }
        getBeerData()
    }, [])

    return beer ? (
        <div>
            <img src={beer.image_url}/>
            <div>
                <h2>{beer.name}</h2>
                <h2 style={{color:"grey"}}>{beer.attenuation_level}</h2>
            </div>
            <br/>
            <div>
                <h4 style={{color:"grey"}}>{beer.tagline}</h4>
                <h4>{beer.first_brewed}</h4>
            </div>
            <br/>
            <p>{beer.description}</p>
            <small style={{color:"grey"}}>{beer.contributed_by}</small>
        </div>
    ) : (
        <h2>Loading...</h2>
    )
}
