import { useState } from "react"
import { Form, Button } from 'react-bootstrap'
import beersService from "../../services/beers.services"

const NewBeerForm = () => {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData

    const handleInputChange = e => {

        const { value, name } = e.target

        setBeerData({
            ...beerData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        beersService
            .createNewBeer(beerData)
            .then(({ data }) => console.log(data))
            .catch(err => console.log(err))

    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
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
                <Form.Label>First brewed</Form.Label>
                <Form.Control type="text" value={first_brewed} onChange={handleInputChange} name="first_brewed" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="brewers_tips">
                <Form.Label>Brewers tips</Form.Label>
                <Form.Control type="text" value={brewers_tips} onChange={handleInputChange} name="brewers_tips" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="attenuation_level">
                <Form.Label>Attenuation level</Form.Label>
                <Form.Control type="number" value={attenuation_level} onChange={handleInputChange} name="attenuation_level" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contributed_by">
                <Form.Label>Contributed by</Form.Label>
                <Form.Control type="text" value={contributed_by} onChange={handleInputChange} name="contributed_by" />
            </Form.Group>


            <div className="d-grid gap-2">
                <Button variant="dark" type="submit">Create new beer</Button>
            </div>

        </Form >

    )
}
export default NewBeerForm