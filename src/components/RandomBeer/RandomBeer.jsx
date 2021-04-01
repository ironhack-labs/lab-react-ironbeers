import React, { useState, useEffect } from 'react'
import { getRandomBeer } from '../../services/BaseService'
import BeerContent from '../BeerContent/BeerContent'

const RandomBeer = () => {

    const [beer, setbeer] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getRandomBeer().then(res => {
            setbeer(res)
            setLoading(false)
        })
    }, [])

    return (
        <div className="container mt-5">
            { loading
                ?   'Loading...'
                :   <BeerContent {...beer} />
            }
        </div>
    )
}

export default RandomBeer