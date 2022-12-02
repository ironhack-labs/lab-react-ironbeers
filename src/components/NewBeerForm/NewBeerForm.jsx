import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import beersService from "../../services/beers.service"
import { Link } from "react-router-dom"

const NewBeerForm = ({ closeModal, refreshList }) => {

    const [newBeer, setNewBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const [createdBeerMessage, setCreatedBeerMessage] = useState(false)

    const message = () => {
        setCreatedBeerMessage(true)
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        console.log(e.target.value)
        setNewBeer({ ...newBeer, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        beersService
            .createNewBeer(newBeer)
            .then(() => {
                closeModal()
                refreshList()
            }
            )
            .catch(err => console.error(err))
    }

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = newBeer

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} name="name" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tagline">
                <Form.Label>Tagline</Form.Label>
                <Form.Control type="text" value={tagline} name="tagline" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={description} name="description" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="first_brewed">
                <Form.Label>First brewed</Form.Label>
                <Form.Control type="text" value={first_brewed} name="first_brewed" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="brewers_tips">
                <Form.Label>Brewers tips</Form.Label>
                <Form.Control type="text" value={brewers_tips} name="brewers_tips" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="attenuation_level">
                <Form.Label>Attenuation level</Form.Label>
                <Form.Control type="number" value={attenuation_level} name="attenuation_level" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contributed_by">
                <Form.Label>Contributed by:</Form.Label>
                <Form.Control type="text" value={contributed_by} name="contributed_by" onChange={handleInputChange} />
            </Form.Group>
            <div className="d-grid">
                <Button variant="outline-info" type="submit" onClick={message}>Create new beer!</Button>

                {createdBeerMessage && <p className="text-success m-2 fs-2">Created Beer! Go to list and check it.</p>}

            </div>
        </Form>
    )
}

export default NewBeerForm