import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1 className='label'>Home page</h1>
            <Link className='button is-success ml-2 mr-2' to={'/beers'} >All Beers</Link>
            <Link className='button is-success ml-2 mr-2' to={'/random-beer'} >Random Beer</Link>
            <Link className='button is-success ml-2 mr-2' to={'/new-beer'} >New Beer</Link>
        </div>
    )
}
