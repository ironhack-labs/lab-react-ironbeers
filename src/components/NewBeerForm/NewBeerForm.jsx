import { useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { redirect } from "react-router-dom"
import beersService from "../../services/beers.services"

const NewBeerForm = () => {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleBeerSubmit = e => {
        e.preventDefault()
        beersService
            .createOneBeer(beerData)
            .then(({ data }) => {
                return redirect('/')
            })
            .catch(err => console.log(err))


    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Form className="col-6" onSubmit={handleBeerSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" name="name" value={beerData.name} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tagline">
                        <Form.Label>Tag line:</Form.Label>
                        <Form.Control type="text" name="tagline" value={beerData.tagline} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" name="description" value={beerData.description} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="first_brewed ">
                        <Form.Label>First brewed:</Form.Label>
                        <Form.Control type="text" name="first_brewed" value={beerData.first_brewed} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="brewers_tips ">
                        <Form.Label>Brewers tips:</Form.Label>
                        <Form.Control type="text" name="brewers_tips" value={beerData.brewers_tips} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="attenuation_level">
                        <Form.Label>Attenuation level:</Form.Label>
                        <Form.Control type="number" name="attenuation_level" value={beerData.attenuation_level} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contributed_by">
                        <Form.Label>Contributed by:</Form.Label>
                        <Form.Control type="text" name="contributed_by" value={beerData.contributed_by} onChange={handleInputChange} />
                    </Form.Group>
                    <Button variant="dark" type="submit">Crear cerveza</Button>
                </Form>
            </Row>
        </Container>
    )
}

export default NewBeerForm