import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import IronService from './../../services/IronBeers.service'


import { Link, useParams } from 'react-router-dom'


const RandomBeer = () => {

    const [RandomBeer, setRandomBeer] = useState([])



    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        IronService
            .getRandom()
            .then(({ data }) => setRandomBeer(data))
            .catch(err => console.log(err))
    }

    return (

        <Container>
            <Row>
                <Col md={6}>
                    <div key={RandomBeer.id}>
                        <img src={RandomBeer.image_url} alt="" srcset="" />
                        <h3>{RandomBeer.name}</h3>
                        <p>{RandomBeer.description}</p>
                        <hr />

                    </div>


                </Col>
            </Row>
        </Container>
    )
}

export default RandomBeer;