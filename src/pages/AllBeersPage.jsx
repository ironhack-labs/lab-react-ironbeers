import './../components/App.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap'

function AllBeersPage() {

    useEffect(() => {

        axios.get("https://ih-beers-api2.herokuapp.com/beers")

            .then(response => {
                setBeers(response.data)
                console.log(response.data)
            })

            .catch(err => console.log(err))
    }, [])

    const [beers, setBeers] = useState('')

    return (

        <Container style={{ maxHeight: "90vh", overflow: "scroll" }}>

            <Row className="d-flex justify-content-center align-items-center mt-5">

                {
                    beers ?

                        beers.map(beer => {

                            return (

                                <Col md={4} key={beer._id} className="mb-5 text-center">

                                    <img className="beersPictures"
                                        src={beer.image_url}
                                        alt={beer.name}
                                    />

                                    <Link
                                        to={`/beers/${beer._id}`}
                                        className="list-group-item list-group-item-action">
                                        <h1> {beer.name} </h1>
                                    </Link>

                                    <h4 key={beer.tagline}> {beer.tagline}</h4>

                                    <p> <strong>Created by:</strong> {beer.contributed_by}</p>

                                </Col>
                            )
                        })

                        : 'Loading...'
                }

            </Row>
        </Container>

    )
}

export default AllBeersPage