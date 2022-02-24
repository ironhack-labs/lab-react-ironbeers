import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Navigate, useNavigate } from "react-router-dom"
import BeersAPI from "../../services/beers.service"

const NewBeerPage = () => {

    const [beerData, setBeerData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewer_tips: "",
        attenuation_level: 9,
        contributed_by: ""
    })

    const { name, tagline, first_brewed, brewer_tips, attenuation_level, description, contributed_by } = beerData

    const handleInputChange = e => {
        const { name, value } = e.target
        setBeerData({
            ...beerData,
            [name]: value
        })

    }

    const handleForm = e => {
        e.preventDefault()

        BeersAPI
            .saveBeer(beerData).then(({ data }) => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleForm}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="tagline">
                <Form.Label>Tagline</Form.Label>
                <Form.Control type="text" value={tagline} onChange={handleInputChange} name="tagline" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="first_brewed">
                <Form.Label>First Brewed</Form.Label>
                <Form.Control type="text" value={first_brewed} onChange={handleInputChange} name="first_brewed" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="brewer_tips">
                <Form.Label>Brewer Tips</Form.Label>
                <Form.Control type="text" value={brewer_tips} onChange={handleInputChange} name="brewer_tips" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="attenuation_level">
                <Form.Label>Attenuation level</Form.Label>
                <Form.Control type="text" value={attenuation_level} onChange={handleInputChange} name="attenuation_level" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contributed_by">
                <Form.Label>Contributed by</Form.Label>
                <Form.Control type="text" value={contributed_by} onChange={handleInputChange} name="contributed_by" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default NewBeerPage