    
import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = (theBeer) => {
    return (
      //console.log(theBeer)
        <div className="template">
    
                <img src={theBeer.image_url} alt={theBeer.name} />
                <div className='header'>
                    <h2>{theBeer.name}</h2>
                    <p>{theBeer.tagline}</p>
                    <p>{theBeer.contributed_by}</p>
                    <Link className="button" to={`/beers/${theBeer._id}`}> Details </Link>
                </div>
          
        </div>
    )
}

export default BeerCard