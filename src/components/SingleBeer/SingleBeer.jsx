import { useParams } from 'react-router-dom'
import beersService from '../../services/beers.service'
import { useState } from 'react';
import { useEffect } from 'react'

function SingleBeer(){

    const [beer, setBeer] = useState([])

    const { id } = useParams()

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
    beersService
        .getOneBeer(id)
        .then(({data}) => setBeer(data))
    }

    return(
        <div>
            <img src={beer.image_url} alt=''/>
            <p>
            {beer.name}
            </p>
            <p>
            {beer.tagline}
            </p>
            <p>
            {beer.first_brewed}
            </p>
            <p>
            {beer.attenuation_level}
            </p>
            <p>
            {beer.description}
            </p>
            <p>
            {beer.contributed_by}
            </p>
            

        </div>
    )
        
}

export default SingleBeer