import { useEffect, useState } from "react"

import beersService from '../services/beers.service'
import { Link } from "react-router-dom"

function AllBeersPage() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }
    return (
        <div>
            { beers.map((beer, i) => {
                return (
                    <Link to={`/beers/${beer._id}`} key={ i }>
                        <img src={ beer.image_url } alt={ beer.name } />
                        <p>{ beer.name }</p>
                        <p>{ beer.tagline }</p>
                        <p>{ beer.contributed_by }</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default AllBeersPage
