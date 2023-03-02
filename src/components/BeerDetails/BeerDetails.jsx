import Navbar from '../NavBar/Navbar'
import BeersService from '../../services/beers.services'
import { useEffect, useState } from 'react'


function BeerDetails() {


    return (
        <div>

            <Navbar />

            <div>
                {/* <h1>{beer.name}</h1>
                <img src={beer.image_url} alt={beer.name} />
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p> */}
            </div>
        </div>
    )
}

export default BeerDetails