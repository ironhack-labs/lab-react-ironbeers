import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Beers() {
    const [beersLst, setBeers] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
            console.log("beers:",response.data)
            setBeers(response.data)
        })  
    }, [])
    return(
        {beersLst}.map((beer) => (
            <div>
                <img src={beer.image} alt="beer" />
            </div>
        ))

    )}
export default Beers