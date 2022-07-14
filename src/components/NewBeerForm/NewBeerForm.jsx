import { Form, Button, Container } from 'react-bootstrap'
import { useState } from "react"
import beerService from '../../services/AllBeers.service'

const NewBeerForm = ({ }) => {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',

    })

    const handleChange = e => {
        const { value, name } = e.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        beerService
            .saveNewBeer(beerData)
            .then(() => {

            })
            .catch(err => console.error(err))
    }


    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData

    return (

        <div className="BeerForm">

            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleChange} name="name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="tagline">
                        <Form.Label>Slogan</Form.Label>
                        <Form.Control type="text" value={tagline} onChange={handleChange} name="tagline" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" value={description} onChange={handleChange} name="description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="first_brewed">
                        <Form.Label>Primera elaboración</Form.Label>
                        <Form.Control type="text" value={first_brewed} onChange={handleChange} name="first_brewed" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="brewers_tips">
                        <Form.Label>Consejos cerveceros</Form.Label>
                        <Form.Control type="text" value={brewers_tips} onChange={handleChange} name="brewers_tips" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="attenuation_level">
                        <Form.Label>Graduación Alcohólica</Form.Label>
                        <Form.Control type="number" value={attenuation_level} onChange={handleChange} name="attenuation_level" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contributed_by">
                        <Form.Label>Distribuidor oficial</Form.Label>
                        <Form.Control type="text" value={contributed_by} onChange={handleChange} name="contributed_by" />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="dark" type="submit">Registrar cerveza </Button>
                    </div>

                </Form>
            </Container>
        </div>
    )
}

export default NewBeerForm