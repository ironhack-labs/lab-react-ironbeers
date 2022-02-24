import { useState, useEffect, } from 'react'
import beersService from '../../services/beers.service'
import {  useParams } from 'react-router-dom'

function BeerDetail() {
    const { beer_id } = useParams()
    const [beer, setBeer] = useState([])
     useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = ()=> {
        beersService
            .getBeer(beer_id)
            .then(({data})=>setBeer(data))
            .catch(err=> console.log(err))
    }
    return ( 
        <>
        {
            <section key={beer.id}>
                <img src={beer.image_url} />
              
                    <h1>{beer.name}</h1>
           
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>Created by: {beer.contributed_by}</p>
                <hr/>
            </section> 
            
            }
        
        </>

     )
}

export default BeerDetail