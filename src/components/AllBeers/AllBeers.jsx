import { useEffect, useState } from "react"
import Navbarapp from "../Navbarapp"
import beerService from "../Services/beer.service"
import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AllBeers() {

    const [beer, setBeer] = useState([])


    useEffect(() => {

        beerService
            .getAllBeers()
            .then(response => {
                setBeer(response.data)
            })
            .catch(err => console.log(err))

    }, [])

    console.log(beer)


    return (
        <Container>
            <Navbarapp />
            <Card>
                <Card.Img variant="top" src={beer[0].image_url} />
                <Card.Body className='links'>
                    <Link to='/beers' >
                        <Card.Title>{beer[0].name}</Card.Title>
                    </Link>
                    <Card.Text>{beer[0].tagline}</Card.Text>
                    <Card.Text>{beer[0].contributed_by}</Card.Text>
                </Card.Body>
            </Card>

        </Container>

    )
}

export default AllBeers