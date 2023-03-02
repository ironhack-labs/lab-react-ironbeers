import { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import beersService from '../../services/services'

const NewBeerPage = () => {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleBeerSubmit = e => {
        e.preventDefault()

        beersService
            .saveBeer(beerData)
            .then(({ data }) => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1>New Beer</h1>
            <Row className="justify-content-center">
                <Col className="col-8">
                    <Form onSubmit={handleBeerSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={beerData.name} onChange={handleInputChange} />
                        </Form.Group>
                        <Row className="mb-3">

                            <Form.Group as={Col} className="mb-3" controlId="contributed_by">
                                <Form.Label>Contributed By</Form.Label>
                                <Form.Control type="text" name="contributed_by" value={beerData.contributed_by} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="first_brewed">
                                <Form.Label>First Brewed</Form.Label>
                                <Form.Control type="text" name="first_brewed" value={beerData.first_brewed}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="attenuation_level">
                                <Form.Label>Attenuation Level</Form.Label>
                                <Form.Control type="text" name="attenuation_level" value={beerData.attenuation_level} onChange={handleInputChange} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" name="description" value={beerData.description} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group controlId="tagline" className="mb-3">
                            <Form.Label>Tagline</Form.Label>
                            <Form.Control type="text" name="tagline" value={beerData.tagline} onChange={handleInputChange} />
                        </Form.Group>

                        <Button variant="dark" type="submit">Create Beer</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default NewBeerPage






