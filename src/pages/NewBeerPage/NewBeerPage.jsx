import { useState } from 'react'
import './../../components/App.css'
import { Container, Col, Form, Button } from 'react-bootstrap'
import beerService from './../../services/beer.services'
import Navbar from '../../components/NavBar/NavBar'

const NewBeerPage = ({ loadBeers }) => {

    const [newBeer, setNewBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    })


    const handleInputChange = event => {
        const { name, value } = event.target
        setNewBeer({ ...newBeer, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        beerService
            .saveBeer(newBeer)
            .then(() => {
                loadBeers()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Navbar />
            <Container>

                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="mt-5">Crea tu propia Cerveza</h1>
                    <hr />

                    <Form className="mt-5 mb-5" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" value={newBeer.name} onChange={handleInputChange} name="name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="tagline">
                            <Form.Label>Eslogan</Form.Label>
                            <Form.Control type="text" value={newBeer.tagline} onChange={handleInputChange} name="tagline" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" value={newBeer.description} onChange={handleInputChange} name="description" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="first_brewed">
                            <Form.Label>Primera Elaboración</Form.Label>
                            <Form.Control type="text" value={newBeer.first_brewed} onChange={handleInputChange} name="first_brewed" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="brewers_tips">
                            <Form.Label>Tips de Elaboración</Form.Label>
                            <Form.Control type="text" value={newBeer.brewers_tips} onChange={handleInputChange} name="brewers_tips" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="attenuation_level">
                            <Form.Label>Graduación</Form.Label>
                            <Form.Control type="number" value={newBeer.attenuation_level} onChange={handleInputChange} name="attenuation_level" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contributed_by">
                            <Form.Label>Creado por</Form.Label>
                            <Form.Control type="text" value={newBeer.contributed_by} onChange={handleInputChange} name="contributed_by" />
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="dark" type="submit">Añadir nueva cerveza</Button>
                        </div>
                    </Form>
                </Col>
            </Container>
        </>

    )
}

export default NewBeerPage