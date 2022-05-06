import { useEffect, useState } from "react"
import { Container, Row, Col } from 'react-bootstrap'


import axios from "axios"

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(({ data }) => {
                setRandomBeer(data)
            })
    }, [])

    return (
        <>

            <Container>
                <h1>{randomBeer.name}</h1>
                <hr />
                <Row>
                    <Col md={{ span: 6 }}>
                        <img className="img-detail" src={randomBeer.image_url} alt="" />
                    </Col>
                    <Col md={{ span: 3 }}>
                        <h2><strong>{randomBeer.tagline}</strong></h2>
                        <p>{randomBeer.description}</p>
                        <p><strong>First brewed</strong><br></br> {randomBeer.first_brewed}</p>

                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default RandomBeer 