import { useState } from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import beersService from "../../services/beers.service"
import { Navigate } from 'react-router-dom';

const FormCreateBeer = () => {
    const [created, setCreated] = useState(false)
    const [beer, setBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setBeer({ ...beer, [name]: value })
    }

    const handleBeerSubmit = (e) => {
        e.preventDefault()

        beersService
            .createBeer(beer)
            .then(() => setCreated(true))
            .catch(err => console.log(err))
    }

    if (created) return <Navigate to="/beers" />

    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="m-3" md={{ span: 8, offset: 1 }}>
                    <h1 className="text-center">Create new beer</h1>

                    <Form onSubmit={handleBeerSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" value={beer.name} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Tagline</Form.Label>
                            <Form.Control name="tagline" type="text" value={beer.tagline} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" type="text" value={beer.description} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>First Brewed</Form.Label>
                            <Form.Control name="first_brewed" type="text" value={beer.first_brewed} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Brewers tips </Form.Label>
                            <Form.Control name="brewers_tips" type="text" value={beer.brewers_tips} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Attenuation level </Form.Label>
                            <Form.Control name="attenuation_level" type="number" value={beer.attenuation_level} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Contributed By</Form.Label>
                            <Form.Control name="contributed_by" type="text" value={beer.contributed_by} onChange={handleInputChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>

    )
}
export default FormCreateBeer