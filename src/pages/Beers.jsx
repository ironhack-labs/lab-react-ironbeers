import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Beers() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                setBeers(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <Header></Header>
            {beers.map((oneBeer) => {
                return (
                    <div key={oneBeer._id}>
                    <Link to={oneBeer._id}>
                        <ul>
                            <img src={oneBeer.image_url} alt="" style={{ width: 60 }} />
                            <h2>{oneBeer.name}</h2>
                            <h3>{oneBeer.tagline}</h3>
                            <p>Created by: {oneBeer.contributed_by}</p>
                        </ul>
                    </Link>

                    </div>
                )
            })}
        </>
    )
}

export default Beers