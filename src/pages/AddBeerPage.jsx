import { useEffect, useState } from "react"
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import axios from "axios"

function AddBeerPage() {

    const [beerData, setBeerData] = useState({
        name: 'Beer name here',
        tagline: 'Your beer in a sentence',
        description: 'How would you describe this beer?',
        first_brewed: 'Date/year',
        brewers_tips: 'You tell me!',
        attenuation_level: 0,
        contributed_by: 'Your name here',
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setBeerData({ ...beerData, [name]: value })
    }

    const handleBeerSubmit = e => {

        e.preventDefault()
        console.log(beerData)

        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', beerData)
            .then(response => {
                console.log('your beer is added!')
            })
            .catch(err => console.log(err))
    }

    return (

        <div className="AddBeerPage mt-5">

            <Form onSubmit={handleBeerSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Beer name</Form.Label>
                    <Form.Control type="text" value={beerData.name} name="name" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="tagline">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" value={beerData.tagline} name="tagline" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={beerData.description} name="description" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="brewers_tips">
                    <Form.Label>Brewer tips</Form.Label>
                    <Form.Control type="text" value={beerData.brewers_tips} name="brewers_tips" onChange={handleInputChange} />
                </Form.Group>

                <Row>

                    <Col>

                        <Form.Group className="mb-3" controlId="first_brewed">
                            <Form.Label>First Brewed</Form.Label>
                            <Form.Control type="text" value={beerData.first_brewed} name="first_brewed" onChange={handleInputChange} />
                        </Form.Group>

                    </Col>

                    <Col>

                        <Form.Group className="mb-3" controlId="attenuation_level">
                            <Form.Label>Attenuation level</Form.Label>
                            <Form.Control type="number" value={beerData.attenuation_level} name="attenuation_level" onChange={handleInputChange} />
                        </Form.Group>

                    </Col>

                </Row>

                <Form.Group className="mb-3" controlId="contributed_by">
                    <Form.Label>Contributed by</Form.Label>
                    <Form.Control type="text" value={beerData.contributed_by} name="contributed_by" onChange={handleInputChange} />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Add beer</Button>
                </div>


            </Form>

        </div >

    )

}

export default AddBeerPage