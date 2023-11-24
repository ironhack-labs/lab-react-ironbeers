import { useState } from "react"
import beersService from "../services/beersService"
import { Button, Col, Form, Row } from "react-bootstrap"


const AddBeerPage = () => {

    const [newBeer, setNewBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: 0,

    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setNewBeer({ ...newBeer, [name]: value })
    }

    const handleInputSubmit = e => {
        e.preventDefault()

        beersService
            .getNewBeers(newBeer)
            .then(() => {
                loadBeers()
            })
            .catch(err => console.log(err))
    }

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }



    return (
        <div className="AddBeerPage">
            <Form onSubmit={handleInputSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" value={newBeer.name} name="name" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="tagline">
                    <Form.Label>tagline</Form.Label>
                    <Form.Control type="text" value={newBeer.tagline} name="tagline" onChange={handleInputChange} />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>description</Form.Label>
                            <Form.Control type="text" value={newBeer.description} name="description" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="first_brewed">
                            <Form.Label>first_brewed</Form.Label>
                            <Form.Control type="text" value={newBeer.first_brewed} name="first_brewed" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="brewers_tips">
                            <Form.Label>brewers tips</Form.Label>
                            <Form.Control type="text" value={newBeer.brewers_tips} name="brewers_tips" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="attenuation_level">
                            <Form.Label>attenuation level</Form.Label>
                            <Form.Control type="number" value={newBeer.attenuation_level} name="attenuation_level" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="contributed_by">
                            <Form.Label>contributed by</Form.Label>
                            <Form.Control type="number" value={newBeer.contributed_by} name="contributed_by" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Crear cervecita</Button>
                </div>
            </Form>
        </div>
    )

}

export default AddBeerPage
