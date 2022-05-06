import { useState, useEffect } from 'react'
import { Container, Row, Col, Modal, Button, } from 'react-bootstrap'
import IronService from './../../services/IronBeers.service'
import { Link } from 'react-router-dom'
import NewBeerForm from '../NewBeer/NewBeer'




const HomePage = () => {

    const [Beers, setBeers] = useState([])
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        IronService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    return (
        <>
            <Container>
                <Row>
                    <Modal show={showModal} onHide={handleModalClose} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Nuevo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <NewBeerForm closeModal={handleModalClose} refreshCoasters={loadBeers} />
                        </Modal.Body>
                    </Modal>

                    <Link to={"/random"}>Random?</Link>

                    {Beers.map((b) => {
                        return (
                            <Col md={6} key={b.id}>
                                <img src={b.image_url} />
                                <h3><Link to={`/${b._id}`}> {b.name}</Link></h3>
                                <p>{b.description}</p>

                                <hr />
                            </Col>
                        );
                    })}

                    <Button variant="primary" onClick={handleModalOpen}>
                        Nuevo
                    </Button>










                </Row>

            </Container>

        </>



    )
}
export default HomePage