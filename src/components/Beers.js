import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function Beers(props) {
    return (
        <div>
            <Header/>
            {props.beers.map((elm) => { return (
                <>
                <h2>{elm.name}</h2>
                <p>{elm.tagline}</p>
                <p>By: {elm.contributed_by}</p> 
                <img src={elm.image_url}/>
                <Link exact to={`/beers/${elm._id}`}>See more</Link>
                </>
            )})}
        </div>
    )
}
