import React from 'react'
import {randomBeer} from '../services/index'

const Random = async () => {
    let beer = await randomBeer()
    return (
        <div>
        <img src={beer.image_url} style={{width: '10%'}} alt="chela"/>
        <h3>{beer.name}</h3>
        <p>{beer.description}</p>
    </div>
    )
}

export default Random
