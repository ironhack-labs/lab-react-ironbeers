import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Beers() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => {
                console.log(res)
                setBeers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    console.log(beers)


    return (
        <div>
            <h1>All beerz</h1>
            <div className='beerListContainer'>
                {beers.map(beer => {
                    return <Card style={{ width: '18rem' }} className='beerListCard' key={beer._id}>
                        <Card.Img variant="top" src={beer.image_url} className='cardImg' />
                        <Card.Body>
                            <Card.Title><h3>{beer.name}</h3></Card.Title>
                            <Card.Text>
                                {beer.tagline}
                            </Card.Text>
                            <Link to={`/beers/${beer._id}`}> <Button variant="primary">Beer details</Button></Link>
                        </Card.Body>
                    </Card>
                })}
            </div>

        </div>
    )
}
