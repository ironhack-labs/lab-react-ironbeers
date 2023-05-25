import Navigation from '../../components/Navbar/Navbar'
import { Card, Row, Container } from 'react-bootstrap'
import beerServices from '../../services/BeerServices'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function BeerPage() {

  const [beer, setBeer] = useState()

    const loadBeers = () => {
        beerServices
            .getAllBeers()
            
            .then(({ data }) => {
                
                setBeer(data)

            })
            
            .catch((err) => console.log(err))
    }


    useEffect(() => { 
        loadBeers()
    })          

    return (
        <>
            <Navigation />

            <Container>

                <h1>All the beers</h1>

                <hr />

                <Row>
                    {
                        !beer
                            ?
                            <p>Cargando...</p>
                            :
                            beer.map(elm => {

                            return (
                                <Card key={elm.id} style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={elm.image_url} />
                                    <Card.Body>
                                        <Card.Title>{elm.name}</Card.Title>
                                        <Card.Text>{elm.tagline}</Card.Text>
                                        <Card.Text><strong>Created by: </strong>{elm.contributed_by}</Card.Text>
                                        <Link to={`/${elm._id}`} >Details</Link>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>

            </Container>
        
        </>
    )
}

export default BeerPage

