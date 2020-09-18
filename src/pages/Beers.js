import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import axios from "axios"
import { Link } from 'react-router-dom'

const Beers = () => {
    const [beers, setBeers] = useState(null)

    async function getData() {
        const { data } = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        setBeers(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return ( <div >
        <Header/>
        <div> {
            beers ? (
                beers.map(beer => ( 
                <div key = { beer._id }>
                    <img src = { beer.image_url }/> 
                    <p> { beer.name } </p> 
                    <p> { beer.tagline } </p> 
                    <p> Created by: { beer.contributed_by } </p> 
                    <Link to = { beer._id }> Detail </Link> 
                    </div>
                ))
            ) : ( 
            <p> Loading... </p>
            )
        } 
        </div>                  
         </div >
    )
}

export default Beers 