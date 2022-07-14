import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useState } from "react"
import beerService from "../../services/beer.services"


const BeerForm = () => {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: '',
        contributed_by: '',
    })

    const handleChange = e => {
        const { value, name } = e.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        beerService
            .newBeer(beerData)
            .then((res) => {
                console.log('RESPUESTA', res)
            })
            .catch(ERR => console.error(ERR))
    }


    const { name, tagline, description, first_brewed, brewer_tips, attenuation_level, contributed_by } = beerData

    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={handleChange} name="name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Tagline</Form.Label>
                                <Form.Control type="text" value={tagline} onChange={handleChange} name="tagline" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>description</Form.Label>
                                <Form.Control type="text" value={description} onChange={handleChange} name="description" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>first brewed</Form.Label>
                                <Form.Control type="text" value={first_brewed} onChange={handleChange} name="first_brewed" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>brewers tips</Form.Label>
                                <Form.Control type="text" value={brewer_tips} onChange={handleChange} name="brewer_tips" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>attenuation level</Form.Label>
                                <Form.Control type="number" value={attenuation_level} onChange={handleChange} name="attenuation_level" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>contributed by</Form.Label>
                                <Form.Control type="text" value={contributed_by} onChange={handleChange} name="contributed_by" />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default BeerForm