

import { useState } from "react"
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import beerService from "../../services/beers.services"


const NewBeer = () => {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by : ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        beerService
            .createNewBeer(beerData)
            .then(() => {
                console.log('ok')
            })
            .catch(err => console.error(err))
    }

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData


    return (

        <Container className="mt-5">

        
        <Form onSubmit={handleFormSubmit}>
            
            <Row>
                <Col>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="tag">
                        <Form.Label>Eslogan</Form.Label>
                        <Form.Control type="text" value={tagline} onChange={handleInputChange} name="tagline" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>

                    <Form.Group className="mb-3" controlId="cont">
                        <Form.Label>Creada por</Form.Label>
                        <Form.Control type="text" value={contributed_by} onChange={handleInputChange} name="contributed_by" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="brew">
                        <Form.Label>Fecha creación</Form.Label>
                        <Form.Control type="text" value={first_brewed} onChange={handleInputChange} name="first_brewed" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>

                    <Form.Group className="mb-3" controlId="tips">
                        <Form.Label>Recomendaciones</Form.Label>
                        <Form.Control type="text" value={brewers_tips} onChange={handleInputChange} name="brewers_tips" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="atte">
                        <Form.Label>Atenuación</Form.Label>
                        <Form.Control type="number" value={attenuation_level} onChange={handleInputChange} name="attenuation_level" />
                    </Form.Group>
                </Col>
            </Row>

            <Col>
                    <Form.Group className="mb-3" controlId="des">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="textarea" value={description} onChange={handleInputChange} name="description" />
                    </Form.Group>
                </Col>


            <div className="d-grid">
                <Button variant="dark" type="submit">Crear montaña rusa</Button>
            </div>
            </Form>
        </Container>
        
    )
    
}

export default NewBeer