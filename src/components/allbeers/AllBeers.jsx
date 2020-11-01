import React from 'react'
import { Link } from 'react-router-dom'


export default function AllBeers(props) {

    const beersArray = props.beers

    return (
        <div className="row ">
        {beersArray.map(beer => 
            <div className='col'>
            <Link to={`/beer/beers/${beer._id}`} key={beer._id} style={{ textDecoration: 'none' }} className=' card text-decoration-none text-muted'>
                <img  style={{ width: '10vh' }}src={beer.image_url} alt=''></img>
                <h2 className='card-title mx-3 my-4 text-dark'>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <h4>Created by: {beer.contributed_by}</h4>
                <hr></hr>
            </Link>
            </div>
        )}
    </div>
    )
}
