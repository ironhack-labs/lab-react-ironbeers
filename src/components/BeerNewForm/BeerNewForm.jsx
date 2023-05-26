import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import beersService from "../../services/beers.services"

const NewBeerForm = () => {

    const [beerData, setBeerData] = useState({
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
        setBeerData({ ...beerData, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        beersService
            .saveBeer(beerData)
            .then(() => {

            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={beerData.name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="tagline">
                <Form.Label>Tagline</Form.Label>
                <Form.Control type="text" value={beerData.tagline} onChange={handleInputChange} name="tagline" />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={beerData.description} onChange={handleInputChange} name="description" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="first_brewed">
                        <Form.Label>First brewed</Form.Label>
                        <Form.Control type="text" value={beerData.first_brewed} onChange={handleInputChange} name="first_brewed" />
                    </Form.Group>

                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="brewers_tips">
                        <Form.Label>Brewers tips</Form.Label>
                        <Form.Control type="text" value={beerData.brewers_tips} onChange={handleInputChange} name="brewers_tips" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="attenuation_level">
                        <Form.Label>Attenuation level</Form.Label>
                        <Form.Control type="text" value={beerData.attenuation_level} onChange={handleInputChange} name="attenuation_level" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="contributed_by">
                        <Form.Label>Contributed by</Form.Label>
                        <Form.Control type="text" value={beerData.contributed_by} onChange={handleInputChange} name="contributed_by" />
                    </Form.Group>
                </Col>

            </Row>

            <div className="d-grid mt-3">
                <Button variant="dark" type="submit">New beer register</Button>
            </div>
        </Form>
    )
}

export default NewBeerForm;