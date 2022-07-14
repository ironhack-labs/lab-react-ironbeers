import { useEffect, useState } from "react"
import beerService from '../../services/AllBeers.service'
import { Col, Row, Card, Button, Modal } from 'react-bootstrap'
import '../../components/AllBeers/AllBeers.css'

const AllBeers = () => {

    const [beers, setBeers] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {

        beerService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.error(err))
    }

    return (
        <>
            <h1>Todas las cervezas</h1>
            <Row className="AllBeers">

                {

                    beers.map(elm => {
                        return (

                            <Card style={{ width: '20rem' }}>

                                <Card.Body>
                                    <Col md={6} mb={2} key={elm._id} >
                                        <img src={`${elm.image_url}`} alt="Image" />
                                        <p>{elm.name}</p>
                                        <p>{elm.tagline}</p>
                                    </Col>
                                    <Button a href={`/beers/${elm._id}`} variant="dark">Ver detalles</Button>

                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Row>
        </>
    )
}
export default AllBeers