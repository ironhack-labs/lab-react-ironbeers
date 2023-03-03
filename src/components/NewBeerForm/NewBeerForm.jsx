import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import beersService from "../../services/beers.services";

const NewBeerForm = ({ setShowModal, loadBeers }) => {

    const [beerData, setBeerData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleBeerSubmit = e => {
        e.preventDefault()

        beersService
            .saveBeer(beerData)
            .then(({ data }) => {
                setShowModal(false)
                loadBeers()
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleBeerSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" value={beerData.name} onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="tagline">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" name="tagline" value={beerData.tagline} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="first_brewed">
                    <Form.Label>First brewed</Form.Label>
                    <Form.Control type="text" name="first_brewed" value={beerData.first_brewed} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="brewers_tips">
                    <Form.Label>Brewers tips</Form.Label>
                    <Form.Control type="text" name="brewers_tips" value={beerData.brewers_tips} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="attenuation_level">
                    <Form.Label>Attenuation level</Form.Label>
                    <Form.Control type="text" name="attenuation_level" value={beerData.attenuation_level} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="contributed_by">
                    <Form.Label>Contributed by</Form.Label>
                    <Form.Control type="text" name="contributed_by" value={beerData.contributed_by} onChange={handleInputChange} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" value={beerData.description} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit">Create new beer</Button>
        </Form>
    )

}

export default NewBeerForm