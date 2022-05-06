import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import ironBeers from '../../services/beers.services'

const NewBeerPage = () => {

    const [newBeerData, setNewBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: 0,
        contributed_by: '',
    })

    const { name, tagline, description, first_brewed, attenuation_level, contributed_by } = newBeerData

    const handleInputChange = e => {

        const { value, name } = e.target

        setNewBeerData({
            ...newBeerData,
            [name]: value
        })
    }


    const handleSubmit = e => {
        e.preventDefault()

        ironBeers
            .saveBeer(newBeerData)
            .then({ newBeerData })
            .catch(err => console.log(err))
    }



    return (
        <>

            <Container>
                <Row>
                    <h2>Create new Beer</h2>
                    <Col md={{ span: 6, offset: 3 }}>
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
                                <Form.Label>Desciption</Form.Label>
                                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="first_brewed">
                                <Form.Label>First Brewed</Form.Label>
                                <Form.Control type="text" value={first_brewed} onChange={handleInputChange} name="first_brewed" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="attenuation_level">
                                <Form.Label>Attenuation Level</Form.Label>
                                <Form.Control type="number" value={attenuation_level} onChange={handleInputChange} name="attenuation_level" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="contributed_by">
                                <Form.Label>Contibuted By</Form.Label>
                                <Form.Control type="text" value={contributed_by} onChange={handleInputChange} name="contributed_by" />
                            </Form.Group>

                            <div className="d-grid gap-2">
                                <Button variant="dark" type="submit">Add New Beer</Button>
                            </div>

                        </Form >
                    </Col>
                </Row>
            </Container >
        </>

    )
}


export default NewBeerPage