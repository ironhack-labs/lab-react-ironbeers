import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import beersService from "../../services/beers.service"
import { Navigate } from "react-router-dom"


const NewBeer = () => {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        beersService
            .saveBeer(beerData)
            .then(() => {
            })
            .catch(err => console.error(err))
    }

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData


    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="tagline">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control type="text" value={tagline} onChange={handleInputChange} name="tagline" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="first_brewed">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control type="text" value={first_brewed} onChange={handleInputChange} name="first_brewed" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="brewers_tips">
                        <Form.Label>Brewers Tips</Form.Label>
                        <Form.Control type="text" value={brewers_tips} onChange={handleInputChange} name="brewers_tips" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="attenuation_level ">
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control type="number" value={attenuation_level} onChange={handleInputChange} name="attenuation_level" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="contributed_by">
                        <Form.Label>Contributed By</Form.Label>
                        <Form.Control type="text" value={contributed_by} onChange={handleInputChange} name="contributed_by" />
                    </Form.Group>
                </Col>
            </Row>
            <div className="d-grid">
                <Button variant="dark" type="submit">Crate New Beer</Button>
            </div>
        </Form>
    )
}

export default NewBeer