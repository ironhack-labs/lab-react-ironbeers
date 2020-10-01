import React from 'react'

import { Link } from 'react-router-dom'

import './IndexBeers.css'

import Button from 'react-bootstrap/Button'

const IndexBeers = () => {
    return (
        <>
            <div className='centerBtn'>
                <Link to={'/beers'}>
                    
                    <Button className='btnIndex' variant="info" size="sm" >All Beers</Button>
                </Link>
                <Link to={'/random'}>
                    <Button className='btnIndex' variant="info" size="sm" >Random Beer</Button>
                </Link>
                <Link to={'/new'}>
                    <Button className='btnIndex' variant="info" size="sm" >New Beer</Button>
                </Link>

            </div>

        </>
    )
}

export default IndexBeers