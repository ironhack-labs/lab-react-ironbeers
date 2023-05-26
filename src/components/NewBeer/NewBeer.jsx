import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import beerApiService from '../../Services/beerApi.service'
import './NewBeer.css'

const NewBeer = () => {

    const navigate = useNavigate()

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

        beerApiService
            .saveBeer(beerData)
            .then(() => {
                navigate('/beers')
            })
            .catch(err => console.error(err))
    }

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData


    return (
        <>
            <h2 className="mt-4 add-beer-title">Add a new beer!</h2>
            <hr />
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label className="form-label">Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
                </Form.Group>

                <Col>
                    <Form.Group className="mb-3" controlId="tagline">
                        <Form.Label className="form-label">Tagline</Form.Label>
                        <Form.Control type="text" value={tagline} onChange={handleInputChange} name="tagline" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label className="form-label">Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={handleInputChange} name="description" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="brewers_tips">
                        <Form.Label className="form-label">Brewers Tips</Form.Label>
                        <Form.Control type="text" value={brewers_tips} onChange={handleInputChange} name="brewers_tips" />
                    </Form.Group>
                </Col>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="attenuation_level ">
                            <Form.Label className="form-label" l>Attenuation Level</Form.Label>
                            <Form.Control type="number" value={attenuation_level} onChange={handleInputChange} name="attenuation_level" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="first_brewed">
                            <Form.Label className="form-label">First Brewed</Form.Label>
                            <Form.Control type="text" value={first_brewed} onChange={handleInputChange} name="first_brewed" />
                        </Form.Group>

                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="contributed_by">
                    <Form.Label className="form-label">Contributed By</Form.Label>
                    <Form.Control type="text" value={contributed_by} onChange={handleInputChange} name="contributed_by" />
                </Form.Group>
                <div className="d-grid mt-5 mb-3">
                    <Button variant="dark" type="submit">Create New Beer</Button>
                </div>
            </Form>
        </>
    )
}

export default NewBeer