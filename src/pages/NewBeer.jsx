import { Form, Button, Row, Col } from 'react-bootstrap'
import { useState } from "react"
import beerService from "../services/beer.services"

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

    const {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by
    } = beerData

    const handleChange = e => {
        const { value, name } = e.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        beerService
            .newBeer(beerData)
            .catch(err => console.log(err))
    }

    return (
        <Row>
            <Col></Col>
            <Col md={{ span: 5 }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleChange} name="name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="tagline">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control type="text" value={tagline} onChange={handleChange} name="tagline" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={description} onChange={handleChange} name="description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="first_brewed">
                        <Form.Label>First brewed</Form.Label>
                        <Form.Control type="text" value={first_brewed} onChange={handleChange} name="first_brewed" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="brewers_tips">
                        <Form.Label>Brewers tips</Form.Label>
                        <Form.Control type="text" value={brewers_tips} onChange={handleChange} name="brewers_tips" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="attenuation_level">
                        <Form.Label>Attenuation level</Form.Label>
                        <Form.Control type="number" value={attenuation_level} onChange={handleChange} name="attenuation_level" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contributed_by">
                        <Form.Label>Contributed by</Form.Label>
                        <Form.Control type="text" value={contributed_by} onChange={handleChange} name="contributed_by" />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="dark" type="submit">Create</Button>
                    </div>
                </Form>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default NewBeer