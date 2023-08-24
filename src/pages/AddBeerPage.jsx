import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap"
import axios from "axios";
function AddBeerPage() {
    const [beerData, setBeerData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",

    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setBeerData({ ...beerData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerData)
            .then(() => {

                console.log("------->exit")
            })
            .catch(error => {
                console.error('There was an error!', error);
            })

    }
    return (
        <div className="NewForm">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" value={beerData.name} name="name" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="tagline">
                    <Form.Label>tagline</Form.Label>
                    <Form.Control type="text" value={beerData.tagline} name="tagline" onChange={handleInputChange} />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>description</Form.Label>
                            <Form.Control type="text" value={beerData.description} name="description" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="first_brewed">
                            <Form.Label>first_brewed</Form.Label>
                            <Form.Control type="text" value={beerData.first_brewed} name="first_brewed" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="brewers_tips">
                            <Form.Label>brewers_tips</Form.Label>
                            <Form.Control type="text" value={beerData.brewers_tips} name="brewers_tips" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="attenuation_level">
                            <Form.Label>attenuation_level</Form.Label>
                            <Form.Control type="number" value={beerData.attenuation_level} name="attenuation_level" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="contributed_by">
                            <Form.Label>contributed_by</Form.Label>
                            <Form.Control type="text" value={beerData.contributed_by} name="contributed_by" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Crear </Button>
                </div>
            </Form>
        </div>
    )



}

export default AddBeerPage;
