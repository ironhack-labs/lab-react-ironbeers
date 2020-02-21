import React from 'react'
import {Link} from 'react-router-dom';

const Card = ({img, name,description}) => {
    return (
        <div className="card-home-component">
            <img src={img} alt=""/>
            {name==='All Beers' ? <h1><Link  to='/beers' exact>{name}</Link></h1> : 
             name==='Random Beer' ? <h1><Link  to='/randomBeer' exact>{name}</Link></h1> : 
                    <h1><Link  to='/newBeer' exact>{name}</Link></h1>}
            <p> {description} </p>
        </div>
    )
}

export default Card
