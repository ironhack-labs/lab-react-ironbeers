
import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import beersService from "../../services/beers.services"
import { Link, useNavigate } from "react-router-dom"


const NewBeerForm = () => {

    const navigate = useNavigate()

    const [beer, setBeer] = useState({
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
        setBeer({ ...beer, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        beersService.saveBeer(beer)
            .then(() => navigate('/beers'))
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={beer.name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="tagline">
                <Form.Label>Tagline</Form.Label>
                <Form.Control type="text" value={beer.tagline} onChange={handleInputChange} name="tagline" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={beer.description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="first_brewed">
                <Form.Label>First Brewed</Form.Label>
                <Form.Control type="text" value={beer.first_brewed} onChange={handleInputChange} name="first_brewed" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="brewers_tips">
                <Form.Label>Brewer Tips</Form.Label>
                <Form.Control type="text" value={beer.brewers_tips} onChange={handleInputChange} name="brewers_tips" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="attenuation_level">
                <Form.Label>Attenuation Level</Form.Label>
                <Form.Control type="number" value={beer.attenuation_level} onChange={handleInputChange} name="attenuation_level" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contributed_by">
                <Form.Label>Contributed By</Form.Label>
                <Form.Control type="text" value={beer.contributed_by} onChange={handleInputChange} name="contributed_by" />
            </Form.Group>

            <div className="d-grid mt-3">
                <Button variant="dark" type="submit">Create</Button>
            </div>
        </Form>
    )
}

export default NewBeerForm