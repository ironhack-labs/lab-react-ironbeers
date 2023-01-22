import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BeerCard from '../components/BeerCard'
import { Link } from 'react-router-dom'

const Beers = () => {
    const [beers, setBeers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log('fetching from API')
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log(response.data)
                setBeers(response.data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {beers.map(beer => {
                return (
                    <Link to={`/beer/${beer._id}`}>
                        <BeerCard
                            key={beer._id}
                            {...beer}
                        />
                    </Link>
                )


            }
            )

            }
        </div>
    )
}

export default Beers