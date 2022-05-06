import { useState } from 'react';
import beersService from '../../services/beers.service'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'



function ListBeers(){

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
        
    }, [])

    const loadBeers = () => {
    beersService
        .getAllBeers()
        .then(({data}) => setBeers(data))
    }

    return(
    beers.map((eachBeer) => {
        return (
            <div>
            <img src={eachBeer.image_url} alt=''/>
            <Link to={`/beers/${eachBeer._id}`}>
                <p>
                    {eachBeer.name}
                </p>
            </Link>
            <p>
                {eachBeer.tagline}
            </p>
            <p>
                {eachBeer.contributed_by}
            </p>
            </div>
        )
    })
    )
}

export default ListBeers