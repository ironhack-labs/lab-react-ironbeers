import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'

const SingleBeer = (props) => {
    const params    = useParams()
    const { beers } = props

    const singleBeer = beers.filter((beer) => {
        return beer._id === params.beerId
    })

    return (
        <>
            <Header />
            <div>
                <img src={singleBeer[0].image_url} alt={singleBeer[0].name} />
                <h1>{singleBeer[0].name}</h1>
                <p>{singleBeer[0].tagline}</p>
                <p>{singleBeer[0].first_brewed}</p>
                <p>{singleBeer[0].attenuation_level}</p>
                <p>{singleBeer[0].description}</p>
                <p>{singleBeer[0].contributed_by}</p>
            </div>
        </>
        
      )

}
export default SingleBeer