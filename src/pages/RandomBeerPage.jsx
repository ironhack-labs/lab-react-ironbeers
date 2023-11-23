
import axios from "axios"
import { Link } from "react-router-dom"

import { useState, useEffect } from "react"

function RandomBeersPage() {

    const [beer, setBeer] = useState()

    useEffect(() => {

        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))

    }, [])


    console.log(beer)
    return (
        <>
            {
                beer
                    ?
                    <div>
                        <img style={{ width: '100px' }} src={beer.image_url}></img>
                        <p>{beer.name}</p>
                        <p>{beer.tagline}</p>
                        <p>{beer.first_brewed}</p>
                        <p>{beer.attenuation_level}</p>
                        <p>{beer.description}</p>
                        <p>{beer.contributed_by}</p>

                        <Link to={'/beers'}>Volver a la lista </Link>


                    </div>
                    :
                    <h1>CARGANDO ....</h1>
            }
        </>


    )
}

export default RandomBeersPage
