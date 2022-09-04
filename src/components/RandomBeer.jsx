import React from 'react'
import './RandomBeer.css'

export const RandomBeer = ({data}) => {

    const randNumber = Math.floor(Math.random()*data.length)

    const randBeer = data[randNumber];

  return (
    <div>
        <h1 className="titre">Random Beer</h1>
        <div className ="container">
            <div>
            <h1>{randBeer.name}</h1>
            <img src={randBeer.image_url} alt={"a"}/>
            <p>{randBeer.description}</p>
            <p>Tags: {randBeer.tagline}</p>
            <p>Contributed by: {randBeer.contributed_by}</p>
            </div>
        </div>
    </div>
  )
}

export default RandomBeer;