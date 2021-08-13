import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './BeerCard.css'

const BeerCard = props => {
    const contributor = props.beer.contributed_by ? props.beer.contributed_by.match(/.+?(?=<)/) ? props.beer.contributed_by.match(/.+?(?=<)/)[0] : props.beer.contributed_by : ''
    return (
        <Link to={{
            pathname: `/beer/${props.beer._id}`,
            state: {beer: props.beer}
        }} className='beer-card'>
            <div className='beer-card-img'>
                <img src={props.beer.image_url} alt={props.beer.name}/>
            </div>
            <div className="beer-card-info">
                <h2>{props.beer.name}</h2>
                <h3>{props.beer.tagline}</h3>
                <p><span className='beer-card-creator'>Created by: </span>{contributor}</p>
            </div>
        </Link>
    )
}

export default withRouter(BeerCard)
