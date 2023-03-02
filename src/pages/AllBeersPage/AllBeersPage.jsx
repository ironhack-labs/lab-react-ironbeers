import { useEffect, useState } from 'react'
import beersService from '../../services/services'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './AllBeersPage.css'
import { Link } from 'react-router-dom'

const AllBeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => {
                setBeers(data)
            })
            .catch(err => console.log(err))
    }


    return (
        <Container>
            <h1>All Beers</h1>
            <hr />

            <Row>
                {
                    beers.map(elm => {

                        const link = `/beers/${elm._id}`

                        return (
                            < Col key={elm._id} className="col-3" >
                                <Card className='m-3 p-3'>
                                    <Card.Img variant="top" src={elm.image_url} className="beer-img" />
                                    <hr />
                                    <Link to={link} className="text-decoration-none"><h5>{elm.name}</h5></Link>
                                    <Card.Text>{elm.tagline}</Card.Text>
                                    <Card.Text> <strong>Created by: </strong> {elm.contributed_by}</Card.Text>
                                </Card>
                            </Col>
                        )
                    })
                }

            </Row>


        </Container >
    )
}

export default AllBeersPage