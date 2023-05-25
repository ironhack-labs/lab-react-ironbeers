import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import BeerService from '../services/Beers.services';

const NewBeerForm = ({ updateList }) => {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
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

        BeerService
            .saveBeer(beerData)
            .then(() => {

                updateList()
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={beerData.name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="tagline">
                <Form.Label>tagline</Form.Label>
                <Form.Control type="text" value={beerData.tagline} onChange={handleInputChange} name="tagline" />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="first_brewed">
                        <Form.Label>first_brewed</Form.Label>
                        <Form.Control type="text" value={beerData.first_brewed} onChange={handleInputChange} name="first_brewed" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="lengbrewers_tipsth">
                        <Form.Label>brewers_tips</Form.Label>
                        <Form.Control type="text" value={beerData.brewers_tips} onChange={handleInputChange} name="brewers_tips" />
                    </Form.Group>

                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="attenuation_level">
                        <Form.Label>attenuation_level</Form.Label>
                        <Form.Control type="text" value={beerData.attenuation_level} onChange={handleInputChange} name="attenuation_level" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="contributed_by">
                        <Form.Label>contributed by:</Form.Label>
                        <Form.Control type="text" value={beerData.contributed_by} onChange={handleInputChange} name="contributed_by" />
                    </Form.Group>
                </Col>

            </Row>

            <div className="d-grid mt-3">
                <Button variant="dark" type="submit">Crear beer</Button>
            </div>
        </Form>
    )
}

export default NewBeerForm