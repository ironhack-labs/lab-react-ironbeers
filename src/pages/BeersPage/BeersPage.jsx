import { useEffect, useState } from "react"
import { Card, Col, Row } from 'react-bootstrap'
import beersService from "../../services/beers.service"
import { Link } from "react-router-dom"
import InputSearchBeer from "../../components/InputSearchBeer/InputSearchBeer"

const BeersPage = () => {

    const [beersBackup, setBeersBackup] = useState([])
    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => {
                setBeers(data)
                setBeersBackup(data)
            })
            .catch(err => console.log(err))
    }

    const searchBeer = (e) => {
        if (e.target.value === '') return setBeers(beersBackup)

        beersService
            .searchBeer(e.target.value)
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))

    }

    return (
        <Row >
            <Col md={{ span: 8, offset: 2 }}>
                <Row className="d-flex justify-content-center ">
                    <Col className="my-5" md={{ span: 10 }}>
                        <InputSearchBeer searchBeer={searchBeer} />

                    </Col>

                    {
                        beers.map(({ name, _id, image_url, description, contributed_by }) => {
                            return (
                                <Col className="m-3" key={_id} md={{ span: 3, offset: 1 }}>
                                    <Link to={`/${_id}`} >
                                        <Card style={{ minHeight: '500px' }}>
                                            <Card.Img variant="top" src={image_url} style={{ height: '200px', objectFit: 'contain' }} />
                                            <Card.Body className="d-flex flex-column justify-content-center">
                                                <Card.Title>{name}</Card.Title>
                                                <Card.Text>
                                                    {description}
                                                    <br />
                                                    <strong>Contributed by:</strong> {contributed_by}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row >
            </Col>
        </Row >
    )
}
export default BeersPage
