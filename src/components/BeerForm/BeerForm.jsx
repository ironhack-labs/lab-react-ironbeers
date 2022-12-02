import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import serviceApi from "../../services/beer-api";
import { useNavigate } from "react-router-dom";

const BeerForm = () => {

    const navigate = useNavigate()

    const [beerData, setBeerData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: 0
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        serviceApi
            .newBeer(beerData)
            .then(() => navigate("/"))
            .catch(err => console.log(err))

    }

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={handleInput} value={name} name="name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Tagline</Form.Label>
                <Form.Control type="text" onChange={handleInput} value={tagline} name="tagline" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleInput} value={description} name="description" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>First Brewed</Form.Label>
                <Form.Control type="text" name="first_brewed" onChange={handleInput} value={first_brewed} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Brewers Tips</Form.Label>
                <Form.Control type="text" name="brewers_tips" onChange={handleInput} value={brewers_tips} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Attenuation Levels</Form.Label>
                <Form.Control type="number" name="attenuation_level" onChange={handleInput} value={attenuation_level} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contributed By</Form.Label>
                <Form.Control type="text" onChange={handleInput} value={contributed_by} name="contributed_by" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default BeerForm

