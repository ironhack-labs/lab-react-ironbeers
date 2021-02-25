import React from 'react';
import './Beers.css'
import Navigation from './Navbar'
import { Form, Button, Container } from 'react-bootstrap'


const NewBeer = () => {
    return (
        <>
            <Navigation />
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Name </Form.Label>
                        <Form.Control type="text" name="name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control type="text" name="tagLine" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" name="imageurl" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control type="text" name="first_brewed" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Brewers tips </Form.Label>
                        <Form.Control type="text" name="brewers_tips" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Attenuation level</Form.Label>
                        <Form.Control type="number" name="attenuation_level" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Contributed by</Form.Label>
                        <Form.Control type="text" name="contributed_by" />
                    </Form.Group>

                    <Button variant="primary" type="submit"> Submit </Button>
                </Form>
            </Container>

        </>
    )
}

export default NewBeer