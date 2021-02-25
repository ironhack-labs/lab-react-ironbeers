import React from 'react';
import './Beers.css'
import Navigation from './Navbar'
import { Form, Button } from 'react-bootstrap'


const RandomBeer = () => {
    return (
        <>
            <Navigation />
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> Name </Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit"> Submit </Button>
            </Form>
        </>
    )
}

export default RandomBeer