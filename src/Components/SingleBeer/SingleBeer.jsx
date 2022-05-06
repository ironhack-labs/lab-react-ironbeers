import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import IronService from './../../services/IronBeers.service'


import { Link, useParams } from 'react-router-dom'


const SingleBeer = () => {

    const [SingleBeer, setSingleBeer] = useState([])

    const { id } = useParams()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        IronService
            .getOneBeers(id)
            .then(({ data }) => setSingleBeer(data))
            .catch(err => console.log(err))
    }

    return (

        <Container>
            <Row>
                <Col md={6}>
                    <div key={SingleBeer.id}>
                        <img src={SingleBeer.image_url} alt="" srcset="" />
                        <h3>{SingleBeer.name}</h3>
                        <p>{SingleBeer.description}</p>
                        <hr />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleBeer;