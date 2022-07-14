import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useState } from "react"
import beerService from "./../../services/beers.services.js"
const BeerForm = () => {
    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: '',
        contributed_by: ''
    })


    const {
        name,
        tagline,
        description,
        first_brewed,
        brewer_tips,
        attenuation_level,
        contributed_by
    } = beerData


    const handleChange = e => {
        const { value, name } = e.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Sending the state", beerData)
        beerService
            .saveBeer(beerData)
            .then((response) => {
                console.log(response)
            })
            .catch(ERR => console.error(ERR))
    }


    return (
        <Container>
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
                    <Form.Control type="text" value={description} as="textarea" rows={3} onChange={handleChange} name="description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="first_brewed">
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" value={first_brewed} onChange={handleChange} name="first_brewed" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="brewer_tips">
                    <Form.Label>Brewer Tips</Form.Label>
                    <Form.Control type="text" value={brewer_tips} onChange={handleChange} name="brewer_tips" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="attenuation_level">
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" value={attenuation_level} onChange={handleChange} name="attenuation_level" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contributed_by">
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control type="text" value={contributed_by} onChange={handleChange} name="contributed_by" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Add new
                </Button>
            </Form>
        </Container>
    )
}

export default BeerForm