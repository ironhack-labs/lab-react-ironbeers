import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useState } from "react"
import './NewBeer.css'
import beersService from '../services/beers.services'


const NewBeer = () => {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: "",
        contributed_by: ""
    })

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData

    const handleChange = e => {
        console.log('ADIÓS')
        const { value, name } = e.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleSubmit = e => {
        console.log('HOLITA')
        e.preventDefault()

        beersService
            .newBeer(beerData)
            .then(({ data }) => {
                console.log(data)
            })
            .catch(ERR => console.error(ERR))
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form className='basicForm' onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={name} type="text" onChange={handleChange} name="name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Tagline</Form.Label>
                            <Form.Control value={tagline} type="text" onChange={handleChange} name="tagline" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={description} type="text" onChange={handleChange} name="description" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>First_brewed</Form.Label>
                            <Form.Control value={first_brewed} type="text" onChange={handleChange} name="first_brewed" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Brewer Tips</Form.Label>
                            <Form.Control value={brewers_tips} type="text" onChange={handleChange} name="brewers_tips" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Attenuation Level</Form.Label>
                            <Form.Control value={attenuation_level} type="number" onChange={handleChange} name="attenuation_level" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contributed By</Form.Label>
                            <Form.Control value={contributed_by} type="text" onChange={handleChange} name="contributed_by" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}

export default NewBeer
